import { ArrowUpRight, Trophy } from 'lucide-react';
import { PROJECTS } from '@/data/config';
import { SectionHeading } from '../SectionHeading';

export function Projects() {
	return (
		<section id="projects" className="mb-16 scroll-mt-16 lg:mb-28" aria-label="Selected projects">
			<SectionHeading>Projects</SectionHeading>

			<ol className="group/list">
				{PROJECTS.map((project) => (
					<li key={project.title} className="mb-10">
						<div className="group relative pb-1 transition-all motion-reduce:transition-none lg:hover:!opacity-100 lg:group-hover/list:opacity-40">
							{/* Hover highlight slab */}
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface lg:group-hover:shadow-[inset_0_0_0_1px_var(--line)]" />

							<div className="relative z-10">
								<div className="flex flex-wrap items-center gap-x-3 gap-y-2">
									<h3>
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											className="group/link inline-flex items-baseline text-lg font-medium leading-tight text-ink transition-colors hover:text-accent focus-visible:text-accent"
										>
											{/* Full-card hit target so the whole row is clickable */}
											<span className="absolute -inset-x-4 -inset-y-4 hidden rounded-lg lg:block" />
											<span>
												{project.title}
												<ArrowUpRight className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
											</span>
										</a>
									</h3>

									{project.award && (
										<span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-ink shadow-sm ring-1 ring-accent/30">
											<Trophy className="size-3.5" />
											{project.award}
										</span>
									)}
								</div>

								<p className="mt-2 leading-relaxed text-ink-2">{project.description}</p>

								<ul className="mt-3 space-y-1.5">
									{project.bullets.map((b, i) => (
										<li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-2">
											<span className="mt-2 size-1 shrink-0 rounded-full bg-ink-3" />
											{b}
										</li>
									))}
								</ul>

								<ul className="mt-4 flex flex-wrap gap-1.5">
									{project.stack.map((tech) => (
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
