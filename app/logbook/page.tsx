import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PERSONAL } from '@/data/config';
import { getEntries } from '@/lib/logbook';
import { LogbookList } from '@/components/LogbookList';

export const metadata: Metadata = {
	title: `Logbook — ${PERSONAL.name}`,
	description: 'Builds, hackathons, and notes on what matters in software right now.',
	alternates: { types: { 'application/rss+xml': '/logbook/rss.xml' } },
};

export default function LogbookPage() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16 font-sans md:px-12 md:py-24">
			<Link
				href="/#logbook"
				className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-2 transition-colors hover:text-ink"
			>
				<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" />
				{PERSONAL.name}
			</Link>
			<header className="mb-16 mt-12">
				<h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">Logbook</h1>
				<p className="mt-3 text-ink-2">Builds, hackathons, and notes on what matters in software right now.</p>
			</header>
			<LogbookList entries={getEntries()} />
		</main>
	);
}
