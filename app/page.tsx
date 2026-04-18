export default function Home() {
	return (
		<div className='h-full w-full flex items-center justify-center p-4'>
			<div
				className='border-4 p-6 sm:p-10 max-w-lg w-full text-center shadow-translucent'
				style={{ background: 'var(--t-surface)', borderColor: 'var(--t-border)' }}
			>
				{/* Win95-style inner border */}
				<div
					className='border-2 border-dashed p-6 sm:p-8'
					style={{ borderColor: 'var(--t-ink-muted)' }}
				>
					<p
						className='text-xs font-mono uppercase tracking-[0.3em] mb-4'
						style={{ color: 'var(--t-ink-muted)' }}
					>
						── PORTFOLIO.EXE ──
					</p>

					<p
						className='text-3xl sm:text-5xl font-bold uppercase tracking-widest mb-2'
						style={{ color: 'var(--t-accent-blue)' }}
					>
						KRISH NALAM
					</p>

					<p
						className='text-lg sm:text-xl font-mono mb-6'
						style={{ color: 'var(--t-ink-muted)' }}
					>
						C:\PORTFOLIO\&gt;_
					</p>

					<div
						className='border-t-2 border-dashed pt-4'
						style={{ borderColor: 'var(--t-border)' }}
					>
						<p
							className='text-lg sm:text-2xl uppercase tracking-widest animate-pulse'
							style={{ color: 'var(--t-ink)' }}
						>
							Select a folder to initialize...
						</p>
						<p
							className='text-xs font-mono mt-3'
							style={{ color: 'var(--t-ink-muted)' }}
						>
							Use the EXPLORE panel on the right to navigate
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
