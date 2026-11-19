import { Fragment } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { LOG_KIND_LABEL, PERSONAL } from '@/data/config';
import { formatDate, getEntries, getEntry } from '@/lib/logbook';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return getEntries().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const entry = getEntry((await params).slug);
	if (!entry) return {};
	const images = entry.image ? [entry.image.src] : undefined;
	return {
		title: `${entry.title} — ${PERSONAL.name}`,
		description: entry.summary,
		openGraph: { title: entry.title, description: entry.summary, type: 'article', publishedTime: entry.date, images },
		twitter: { card: 'summary_large_image', title: entry.title, description: entry.summary, images },
	};
}

/** Renders [text](url) links inside a paragraph; everything else stays plain text. */
function renderInline(text: string) {
	return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
		const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
		if (!m)
			return part.split(/(\*\*[^*]+\*\*)/g).map((b, j) =>
				/^\*\*[^*]+\*\*$/.test(b) ? (
					<strong key={`${i}-${j}`} className="font-semibold">
						{b.slice(2, -2)}
					</strong>
				) : (
					b
				),
			);
		const [, label, href] = m;
		const cls = 'underline decoration-1 underline-offset-4 hover:text-ink-2';
		return /^https?:/.test(href) ? (
			<a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
				{label}
			</a>
		) : (
			<Link key={i} href={href} className={cls}>
				{label}
			</Link>
		);
	});
}

const LINK_CLS = 'group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-ink-2';

export default async function LogEntryPage({ params }: Props) {
	const entry = getEntry((await params).slug);
	if (!entry) notFound();

	const outbound = [
		...(entry.links ?? []),
		...(entry.posted?.x ? [{ label: 'Discuss on X', url: entry.posted.x }] : []),
		...(entry.posted?.linkedin ? [{ label: 'Discuss on LinkedIn', url: entry.posted.linkedin }] : []),
	];

	return (
		<main className="mx-auto max-w-2xl px-6 py-16 font-sans md:px-12 md:py-24 lg:max-w-5xl">
			<Link
				href="/logbook"
				className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-2 transition-colors hover:text-ink"
			>
				<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" />
				Logbook
			</Link>

			<article className="mt-12">
				<p className="eyebrow text-ink-3">
					<time dateTime={entry.date}>{formatDate(entry.date)}</time> · {LOG_KIND_LABEL[entry.kind]}
					{entry.draft && ' · draft'}
				</p>
				<h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">{entry.title}</h1>
				<p className="mt-4 max-w-3xl text-lg text-ink-2">{entry.summary}</p>

				{entry.image && (
					<Image
						src={entry.image.src}
						alt={entry.image.alt}
						width={1600}
						height={900}
						className="mt-10 h-auto w-full rounded-lg border border-line"
						priority
					/>
				)}

				<div className="mt-12 space-y-5 text-[1.0625rem] leading-relaxed">
					{entry.body.map((para, i) => (
						<Fragment key={i}>
							{para.startsWith('## ') ? (
								<h2 className="!mt-14 max-w-3xl font-display text-2xl font-bold tracking-tight text-ink first:!mt-0">
									{para.slice(3)}
								</h2>
							) : para.startsWith('|') ? (
								<div className="max-w-3xl overflow-x-auto rounded-lg border border-line">
									<table className="w-full text-left text-[0.95rem]">
										{para.split('\n').map((row, r) => {
											const cells = row.replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
											const Cell = r === 0 ? 'th' : 'td'
											const content = cells.map((c, k) => (
												<Cell key={k} className={`w-1/2 px-4 py-3 align-top ${r === 0 ? 'bg-accent-soft font-display font-bold' : 'border-t border-line'} ${k > 0 ? 'border-l border-line' : ''}`}>
													{renderInline(c)}
												</Cell>
											))
											return r === 0 ? (
												<thead key={r}><tr>{content}</tr></thead>
											) : (
												<tbody key={r}><tr>{content}</tr></tbody>
											)
										})}
									</table>
								</div>
							) : (
								<p className="max-w-3xl text-ink">{renderInline(para)}</p>
							)}
							{entry.figures
								?.filter((f) => f.after === i)
								.map((f) => (
									<figure key={f.src} className="!my-10">
										<Image
											src={f.src}
											alt={f.alt}
											width={1800}
											height={990}
											className="h-auto w-full rounded-lg border border-line"
										/>
										{f.caption && <figcaption className="mt-3 text-sm text-ink-3">{f.caption}</figcaption>}
									</figure>
								))}
						</Fragment>
					))}
				</div>

				{entry.tags && entry.tags.length > 0 && (
					<ul className="mt-10 flex flex-wrap gap-1.5">
						{entry.tags.map((tag) => (
							<li key={tag} className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-ink-2">
								{tag}
							</li>
						))}
					</ul>
				)}

				{outbound.length > 0 && (
					<div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
						{outbound.map(({ label, url }) => (
							<a key={url} href={url} target="_blank" rel="noopener noreferrer" className={LINK_CLS}>
								<span className="underline decoration-1 underline-offset-4">{label}</span>
								<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
							</a>
						))}
					</div>
				)}
			</article>
		</main>
	);
}
