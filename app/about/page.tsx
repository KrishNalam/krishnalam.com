'use client';

import Image from 'next/image';
import confetti from 'canvas-confetti';
import { WindowFrame } from '@/components/WindowFrame';
import { PERSONAL_INFO, WORKS_IN_PROGRESS } from '@/data/config';
import { Globe } from '@/components/Globe';
import { VscGithub } from 'react-icons/vsc';
import { RiFileCopyFill } from 'react-icons/ri';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/* ─── Sub-components ─── */

const TechBadge = ({ label }: { label: string }) => (
	<div
		className='px-3 py-1 rounded text-xs font-mono shrink-0 border'
		style={{ background: 'var(--t-surface-faint)', borderColor: 'var(--t-border)', color: 'var(--t-ink)' }}
	>
		{label}
	</div>
);

const HobbyItem = ({ emoji, name }: { emoji: string; name: string }) => (
	<div className='group flex flex-col items-center justify-center p-0 border-dashed border-4 border-light-gray hover:bg-light-gray transition-all flex-1 min-w-0 min-h-[90px]'>
		<span className='text-3xl @md:text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:-translate-y-1'>
			{emoji}
		</span>
		<span className='text-ink text-sm @md:text-base px-1 text-center truncate w-full opacity-0 group-hover:opacity-100 transition-opacity mt-1'>
			{name}
		</span>
	</div>
);

const WIPProject = ({ name, progress, url }: { name: string; progress: number; url: string }) => (
	<div
		className='border-b-2 border-dashed last:border-b-0 py-2 first:pt-0'
		style={{ borderColor: 'var(--t-border)' }}
	>
		<div className='flex justify-between items-center gap-2 mb-1.5'>
			<h4 className='font-bold text-xl text-green-500 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] truncate leading-tight flex-1 min-w-0'>
				{name}
			</h4>
			<a
				href={url}
				target='_blank'
				rel='noreferrer'
				className='flex-shrink-0 border-double border-4 hover:bg-green-500 p-1.5 flex items-center shadow-translucent transition-all group/link'
				style={{ borderColor: 'var(--t-border)' }}
			>
				<div className='relative inline-flex items-center justify-center w-4 h-4'>
					<div className='absolute inset-0 bg-green-500 rounded-full animate-pulse' />
					<VscGithub className='relative z-10 w-full h-full text-ink group-hover/link:text-white' />
				</div>
			</a>
		</div>
		<div className='flex items-center gap-2'>
			<div
				className='flex-1 h-2 border overflow-hidden'
				style={{ borderColor: 'var(--t-border)', background: 'var(--t-surface-faint)' }}
			>
				<div className='h-full bg-green-500 transition-all duration-700' style={{ width: `${progress}%` }} />
			</div>
			<span className='text-xs font-mono font-bold text-light-gray w-8 text-right flex-shrink-0'>
				{progress}%
			</span>
		</div>
	</div>
);

const SKILL_DATA = [
	{ subject: 'Frontend', value: 90, fullMark: 100 },
	{ subject: 'Backend', value: 78, fullMark: 100 },
	{ subject: 'ML / AI', value: 70, fullMark: 100 },
	{ subject: 'DevOps', value: 65, fullMark: 100 },
	{ subject: 'Mobile', value: 58, fullMark: 100 },
	{ subject: 'Systems', value: 62, fullMark: 100 },
];

const TECH_STACK = [
	'React',
	'Next.js',
	'TypeScript',
	'Node.js',
	'Python',
	'AWS',
	'Docker',
	'PostgreSQL',
	'Tailwind',
	'Figma',
	'Linux',
	'Git',
	'OpenCV',
	'Java',
	'C++',
];

/* ─── Page ─── */

