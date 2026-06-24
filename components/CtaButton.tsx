import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const CLS =
	'group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-ink-2';

/** Underlined text link used between sections. Internal hrefs route via next/link. */
export function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
	const external = /^https?:/.test(href);
	const inner = (
		<>
			<span className="underline decoration-1 underline-offset-4">{children}</span>
			<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
		</>
	);

	return (
		<div className="-mt-6 mb-16 lg:-mt-16 lg:mb-28">
			{external ? (
				<a href={href} target="_blank" rel="noopener noreferrer" className={CLS}>
					{inner}
				</a>
			) : (
				<Link href={href} className={CLS}>
					{inner}
				</Link>
			)}
		</div>
	);
}
