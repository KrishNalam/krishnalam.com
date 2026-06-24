'use client';

import { createContext, useCallback, useContext, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextValue = {
	theme: Theme;
	toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_EVENT = 'themechange';

// The <html data-theme> attribute is the source of truth — it's set by the
// no-flash inline script in layout.tsx before React hydrates. We read it via
// useSyncExternalStore so there's no setState-in-effect and no hydration flash.
function subscribe(callback: () => void) {
	window.addEventListener(THEME_EVENT, callback);
	return () => window.removeEventListener(THEME_EVENT, callback);
}

function getSnapshot(): Theme {
	return (document.documentElement.getAttribute('data-theme') as Theme) || 'dark';
}

function getServerSnapshot(): Theme {
	return 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

	const toggle = useCallback(() => {
		const next: Theme = getSnapshot() === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', next);
		try {
			localStorage.setItem('theme', next);
		} catch {
			/* ignore */
		}
		window.dispatchEvent(new Event(THEME_EVENT));
	}, []);

	return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
	return ctx;
}
