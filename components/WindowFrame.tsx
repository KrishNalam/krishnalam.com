'use client';
import { X } from 'lucide-react';
import Link from 'next/link';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
	weight: '400',
	subsets: ['latin'],
});

export const WindowFrame = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div
		className={`${vt323.className} h-full w-full flex flex-col bg-surface-dim text-ink border-4 border-[var(--t-border)] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.35)]`}
	>
		{/* Titlebar */}
		<div
			className='bg-titlebar p-2 flex justify-between items-center border-b-4 border-[var(--t-border)] shrink-0'
			style={{ color: 'var(--t-titlebar-text)' }}
		>
			<span className='text-2xl uppercase tracking-widest pl-2 drop-shadow-opaque'>
				{title}.EXE
			</span>
			<Link
				href='/'
				className='hover:bg-red-800 p-1 border-2 border-[var(--t-titlebar-text)] hover:border-red-800 hover:shadow-inner drop-shadow-opaque flex items-center justify-center transition-colors'
				style={{ color: 'var(--t-titlebar-text)' }}
			>
				<X size={20} />
			</Link>
		</div>

		{/* Content — each page manages its own overflow */}
		<div className='flex-1 min-h-0 text-lg'>{children}</div>
	</div>
);
