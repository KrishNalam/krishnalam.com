'use client';
import Link from 'next/link';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
	weight: '400',
	subsets: ['latin'],
});

const win95Btn: React.CSSProperties = {
	background: '#c0c0c0',
	color: '#000000',
	borderTop: '2px solid #dfdfdf',
	borderLeft: '2px solid #dfdfdf',
	borderRight: '2px solid #808080',
	borderBottom: '2px solid #808080',
	width: '22px',
	height: '22px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '13px',
	fontWeight: 'bold',
	cursor: 'default',
	flexShrink: 0,
	userSelect: 'none',
};

export const WindowFrame = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div
		className={`${vt323.className} h-full w-full flex flex-col bg-surface-dim text-ink border-4 border-[var(--t-border)] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)]`}
	>
		{/* Titlebar */}
		<div
			className='p-1.5 pl-3 flex justify-between items-center border-b-4 border-[var(--t-border)] shrink-0 gap-2'
			style={{
				background: 'linear-gradient(90deg, var(--t-titlebar) 0%, var(--t-titlebar-end) 100%)',
				color: 'var(--t-titlebar-text)',
			}}
		>
			<span className='text-2xl uppercase tracking-widest drop-shadow-opaque truncate'>
				{title}.EXE
			</span>

			{/* Win95-style control buttons */}
			<div className='flex items-center gap-1 shrink-0'>
				<button style={win95Btn} title='Minimize' aria-label='Minimize'>
					_
				</button>
				<button style={win95Btn} title='Maximize' aria-label='Maximize'>
					□
				</button>
				<Link
					href='/'
					style={{
						...win95Btn,
						cursor: 'pointer',
					}}
					className='hover:!bg-red-600 hover:!text-white transition-colors'
					title='Close'
					aria-label='Close'
				>
					✕
				</Link>
			</div>
		</div>

		{/* Content */}
		<div className='flex-1 min-h-0 text-lg'>{children}</div>
	</div>
);
