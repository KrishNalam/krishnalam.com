'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const APP_LABELS: Record<string, string> = {
	'/': 'DESKTOP',
	'/about': 'ABOUT_ME.EXE',
	'/experience': 'EXPERIENCE.EXE',
	'/projects': 'PROJECTS.EXE',
	'/contact': 'CONTACT.EXE',
};

export const Taskbar = () => {
	const [time, setTime] = useState('');
	const pathname = usePathname();

	useEffect(() => {
		const fmt = () =>
			new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
		setTime(fmt());
		const id = setInterval(() => setTime(fmt()), 10000);
		return () => clearInterval(id);
	}, []);

	const appLabel = APP_LABELS[pathname] ?? 'PORTFOLIO.EXE';

	return (
		<div
			className='shrink-0 flex items-center gap-2 px-2 py-1 border-t-4 mt-2 font-mono text-sm'
			style={{ background: 'var(--t-surface)', borderColor: 'var(--t-border)', color: 'var(--t-ink)' }}
		>
			{/* Start */}
			<Link
				href='/'
				className='flex items-center gap-1.5 px-3 py-0.5 border-2 font-bold uppercase tracking-wider hover:opacity-80 transition-opacity shrink-0'
				style={{
					background: 'var(--t-titlebar)',
					borderColor: 'var(--t-border)',
					color: 'var(--t-titlebar-text)',
				}}
			>
				<span>▓</span>
				<span className='hidden sm:inline'>START</span>
			</Link>

			{/* Separator */}
			<div className='w-px h-5 shrink-0' style={{ background: 'var(--t-border)', opacity: 0.4 }} />

			{/* Active window pill */}
			{pathname !== '/' && (
				<div
					className='hidden sm:flex items-center gap-1.5 px-2 py-0.5 border-2 text-xs uppercase tracking-wider shrink-0'
					style={{
						background: 'var(--t-titlebar)',
						borderColor: 'var(--t-border)',
						color: 'var(--t-titlebar-text)',
					}}
				>
					<span>≡</span>
					<span>{appLabel}</span>
				</div>
			)}

			{/* Spacer */}
			<div className='flex-1' />

			{/* System tray / clock */}
			{time && (
				<div
					className='flex items-center gap-1.5 border-l-2 pl-3 text-xs shrink-0'
					style={{ borderColor: 'var(--t-border)', opacity: 0.9 }}
				>
					<span>🕐</span>
					<span className='tracking-wider'>{time}</span>
				</div>
			)}
		</div>
	);
};
