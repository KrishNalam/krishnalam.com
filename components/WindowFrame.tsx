'use client';
import { X } from 'lucide-react';
import Link from 'next/link';

export const WindowFrame = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div
		className={` h-full w-full flex flex-col bg-dark-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]`}
	>
		{/* Pane Header */}
		<div className='bg-[#11408c] text-white p-2 flex justify-between items-center border-b-4 border-black select-none shrink-0'>
			<span className='text-xl uppercase tracking-widest pl-2 font-mono'>{title}.EXE</span>
			<Link
				href='/'
				className='bg-red-500 hover:bg-red-900 text-white p-1 border-2 border-black hover:shadow-inner flex items-center justify-center'
			>
				<X size={20} />
			</Link>
		</div>
		{/* Scrollable Content */}
		<div className='p-6 overflow-y-auto font-sans text-lg leading-relaxed h-full custom-scrollbar'>{children}</div>
	</div>
);
