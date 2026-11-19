import Link from 'next/link';
import { LOG_KIND_LABEL, type LogEntry } from '@/data/config';
import { formatDate } from '@/lib/logbook';

/** Hover-dim list of logbook entries, each linking to its own page. */
export function LogbookList({ entries }: { entries: LogEntry[] }) {
	return (
		<ol className="group/list">
			{entries.map((entry) => (
				<li key={entry.slug} className="mb-10">
					<div className="group relative grid gap-4 pb-1 transition-all motion-reduce:transition-none sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40">
						<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface lg:group-hover:shadow-[inset_0_0_0_1px_var(--line)]" />

						<header className="eyebrow z-10 mt-1 text-ink-3 sm:col-span-2">
							<time dateTime={entry.date}>{formatDate(entry.date)}</time>
							<span className="mt-1 block">{LOG_KIND_LABEL[entry.kind]}</span>
						</header>

						<div className="z-10 sm:col-span-6">
							<h3 className="font-medium leading-snug text-ink">
								<Link href={`/logbook/${entry.slug}`} className="group/link">
									<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
									{entry.title}
									{entry.draft && <span className="ml-2 text-xs text-ink-3">(draft)</span>}
								</Link>
							</h3>
							<p className="mt-2 text-sm leading-relaxed">{entry.summary}</p>

							{entry.tags && entry.tags.length > 0 && (
								<ul className="mt-3 flex flex-wrap gap-1.5">
									{entry.tags.map((tag) => (
										<li
											key={tag}
											className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-ink-2"
										>
											{tag}
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</li>
			))}
		</ol>
	);
}
