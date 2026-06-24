import { SKILLS } from '@/data/config';

const TECH = SKILLS.flatMap((g) => g.items);

function Row() {
	return (
		<ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden>
			{TECH.map((t) => (
				<li
					key={t}
					className="whitespace-nowrap rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-2"
				>
					{t}
				</li>
			))}
		</ul>
	);
}

/** Slim, auto-scrolling strip of the tech stack — pauses on hover. */
export function TechMarquee() {
	return (
		<div className="marquee relative mb-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] lg:mb-28">
			{/* Screen readers get the list once, plainly */}
			<span className="sr-only">Tech stack: {TECH.join(', ')}.</span>
			<div className="marquee-track">
				<Row />
				<Row />
			</div>
		</div>
	);
}
