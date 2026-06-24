import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { PERSONAL } from '@/data/config';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space-grotesk',
	display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
	display: 'swap',
});

const description = `${PERSONAL.name} — ${PERSONAL.role} & UofT Computer Science student. ${PERSONAL.tagline}`;

export const metadata: Metadata = {
	metadataBase: new URL('https://krishnalam.com'),
	title: `${PERSONAL.name} — ${PERSONAL.role}`,
	description,
	keywords: ['Krish Nalam', 'Software Developer', 'University of Toronto', 'Full-stack', 'Portfolio'],
	authors: [{ name: PERSONAL.name }],
	openGraph: {
		title: `${PERSONAL.name} — ${PERSONAL.role}`,
		description,
		type: 'website',
		locale: 'en_CA',
	},
	twitter: {
		card: 'summary_large_image',
		title: `${PERSONAL.name} — ${PERSONAL.role}`,
		description,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: '#0a0a0c' },
		{ media: '(prefers-color-scheme: light)', color: '#f7f7f4' },
	],
	width: 'device-width',
	initialScale: 1,
};

// Set the theme before first paint to avoid a flash of the wrong theme.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
		>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body>{children}</body>
		</html>
	);
}