export default function AboutPage() {
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
		<WindowFrame title='ABOUT_ME'>
			{/*
			  @container — tiles respond to section width, not viewport.

			  Breakpoints (container width):
			    < @sm (384px)  → 1-col stack
			    @sm – @4xl     → 2-col auto-flow
			    @4xl+ (896px)  → 8-col × 5-row explicit bento

			  @4xl grid (cols 1-3 | cols 4-6 | cols 7-8):
			    Row 1-2: BIO(1-3)    WIP(4-6)    PHOTO(7-8)
			    Row 3:   RADAR(1-3)  READY(4-6)  EMAIL(7-8)
			    Row 4:   RADAR(1-3)  HOBBIES(4-8)
			    Row 5:   TECH(1-8)  ← horizontal marquee, full width

			  DOM order for @sm 2-col auto-flow:
			    BIO(span-2) | WIP | PHOTO | RADAR | READY | EMAIL | HOBBIES(span-2) | TECH(span-2)
			*/}
			<div className='@container h-full overflow-y-auto custom-scrollbar'>
				<div className='grid grid-cols-1 @sm:grid-cols-2 @4xl:grid-cols-8 @4xl:grid-rows-5 @4xl:h-full gap-4 p-4 sm:p-6'>
					{/* ── 1. BIO TEXT ── */}
					<div
						className='
							@sm:col-span-2
							@4xl:col-start-1 @4xl:col-span-3 @4xl:row-start-1 @4xl:row-span-2
							p-5 shadow-translucent flex flex-col justify-center min-h-[140px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<div
							className='flex items-center gap-2 mb-3 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'
							style={{ color: 'var(--t-accent-blue)' }}
						>
							<span className='text-2xl @md:text-3xl font-extrabold uppercase tracking-widest'>
								:) Hello Again!
							</span>
						</div>
						<p className='text-lg @md:text-xl leading-tight text-ink'>
							This is me — a tech geek by day, code wizard by night. Always ready to debug life&apos;s
							challenges with a dash of humor and caffeine!
						</p>
					</div>

					{/* ── 2. WORKS IN PROGRESS ── */}
					<div
						className='
							@sm:col-span-1
							@4xl:col-start-4 @4xl:col-span-3 @4xl:row-start-1 @4xl:row-span-2
							p-4 shadow-translucent flex flex-col min-h-[140px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<p className='text-dark-gray text-lg mb-2 flex items-baseline shrink-0'>
							Works In Progress
							<span className='typing-dots overflow-hidden whitespace-nowrap inline-block'>...</span>
						</p>
						<div className='flex-1 overflow-y-auto retro-scroll min-h-0'>
							{WORKS_IN_PROGRESS.map((proj) => (
								<WIPProject key={proj.name} name={proj.name} progress={proj.progress} url={proj.url} />
							))}
						</div>
					</div>

					{/* ── 3. PHOTO — portrait crop ── */}
					<div
						className='
							@sm:col-span-1
							@4xl:col-start-7 @4xl:col-span-2 @4xl:row-start-1 @4xl:row-span-2
							relative shadow-translucent overflow-hidden min-h-[160px] border-4
						'
						style={{ borderColor: 'var(--t-border)' }}
					>
						<Image
							src={PERSONAL_INFO.headshot || '/placeholder.jpg'}
							fill
							alt='Krish Nalam'
							className='object-cover object-top'
						/>
					</div>

					{/* ── 4. SKILL RADAR ── */}
					<div
						className='
							@sm:col-span-1
							@4xl:col-start-1 @4xl:col-span-3 @4xl:row-start-3 @4xl:row-span-2
							p-4 shadow-translucent flex flex-col min-h-[240px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<h3 className='font-bold text-xl drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] text-retro-blue shrink-0'>
							Skill Radar
						</h3>
						<p className='text-xs font-mono text-light-gray mb-1 shrink-0'>
							Self-assessed, caffeine-adjusted.
						</p>
						<div className='flex-1 min-h-0 flex items-center justify-center overflow-hidden'>
							<div className='aspect-square w-full max-h-full'>
								<ResponsiveContainer width='100%' height='100%'>
									<RadarChart cx='50%' cy='50%' outerRadius='72%' data={SKILL_DATA}>
										<PolarGrid stroke='var(--t-border)' strokeWidth={1} />
										<PolarAngleAxis
											dataKey='subject'
											tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--t-ink)' }}
										/>
										<PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
										<Radar
											dataKey='value'
											stroke='var(--t-accent-orange)'
											strokeWidth={2}
											fill='var(--t-accent-blue)'
											fillOpacity={0.2}
											dot={{ fill: 'var(--t-accent-blue)', r: 3, strokeWidth: 0 }}
										/>
									</RadarChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>

					{/* ── 5. READY TO CONNECT (Globe) ── */}
					<div
						className='
							@sm:col-span-1
							@4xl:col-start-4 @4xl:col-span-2 @4xl:row-start-3 @4xl:row-span-2
							p-3 shadow-translucent flex flex-row items-center gap-3 overflow-hidden min-h-[110px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<div className='min-w-0 shrink-0'>
							<h3
								className='font-bold text-lg leading-tight drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'
								style={{ color: 'var(--t-accent-blue)' }}
							>
								Ready to
								<br />
								Connect?
							</h3>
							<p className='text-xs text-dark-gray mt-1'>Drag the globe.</p>
						</div>
						<div className='flex-1 min-w-0 h-full'>
							<Globe />
						</div>
					</div>

					{/* ── 6. COPY EMAIL ── */}
					<div
						className='
							@sm:col-span-1
							@4xl:col-start-7 @4xl:col-span-2 @4xl:row-start-3
							p-3 shadow-translucent flex flex-col items-center justify-center gap-2 relative overflow-hidden min-h-[110px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<div
							className='absolute inset-0 opacity-10 pointer-events-none'
							style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
						/>
						<p className='relative z-10 text-xs font-mono text-dark-gray uppercase tracking-widest text-center leading-snug'>
							Copy
							<br />
							Email
						</p>
						<button
							onClick={handleCopyEmail}
							className='relative z-10 p-3 border-double border-4 border-purple-500 hover:bg-purple-700 hover:border-purple-400 text-purple-400 hover:text-white transition-all shadow-translucent'
							title='Copy dev@krishnalam.com'
						>
							<RiFileCopyFill className='text-2xl' />
						</button>
					</div>

					{/* ── 7. HOBBIES ── */}
					<div
						className='
							@sm:col-span-2
							@4xl:col-start-6 @4xl:col-span-3 @4xl:row-start-4 @4xl:row-span-2
							p-4 shadow-translucent flex flex-col
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<h3 className='font-bold text-2xl mb-3 flex items-center gap-2 text-retro-yellow shrink-0'>
							<span className='drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>Recharge Modes 🌩️</span>
							<span className='text-base font-normal text-dark-gray'>(Hover!)</span>
						</h3>
						<div className='flex flex-wrap @md:flex-nowrap gap-3 flex-1'>
							<HobbyItem emoji='🍿' name='Cinema Nerd' />
							<HobbyItem emoji='🖨️' name='3D Printing' />
						</div>
						<div className='flex flex-wrap @md:flex-nowrap gap-3 mt-3 flex-1'>
							<HobbyItem emoji='🚜' name='Gardener' />
							<HobbyItem emoji='🎮' name='Gamer' />
						</div>
					</div>

					{/* ── 8. TECH STACK — horizontal scrolling marquee ── */}
					<div
						className='
							@sm:col-span-2
							@4xl:col-start-1 @4xl:col-span-5 @4xl:row-start-5
							shadow-translucent relative overflow-hidden flex items-center gap-3 px-4 min-h-[60px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<h3
							className='font-bold text-lg shrink-0 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'
							style={{ color: 'var(--t-accent-orange)' }}
						>
							Stack
						</h3>
						<div className='flex-1 overflow-hidden mask-image-gradient-x'>
							<div className='flex flex-row gap-3 animate-marquee-horizontal w-max py-2'>
								{[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
									<TechBadge key={i} label={tech} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</WindowFrame>
	);
}
