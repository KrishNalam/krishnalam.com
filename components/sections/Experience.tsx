import { EXPERIENCES } from '@/data/config';
import { SectionHeading } from '../SectionHeading';

/** Short monogram from the company name (before the em-dash). */
function monogram(company: string) {
	const name = company.split('—')[0].trim();
	const parts = name.split(/\s+/).filter(Boolean);
	if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
	return parts
		.map((p) => p[0])
		.join('')
		.slice(0, 3)
		.toUpperCase();
}

export function Experience() {
	return (
		<section id="experience" className="mb-16 scroll-mt-16 lg:mb-28" aria-label="Work experience">
			<SectionHeading>Experience</SectionHeading>

			{/* group/list powers the "dim the rest, light up the hovered one" effect */}
			<ol className="group/list">
				{EXPERIENCES.map((job) => (
					<li key={`${job.company}-${job.start}`} className="mb-10">
						<div className="group relative grid gap-4 pb-1 transition-all motion-reduce:transition-none sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40">
							{/* Hover highlight slab */}
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface lg:group-hover:shadow-[inset_0_0_0_1px_var(--line)]" />

							<header className="z-10 flex items-center gap-3 sm:col-span-2 sm:flex-col sm:items-start sm:gap-3">
								{job.logo ? (
									// eslint-disable-next-line @next/next/no-img-element
									<img
										src={job.logo}
										alt={job.company}
										className="size-16 shrink-0 object-contain"
									/>
								) : (
									<span className="flex size-16 shrink-0 items-center justify-center font-display text-xl font-bold tracking-tight text-ink">
										{monogram(job.company)}
									</span>
								)}
								<span className="eyebrow mt-1 text-ink-3">
									{job.start} — {job.end}
								</span>
							</header>

							<div className="z-10 sm:col-span-6">
								<h3 className="font-medium leading-snug text-ink">
									{job.role} <span className="text-ink-2">· {job.company}</span>
								</h3>

								<ul className="mt-3 space-y-2">
									{job.bullets.map((b, i) => (
										<li key={i} className="flex gap-3 text-sm leading-relaxed">
											<span className="mt-2 size-1 shrink-0 rounded-full bg-ink-3" />
											{b}
										</li>
									))}
								</ul>

								<ul className="mt-4 flex flex-wrap gap-1.5">
									{job.stack.map((tech) => (
										<li key={tech}>
											<span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent">
												{tech}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</li>
				))}
			</ol>
		</section>
	);
}
