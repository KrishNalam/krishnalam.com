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
		className={`${vt323.className} h-full w-full flex flex-col bg-dark-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]`}
	>
		{/* Pane Header */}
		<div className='bg-[#11408c] text-white p-2 flex justify-between items-center border-b-4 border-black shrink-0'>
			<span className='text-2xl uppercase tracking-widest pl-2 drop-shadow-opaque'>{title}.EXE</span>
			<Link
				href='/'
				className=' hover:bg-red-800 text-white p-1 border-2 border-white hover:shadow-inner drop-shadow-opaque flex items-center justify-center'
			>
				<X size={20} />
			</Link>
		</div>
		{/* Scrollable Content */}
		<div className='flex flex-col p-6 overflow-y-auto text-lg custom-scrollbar'>{children}</div>
	</div>
);
