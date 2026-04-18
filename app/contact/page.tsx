'use client';

import confetti from 'canvas-confetti';
import { WindowFrame } from '@/components/WindowFrame';
import { SOCIALS } from '@/data/config';
import { RiFileCopyFill } from 'react-icons/ri';

export default function ContactPage() {
	const handleCopyEmail = () => {
		navigator.clipboard.writeText('dev@krishnalam.com');
		const scalar = 2;
		const triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });
		const square = confetti.shapeFromPath({ path: 'M0 10 L10 10 L10 0 L0 0z' });
		confetti({
			shapes: [triangle, square],
			scalar,
			colors: ['#000000', '#FFFFFF', '#800080'],
			spread: 70,
			origin: { y: 0.8 },
		});
	};

	return (
		<WindowFrame title='CONTACT'>
			<div className='@container h-full overflow-y-auto custom-scrollbar'>
				<div className='grid grid-cols-1 @sm:grid-cols-2 @4xl:grid-cols-4 gap-4 p-4 sm:p-6'>
					{/* ── Headline ── */}
					<div
						className='@sm:col-span-2 @4xl:col-span-3 p-6 shadow-translucent flex flex-col justify-center min-h-[120px]'
						style={{ background: 'var(--t-surface)' }}
					>
						<h2
							className='text-4xl sm:text-6xl font-extrabold uppercase tracking-widest leading-tight drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'
							style={{ color: 'var(--t-accent-blue)' }}
						>
							Let&apos;s Work
							<br />
							Together.
						</h2>
						<p className='mt-3 text-xl' style={{ color: 'var(--t-ink-body)' }}>
							Open to full-stack roles, hackathons, and interesting side projects.
						</p>
					</div>

					{/* ── Copy Email ── */}
					<div
						className='@4xl:col-span-1 p-4 shadow-translucent flex flex-col items-center justify-center gap-3 min-h-[120px]'
						style={{ background: 'var(--t-surface)' }}
					>
						<p
							className='text-xs font-mono uppercase tracking-widest'
							style={{ color: 'var(--t-ink-muted)' }}
						>
							dev@krishnalam.com
						</p>
						<button
							onClick={handleCopyEmail}
							className='p-3 border-double border-4 border-purple-500 hover:bg-purple-700 hover:border-purple-400 text-purple-500 hover:text-white transition-all shadow-translucent'
							title='Copy dev@krishnalam.com'
						>
							<RiFileCopyFill className='text-2xl' />
						</button>
						<span
							className='text-xs font-mono uppercase tracking-widest'
							style={{ color: 'var(--t-ink-muted)' }}
						>
							Copy Email
						</span>
					</div>

					{/* ── Socials ── */}
					<div
						className='@sm:col-span-2 p-4 shadow-translucent'
						style={{ background: 'var(--t-surface)' }}
					>
						<p
							className='text-xs font-mono uppercase tracking-widest mb-3'
							style={{ color: 'var(--t-ink-muted)' }}
						>
							Find me elsewhere
						</p>
						<div className='flex flex-wrap gap-3'>
							{SOCIALS.map((s) => (
								<a
									key={s.name}
									href={s.url}
									target='_blank'
									rel='noreferrer'
									className='flex items-center gap-2 px-4 py-2 border-2 font-mono text-sm uppercase tracking-wider hover:shadow-translucent transition-all'
									style={{
										borderColor: 'var(--t-border)',
										background: 'var(--t-surface-faint)',
										color: 'var(--t-ink)',
									}}
								>
									<s.icon className='text-lg' />
									<span>{s.name}</span>
								</a>
							))}
						</div>
					</div>

					{/* ── Location ── */}
					<div
						className='p-4 shadow-translucent flex flex-col justify-center min-h-[80px]'
						style={{ background: 'var(--t-surface)' }}
					>
						<p
							className='text-xs font-mono uppercase tracking-widest mb-1'
							style={{ color: 'var(--t-ink-muted)' }}
						>
							Location
						</p>
						<p className='text-2xl font-bold' style={{ color: 'var(--t-ink)' }}>
							📍 Toronto, ON
						</p>
						<p className='text-sm font-mono' style={{ color: 'var(--t-ink-muted)' }}>
							UTC−5 · EST
						</p>
					</div>

					{/* ── Status ── */}
					<div
						className='p-4 shadow-translucent flex flex-col justify-center min-h-[80px]'
						style={{ background: 'var(--t-surface)' }}
					>
						<p
							className='text-xs font-mono uppercase tracking-widest mb-1'
							style={{ color: 'var(--t-ink-muted)' }}
						>
							Status
						</p>
						<div className='flex items-center gap-2 mb-1'>
							<div className='w-3 h-3 rounded-full bg-green-500 animate-pulse shrink-0' />
							<p className='text-lg font-bold text-green-500'>Open to Work</p>
						</div>
						<p className='text-sm font-mono' style={{ color: 'var(--t-ink-muted)' }}>
							SWE · Co-op · Contract
						</p>
					</div>
				</div>
			</div>
		</WindowFrame>
	);
}
