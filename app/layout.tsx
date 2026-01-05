import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import './globals.css';
import { PERSONAL_INFO } from '@/data/config';
import { DesktopNav } from '@/components/DesktopNav';
import { SocialsDock } from '@/components/SocialsDock';
import { Webring } from '@/components/Webring';

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
		icon: [
			{
				url: '/favicon.ico',
			},
		],
		shortcut: [
			{
				url: '/favicon.ico',
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`${vt323.className} h-screen w-screen bg-dark-gray overflow-hidden text-white flex flex-col p-8 relative`}
			>
				{/* BACKGROUND */}
				<div
					className='absolute inset-0 opacity-10 pointer-events-none z-0'
					style={{
						backgroundImage:
							'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				></div>

				{/* HEADER */}
				<header className='flex flex-row justify-between mb-6 z-10 px-2'>
					<div>
						<h1 className='text-7xl font-bold text-white drop-shadow-opaque mb-2'>
							Hi, I&rsquo;m {PERSONAL_INFO.name}
						</h1>
						<p className='text-2xl text-light-gray'>&gt; {PERSONAL_INFO.title}</p>
					</div>
					<SocialsDock />
				</header>

				{/* WORKSPACE ROW */}
				<div className='flex flex-1 gap-8 z-10 min-h-0'>
					{/* LEFT: Dynamic Page Content */}
					<section className='h-full flex-1 min-h-0 relative'>{children}</section>
					{/* RIGHT: Navigation Sidebar */}
					<div className='flex flex-col justify-between items-center'>
						<DesktopNav />
						<Webring />
					</div>
				</div>
			</body>
		</html>
	);
}
