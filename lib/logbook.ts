import { LOGBOOK, type LogEntry } from '@/data/config';

const SHOW_DRAFTS = process.env.NODE_ENV !== 'production';

/** Published entries, newest first. Drafts appear only in dev. */
export function getEntries(): LogEntry[] {
	return LOGBOOK.filter((e) => SHOW_DRAFTS || !e.draft).sort((a, b) => b.date.localeCompare(a.date));
}

export function getEntry(slug: string): LogEntry | undefined {
	return getEntries().find((e) => e.slug === slug);
}

export function formatDate(iso: string): string {
	return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC',
	});
}
