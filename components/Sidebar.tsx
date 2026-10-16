'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PERSONAL, SOCIALS } from '@/data/config';
import { cn } from '@/lib/cn';
import { ThemeToggle } from './ThemeToggle';
import { Webring } from './Webring';

const NAV = [
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'logbook', label: 'Logbook' },
];

const MOTTO = ['Coffee', 'Code', 'Concentration'];

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
				Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 2;
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
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:gap-8 lg:py-24 short:py-12">
			<div>
				{/* Large avatar with name, role, and motto stacked underneath. On mobile the
				    theme switch sits top-right, level with the avatar. */}
				<div className="flex items-start justify-between">
					<Image
						src={PERSONAL.headshot}
						alt={PERSONAL.name}
						width={320}
						height={320}
						priority
						className="size-32 shrink-0 rounded-3xl object-cover ring-1 ring-line transition-all duration-300 hover:ring-2 hover:ring-accent sm:size-40 lg:size-44 short:size-24"
					/>
					<div className="lg:hidden">
						<ThemeToggle />
					</div>
				</div>
				<a href="#content" className="mt-6 inline-block short:mt-4">
					<h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
						{PERSONAL.name}
					</h1>
				</a>
				<h2 className="mt-1.5 text-lg font-medium tracking-tight text-ink-2 sm:text-xl">{PERSONAL.role}</h2>
				<p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-3">{MOTTO.join(' · ')}</p>

				{/* External links + UofT Webring, right under the name so they're seen first */}
				<div className="mt-7 flex items-center gap-5 sm:gap-6">
					<ul className="flex items-center gap-4 sm:gap-5" aria-label="Links">
						{SOCIALS.map(({ name, url, icon: Icon }) => (
							<li key={name}>
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={name}
									className="block text-ink-3 transition-colors hover:text-accent"
								>
									<Icon className="size-6 sm:size-7" />
								</a>
							</li>
						))}
					</ul>
					<span className="h-8 w-px bg-line-strong" aria-hidden />
					<Webring />
				</div>

			</div>

			{/* Bottom group: section nav + theme switch, balancing the header's weight */}
			<div className="lg:mt-0">
				{/* Animated indicator nav (desktop) */}
				<nav className="mb-10 hidden lg:block short:mb-6" aria-label="In-page">
					<ul className="space-y-2">
						{NAV.map(({ id, label }) => {
							const isActive = active === id;
							return (
								<li key={id}>
									<a
										href={`#${id}`}
										aria-current={isActive ? 'location' : undefined}
										className="group flex items-center py-2"
									>
										<span
											className={cn(
												'mr-4 h-px bg-ink-3 transition-all duration-300 motion-reduce:transition-none group-hover:w-16 group-hover:bg-accent',
												isActive ? 'h-0.5 w-20 bg-accent' : 'w-8',
											)}
										/>
										<span
											className={cn(
												'eyebrow nav-label transition-all duration-300 group-hover:text-ink motion-reduce:transition-none',
												isActive ? 'text-ink' : 'text-ink-3',
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
				<div className="hidden lg:block">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
