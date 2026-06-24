import { ABOUT, EDUCATION } from '@/data/config';
import { SectionHeading } from '../SectionHeading';

export function About() {
	return (
		<section id="about" className="mb-10 scroll-mt-16 lg:mb-12" aria-label="About me">
			<SectionHeading>About</SectionHeading>
			<div className="space-y-4 leading-relaxed">
				{ABOUT.body.map((p) => (
					<p key={p}>{p}</p>
				))}
				<p>
					Currently studying{' '}
					<span className="font-medium text-ink">{EDUCATION.degree}</span> at{' '}
					<span className="font-medium text-ink">{EDUCATION.school}</span> ({EDUCATION.period}).
				</p>
			</div>
		</section>
	);
}
