'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Coffee, Code2, BrainCircuit } from 'lucide-react';
import { PERSONAL, SOCIALS } from '@/data/config';
import { cn } from '@/lib/cn';
import { Webring } from './Webring';

const NAV = [
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'logbook', label: 'Logbook' },
];

const MOTTO = [
	{ icon: Coffee, label: 'Coffee' },
	{ icon: Code2, label: 'Code' },
	{ icon: BrainCircuit, label: 'Concentration' },
];

export function Sidebar() {
	const [active, setActive] = useState('about');

	// Scroll-spy: the active section is the last one whose top has passed a
	// line ~1/3 down the viewport. Handled on scroll (not via an observer band)
	// so the short first/last sections stay reachable at the very top/bottom.
	useEffect(() => {
		const ids = NAV.map((n) => n.id);

		const onScroll = () => {
			const line = window.innerHeight * 0.33;
			let current = ids[0];
			for (const id of ids) {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= line) current = id;
			}
			// Pin the last section once we've reached the bottom of the page.
			const atBottom =
				Math.ceil(window.innerHeight + window.scrollY) >=
				document.documentElement.scrollHeight - 2;
			if (atBottom) current = ids[ids.length - 1];
			setActive(current);
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	}, []);

	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
			<div>
				{/* Header — avatar paired with name + role */}
				<div className="flex items-center gap-5">
					<Image
						src={PERSONAL.headshot}
						alt={PERSONAL.name}
						width={144}
						height={144}
						priority
						className="size-24 shrink-0 rounded-2xl object-cover ring-1 ring-line transition-all duration-300 hover:ring-2 hover:ring-accent sm:size-28"
					/>
					<div className="min-w-0">
						<a href="#content" className="group inline-block">
							<h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
								{PERSONAL.name}
							</h1>
						</a>
						<h2 className="mt-1.5 text-base font-medium tracking-tight text-ink-2 sm:text-lg">
							{PERSONAL.role}
						</h2>
					</div>
				</div>

				{/* Motto */}
				<ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-3">
					{MOTTO.map(({ icon: Icon, label }, i) => (
						<li key={label} className="flex items-center gap-2">
							<Icon className="size-4 text-ink-2" aria-hidden />
							{label}
							{i < MOTTO.length - 1 && <span className="ml-2 text-line-strong">/</span>}
						</li>
					))}
				</ul>

				{/* Availability status with a live pulse */}
				<p className="mt-5 inline-flex items-center gap-2.5 text-sm text-ink-2">
					<span className="relative flex size-2">
						<span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
						<span className="relative inline-flex size-2 rounded-full bg-accent" />
					</span>
					{PERSONAL.availability}
				</p>

				{/* Animated indicator nav (desktop) */}
				<nav className="mt-16 hidden lg:block" aria-label="In-page">
					<ul className="space-y-2">
						{NAV.map(({ id, label }) => {
							const isActive = active === id;
							return (
								<li key={id}>
									<a href={`#${id}`} className="group flex items-center py-2">
										<span
											className={cn(
												'mr-4 h-px bg-ink-3 transition-all duration-300 motion-reduce:transition-none group-hover:w-16 group-hover:bg-accent',
												isActive ? 'w-16 bg-accent' : 'w-8'
											)}
										/>
										<span
											className={cn(
												'eyebrow transition-colors group-hover:text-ink',
												isActive ? 'text-ink' : 'text-ink-3'
											)}
										>
											{label}
										</span>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>

			{/* Socials + UofT Webring */}
			<div className="mt-10 flex flex-col gap-6 lg:mt-0">
				<ul className="flex items-center gap-5">
					{SOCIALS.map(({ name, url, icon: Icon }) => (
						<li key={name}>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={name}
								className="block text-ink-3 transition-colors hover:text-accent"
							>
								<Icon className="size-6" />
							</a>
						</li>
					))}
				</ul>
				<Webring />
			</div>
		</header>
	);
}
