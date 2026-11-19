import { getEntries } from '@/lib/logbook';
import { SectionHeading } from '../SectionHeading';
import { LogbookList } from '../LogbookList';

/** Home-page logbook: the latest few entries. The full log lives at /logbook. */
export function Logbook({ limit = 3 }: { limit?: number }) {
	const entries = getEntries();
	return (
		<section id="logbook" className="mb-16 scroll-mt-16 lg:mb-28" aria-label="Logbook">
			<SectionHeading>Logbook</SectionHeading>
			{entries.length === 0 ? <p className="text-ink-3">Coming soon.</p> : <LogbookList entries={entries.slice(0, limit)} />}
		</section>
	);
}
