'use client';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
	const [dark, setDark] = useState(true);

	useEffect(() => {
		const stored = localStorage.getItem('theme') ?? 'dark';
		const isDark = stored === 'dark';
		setDark(isDark);
		document.documentElement.setAttribute('data-theme', stored);
	}, []);

	const toggle = () => {
		const next = !dark;
		const theme = next ? 'dark' : 'light';
		setDark(next);
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	};

	return (
		<button
			onClick={toggle}
			title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
			className='text-xl border-2 border-white/60 px-3 py-1 hover:border-white hover:bg-white/10 transition-all font-mono uppercase tracking-widest text-white/80 hover:text-white shrink-0'
		>
			{dark ? '[ ☀ LIGHT ]' : '[ ☾ DARK ]'}
		</button>
	);
};
