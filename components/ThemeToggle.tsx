'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
	const { theme, toggle } = useTheme();
	const isDark = theme === 'dark';

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
			className="relative grid size-9 place-items-center rounded-full border border-line text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={theme}
					initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
					animate={{ rotate: 0, opacity: 1, scale: 1 }}
					exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
					transition={{ duration: 0.2 }}
					className="absolute"
				>
					{isDark ? <Moon size={16} /> : <Sun size={16} />}
				</motion.span>
			</AnimatePresence>
		</button>
	);
}
