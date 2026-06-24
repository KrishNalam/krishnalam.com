import { LOGBOOK } from '@/data/config';
import { SectionHeading } from '../SectionHeading';

export function Logbook() {
	return (
		<section id="logbook" className="mb-16 scroll-mt-16 lg:mb-28" aria-label="Learning logbook">
			<SectionHeading>Logbook</SectionHeading>

			<ol className="group/list">
				{LOGBOOK.map((entry) => (
					<li key={entry.date + entry.title} className="mb-10">
						<div className="group relative grid gap-4 pb-1 transition-all motion-reduce:transition-none sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface lg:group-hover:shadow-[inset_0_0_0_1px_var(--line)]" />

							<header className="eyebrow z-10 mt-1 text-ink-3 sm:col-span-2">
								{entry.date}
							</header>

							<div className="z-10 sm:col-span-6">
								<h3 className="font-medium leading-snug text-ink">{entry.title}</h3>
								<p className="mt-2 text-sm leading-relaxed">{entry.body}</p>

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
		</section>
	);
}
