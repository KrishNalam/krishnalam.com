import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from './provider';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: "Krish's Portfolio",
	description: 'Hey, this is Krish Nalam, a full-stack developer currently studying at UofT!',
	keywords: [
		'Krish',
		'Nalam',
		'Krish Nalam',
		'Portfolio',
		'Developer',
		'software engineer',
		'web developer',
		'projects',
		'extensions',
		'chrome extensions',
		'python',
		'javascript',
		'react',
	],
	creator: 'Krish Nalam',
	icons: {
		icon: [
			{
				url: '/favicon.ico',
			},
			{
				url: '/favicon-16x16.png',
			},
			{
				url: '/favicon-32x32.png',
			},
		],
		shortcut: [
			{
				url: '/favicon.ico',
				type: 'image/x-icon',
			},
		],
		apple: [
			{
				url: '/apple-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
