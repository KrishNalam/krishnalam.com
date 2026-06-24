import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PERSONAL, PROJECTS, WORKS_IN_PROGRESS } from '@/data/config';

export const metadata: Metadata = {
	title: `Project Archive — ${PERSONAL.name}`,
	description: 'A fuller list of things Krish Nalam has designed, built, and broken.',
};

type Row = { title: string; blurb: string; stack: string[]; url: string; tag: string };

const ROWS: Row[] = [
	...PROJECTS.map((p) => ({
		title: p.title,
		blurb: p.description,
		stack: p.stack,
		url: p.url,
		tag: p.award ?? 'Project',
	})),
	...WORKS_IN_PROGRESS.map((w) => ({
		title: w.name,
		blurb: w.description,
		stack: [] as string[],
		url: w.url,
		tag: 'In progress',
	})),
];

function StackPills({ stack }: { stack: string[] }) {
	return (
		<ul className="flex flex-wrap gap-1.5">
			{stack.map((tech) => (
				<li
					key={tech}
					className="whitespace-nowrap rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-ink-2"
				>
					{tech}
				</li>
			))}
		</ul>
	);
}

export default function ArchivePage() {
	return (
		<main className="mx-auto max-w-4xl px-6 py-16 font-sans md:px-12 md:py-24">
			<Link
				href="/#projects"
				className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-2 transition-colors hover:text-ink"
			>
				<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" />
				{PERSONAL.name}
			</Link>

			<header className="mt-12">
				<h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
					Project Archive
				</h1>
				<p className="mt-3 text-ink-2">
					A fuller list of things I&rsquo;ve designed, built, and broken.
				</p>
			</header>

			<table className="mt-12 w-full border-collapse text-left">
				<thead className="sr-only lg:not-sr-only">
					<tr className="border-b border-line">
						<th className="eyebrow py-4 pr-8 font-normal text-ink-3">Project</th>
						<th className="eyebrow hidden py-4 pr-8 font-normal text-ink-3 lg:table-cell">
							Built with
						</th>
						<th className="eyebrow py-4 font-normal text-ink-3">Link</th>
					</tr>
				</thead>
				<tbody>
					{ROWS.map((r) => (
						<tr
							key={r.title}
							className="border-b border-line align-top transition-colors hover:bg-surface"
						>
							<td className="py-5 pr-8">
								<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
									<span className="font-medium text-ink">{r.title}</span>
									<span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-ink-3">
										{r.tag}
									</span>
								</div>
								<p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-3">{r.blurb}</p>
								{r.stack.length > 0 && (
									<div className="mt-3 lg:hidden">
										<StackPills stack={r.stack} />
									</div>
								)}
							</td>
							<td className="hidden py-5 pr-8 lg:table-cell">
								<StackPills stack={r.stack} />
							</td>
							<td className="py-5">
								<a
									href={r.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Visit ${r.title}`}
									className="inline-block text-ink-3 transition-colors hover:text-ink"
								>
									<ArrowUpRight className="size-5" />
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}
