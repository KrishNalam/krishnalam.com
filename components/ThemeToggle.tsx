'use client';

import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useTheme } from './ThemeProvider';

/** Sun/moon switch: the knob slides to the active theme. */
export function ThemeToggle() {
	const { theme, toggle } = useTheme();
	const isDark = theme === 'dark';

	return (
		<button
			type="button"
			role="switch"
			aria-checked={isDark}
			aria-label="Dark theme"
			onClick={toggle}
			className="relative flex h-9 w-[4.5rem] items-center justify-between rounded-full border border-line-strong px-2.5 text-ink-3 transition-colors hover:text-ink-2"
		>
			<span
				aria-hidden
				className={cn(
					'absolute left-1 top-1/2 size-7 -translate-y-1/2 rounded-full bg-accent transition-transform duration-300 motion-reduce:transition-none',
					isDark && 'translate-x-[34px]'
				)}
			/>
			<Sun size={16} className={cn('relative transition-colors', !isDark && 'text-accent-ink')} />
			<Moon size={16} className={cn('relative transition-colors', isDark && 'text-accent-ink')} />
		</button>
	);
}
