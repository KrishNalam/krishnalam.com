import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PERSONAL } from '@/data/config';
import { Experience } from '@/components/sections/Experience';

export const metadata: Metadata = {
	title: `Experience — ${PERSONAL.name}`,
	description: 'Every role Krish Nalam has worked in, newest first.',
};

export default function ExperiencePage() {
	return (
		<main className="mx-auto max-w-4xl px-6 py-16 font-sans md:px-12 md:py-24">
			<Link
				href="/#experience"
				className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-2 transition-colors hover:text-ink"
			>
				<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" />
				{PERSONAL.name}
			</Link>

			<header className="mb-12 mt-12">
				<h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">Experience</h1>
				<p className="mt-3 text-ink-2">Everywhere I&rsquo;ve worked, newest first.</p>
			</header>

			<Experience />
		</main>
	);
}
