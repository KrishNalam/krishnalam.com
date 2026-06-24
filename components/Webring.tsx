import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WEBRING } from '@/data/config';

/** This site's slot in the UofT Webring (https://uoftwebring.com). */
export function Webring() {
	return (
		<div className="flex items-center gap-4">
			<div className="flex items-center gap-3">
				<a
					href={WEBRING.prev}
					aria-label="Previous site in the UofT Webring"
					className="text-ink-3 transition-colors hover:text-ink"
				>
					<ChevronLeft className="size-5" />
				</a>
				<a
					href={WEBRING.home}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="UofT Webring home"
					className="transition-opacity hover:opacity-80"
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={WEBRING.logo} alt="UofT Webring" className="size-8" />
				</a>
				<a
					href={WEBRING.next}
					aria-label="Next site in the UofT Webring"
					className="text-ink-3 transition-colors hover:text-ink"
				>
					<ChevronRight className="size-5" />
				</a>
			</div>
		</div>
	);
}
