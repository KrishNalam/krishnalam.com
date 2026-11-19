import { PERSONAL } from '@/data/config';
import { getEntries } from '@/lib/logbook';

export const dynamic = 'force-static';

const SITE = 'https://krishnalam.com';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function GET() {
	const items = getEntries()
		.filter((e) => !e.draft)
		.map(
			(e) => `<item><title>${esc(e.title)}</title><link>${SITE}/logbook/${e.slug}</link><guid>${SITE}/logbook/${e.slug}</guid><pubDate>${new Date(`${e.date}T12:00:00Z`).toUTCString()}</pubDate><description>${esc(e.summary)}</description></item>`,
		)
		.join('');
	const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(PERSONAL.name)} — Logbook</title><link>${SITE}/logbook</link><description>Builds, hackathons, and notes.</description>${items}</channel></rss>`;
	return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
