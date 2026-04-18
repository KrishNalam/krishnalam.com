import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import './globals.css';
import { PERSONAL_INFO } from '@/data/config';
import { DesktopNav } from '@/components/DesktopNav';
import { SocialsDock } from '@/components/SocialsDock';
import { Webring } from '@/components/Webring';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AddressBar } from '@/components/AddressBar';
import { Taskbar } from '@/components/Taskbar';

const vt323 = VT323({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-vt323',
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
		icon: [{ url: '/favicon.ico' }],
		shortcut: [{ url: '/favicon.ico' }],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}`,
					}}
				/>
			</head>
			<body className={`${vt323.className} h-screen w-screen bg-desktop overflow-hidden text-ink relative`}>
				{/* BACKGROUND GRID — covers full viewport regardless of content width */}
				<div
					className='absolute inset-0 pointer-events-none z-0'
					style={{
						backgroundImage:
							'linear-gradient(var(--t-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--t-grid-color) 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>

				{/* CONTENT WRAPPER — max-width prevents over-stretching on ultrawide */}
				<div className='relative z-10 h-full w-full max-w-[1760px] mx-auto flex flex-col p-4 sm:p-8'>
					{/* HEADER */}
					{/* <header className='flex flex-col sm:flex-row sm:justify-between mb-2 z-10 px-2 gap-2 sm:gap-0 shrink-0'>
						<div>
							<h1 className='text-5xl sm:text-7xl font-bold text-white drop-shadow-opaque mb-1'>
								Hi, I&rsquo;m {PERSONAL_INFO.name}
							</h1>
							<p className='text-xl sm:text-2xl text-white/60'>&gt; {PERSONAL_INFO.title}</p>
						</div>
						<div className='flex flex-row items-center gap-3'>
							<SocialsDock />
							<ThemeToggle />
						</div>
					</header>

					{/* ADDRESS BAR */}
					{/* <AddressBar /> */}

					{/* WORKSPACE */}
					<div className='flex flex-col sm:flex-row flex-1 gap-4 sm:gap-6 z-10 min-h-0'>
						{/* Sidebar */}
						<aside className='flex flex-row sm:flex-col justify-center sm:justify-between items-center sm:items-center shrink-0 py-1 sm:py-0'>
							<DesktopNav />
							<div className='hidden sm:block'>
								<Webring />
							</div>
						</aside>

						{/* Content */}
						<section className='flex-1 min-h-0 relative overflow-hidden'>{children}</section>
					</div>

					{/* TASKBAR */}
					<Taskbar />
				</div>
			</body>
		</html>
	);
}
