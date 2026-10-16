import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const CLS =
	'group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-ink-2';

type Cta = { href: string; label: string };

/** Row of underlined text links used between sections. Internal pages route via next/link; external links and PDFs open in a new tab. */
export function CtaButton({ links }: { links: Cta[] }) {
	return (
		<div className="-mt-6 mb-16 flex flex-wrap gap-x-8 gap-y-3 lg:-mt-16 lg:mb-28">
			{links.map(({ href, label }) => {
				const inner = (
					<>
						<span className="underline decoration-1 underline-offset-4">{label}</span>
						<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
					</>
				);
				return /^https?:|\.pdf$/.test(href) ? (
					<a key={href} href={href} target="_blank" rel="noopener noreferrer" className={CLS}>
						{inner}
					</a>
				) : (
					<Link key={href} href={href} className={CLS}>
						{inner}
					</Link>
				);
			})}
		</div>
	);
}
