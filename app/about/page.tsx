'use client';

import Image from 'next/image';
import confetti from 'canvas-confetti';
import { WindowFrame } from '@/components/WindowFrame';
import { PERSONAL_INFO, WORKS_IN_PROGRESS } from '@/data/config';
import { Globe } from '@/components/Globe';
import { VscGithub } from 'react-icons/vsc';
import { RiFileCopyFill } from 'react-icons/ri';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

/* ─── Sub-components ─── */

const TechBadge = ({ label }: { label: string }) => (
	<div
		className='px-3 py-1 rounded text-xs font-mono shrink-0 border'
		style={{ background: 'var(--t-surface-faint)', borderColor: 'var(--t-border)', color: 'var(--t-ink)' }}
	>
		{label}
	</div>
);

const HOBBIES = [
	{ id: 'cinema', emoji: '🍿', name: 'Cinema Nerd' },
	{ id: 'printing', emoji: '🖨️', name: '3D Printing' },
	{ id: 'garden', emoji: '🚜', name: 'Gardener' },
	{ id: 'gaming', emoji: '🎮', name: 'Gamer' },
];

const WIPProject = ({ name, progress, url }: { name: string; progress: number; url: string }) => (
	<div className='last:border-b-0 py-2 first:pt-0' style={{ borderColor: 'var(--t-border)' }}>
		<div className='flex justify-between items-center'>
			<h4 className='font-bold text-xl text-green-500 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] truncate leading-tight flex-1 min-w-0'>
				{name}
			</h4>
			<a
				href={url}
				target='_blank'
				rel='noreferrer'
				className='flex-shrink-0 rounded-full my-1 flex items-center transition-all group/link'
				style={{ borderColor: 'var(--t-border)' }}
			>
				<div className='relative inline-flex items-center justify-center w-6 h-6'>
					<div className='absolute inset-0 bg-green-500 rounded-full animate-pulse' />
					<VscGithub className='relative z-10 w-full h-full text-ink group-bac group-hover/link:text-white' />
				</div>
			</a>
		</div>
		<div className='flex items-center '>
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
	const [activeIdx, setActiveIdx] = useState(0);
	const swiperRef = useRef<SwiperType | null>(null);

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
			    Row 1-2: WIP(1-3)    READY(4-6)   COMBO(7-8 ↓ portrait + bio)
			    Row 3-4: RADAR(1-3)  HOBBIES(4-6) COMBO(7-8)
			    Row 5:   TECH(1-6)                EMAIL(7-8)

			  DOM order for @sm 2-col auto-flow:
			    COMBO(span-2) | WIP | READY | EMAIL | RADAR | HOBBIES(span-2) | TECH(span-2)
			*/}
			<div className='@container h-full overflow-y-auto custom-scrollbar'>
				<div className='grid grid-cols-1 @sm:grid-cols-2 @4xl:grid-cols-16 @4xl:grid-rows-10 @4xl:h-full gap-4 p-4 sm:p-6'>
					{/* ── 1. COMBO — Portrait on top + Hello Again below (vertical) ── */}
					<div
						className='
    @sm:col-span-4
    @4xl:col-start-1 @4xl:col-span-6 @4xl:row-start-1 @4xl:row-span-8
    shadow-translucent flex flex-col overflow-hidden relative 
  '
						style={{ background: 'var(--t-surface)' }}
					>
						{/* Photo — natural flow, sits above text */}
						<div
							className='relative w-80 h-80 border-4 overflow-hidden shadow-lg shrink-0 self-center mt-8'
							style={{ borderColor: 'var(--t-accent-blue)' }}
						>
							<Image
								src={PERSONAL_INFO.headshot || '/placeholder.jpg'}
								fill
								alt='Krish Nalam'
								className='object-cover'
							/>
						</div>

						{/* Bio text */}
						<div className='flex-1 p-4 flex flex-col justify-center min-h-0'>
							<div
								className='flex items-center gap-2 mb-2 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'
								style={{ color: 'var(--t-accent-blue)' }}
							>
								<span className='text-xl @md:text-2xl font-extrabold uppercase tracking-widest leading-tight'>
									:) Hello Again!
								</span>
							</div>
							<p className='text-base @md:text-lg leading-tight text-ink'>
								This is me — a tech geek by day, code wizard by night. Always ready to debug life&apos;s
								challenges with a dash of humor and caffeine!
							</p>
						</div>
					</div>

					{/* ── 2. WORKS IN PROGRESS ── */}
					<div
						className='
							@sm:col-span-2
							@4xl:col-start-7 @4xl:col-span-6 @4xl:row-start-1 @4xl:row-span-4
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

					{/* ── 3. SKILL RADAR ── */}
					<div
						className='
							@sm:col-span-2
							@4xl:col-start-10 @4xl:col-span-3 @4xl:row-start-5 @4xl:row-span-4
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
							@sm:col-span-2
							@4xl:col-start-13 @4xl:col-span-4 @4xl:row-start-1 @4xl:row-span-6
							p-3 shadow-translucent flex flex-col items-center gap-2 overflow-hidden min-h-[110px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<div className='shrink-0 text-center'>
							<h3
								className='font-bold text-lg leading-tight drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'
								style={{ color: 'var(--t-accent-blue)' }}
							>
								Ready to Connect?
							</h3>
							<p className='text-xs text-dark-gray mt-1'>Drag the globe.</p>
						</div>
						<div className='flex-1 w-full min-h-0'>
							<Globe />
						</div>
					</div>

					{/* ── 6. COPY EMAIL ── */}
					<div
						className='
							@sm:col-span-2
							@4xl:col-start-7 @4xl:col-span-3 @4xl:row-start-6 @4xl:row-span-3
							p-3 shadow-translucent flex flex-col items-center justify-center gap-2 relative overflow-hidden min-h-[60px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<div
							className='absolute inset-0 opacity-10 pointer-events-none'
							style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
						/>
						<button
							onClick={handleCopyEmail}
							className='relative z-10 flex items-center gap-2 px-4 py-2 border-double border-4 border-purple-500 hover:bg-purple-700 hover:border-purple-400 text-purple-400 hover:text-white transition-all shadow-translucent'
							title='Copy dev@krishnalam.com'
						>
							<RiFileCopyFill className='text-xl' />
							<span className='text-sm font-mono uppercase tracking-widest'>Copy Email</span>
						</button>
						<p className='relative z-10 text-xs font-mono text-dark-gray tracking-wide'>
							dev@krishnalam.com
						</p>
					</div>

					{/* ── 7. HOBBIES — character select carousel (Swiper) ── */}
					<div
						className='
							@sm:col-span-4
							@4xl:col-start-13 @4xl:col-span-4 @4xl:row-start-7 @4xl:row-span-4
							shadow-translucent flex flex-col overflow-hidden
						'
						style={{ background: 'var(--t-surface)' }}
					>
						{/* Title bar + dot indicator */}
						<div
							className='flex items-center justify-between px-4 py-2 shrink-0 border-b-2 border-dashed'
							style={{ borderColor: 'var(--t-border)' }}
						>
							<h3 className='font-bold text-lg text-retro-yellow drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>
								Recharge Modes 🌩️
							</h3>
							<div className='flex gap-1.5'>
								{HOBBIES.map((_, i) => (
									<button
										key={i}
										onClick={() => swiperRef.current?.slideToLoop(i)}
										aria-label={`Go to slide ${i + 1}`}
										className='w-2.5 h-2.5 border-2 transition-all focus:outline-none'
										style={{
											borderColor: 'var(--t-border)',
											background: i === activeIdx ? 'var(--t-accent-blue)' : 'transparent',
										}}
									/>
								))}
							</div>
						</div>

						{/* Swiper carousel */}
						<div className='flex-1 min-h-0 w-full min-w-0'>
							<Swiper
								slidesPerView={2.5}
								centeredSlides={true}
								loop={true}
								loopAdditionalSlides={3}
								spaceBetween={24}
								grabCursor={true}
								onSwiper={(s) => {
									swiperRef.current = s;
								}}
								onSlideChange={(s) => setActiveIdx(s.realIndex % HOBBIES.length)}
								className='h-full w-full'
							>
								{[...HOBBIES, ...HOBBIES].map((h, i) => (
									<SwiperSlide key={`${h.id}-${i}`} className='!h-auto'>
										{({ isActive }) => (
											<div
												className='h-full flex flex-col items-center justify-center transition-opacity duration-200'
												style={{ opacity: isActive ? 1 : 0.35 }}
											>
												<span
													className={`leading-none transition-all duration-200 ${
														isActive ? 'text-6xl' : 'text-3xl filter grayscale'
													}`}
												>
													{h.emoji}
												</span>
												<div
													className='overflow-hidden transition-all duration-200'
													style={{
														maxHeight: isActive ? '3rem' : 0,
														marginTop: isActive ? '0.75rem' : 0,
													}}
												>
													<p
														className='font-bold font-mono uppercase tracking-[0.15em] text-sm text-center px-3 pt-1 border-t-2 whitespace-nowrap'
														style={{
															borderColor: 'var(--t-accent-blue)',
															color: 'var(--t-ink)',
														}}
													>
														{h.name}
													</p>
												</div>
											</div>
										)}
									</SwiperSlide>
								))}
							</Swiper>
						</div>

						{/* Prev / Next */}
						<div className='flex justify-between px-3 py-2 shrink-0'>
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								className='border-2 border-dashed px-3 py-0.5 font-mono text-sm transition-all focus:outline-none hover:bg-light-gray'
								style={{ borderColor: 'var(--t-border)', color: 'var(--t-ink)' }}
							>
								◀ PREV
							</button>
							<button
								onClick={() => swiperRef.current?.slideNext()}
								className='border-2 border-dashed px-3 py-0.5 font-mono text-sm transition-all focus:outline-none hover:bg-light-gray'
								style={{ borderColor: 'var(--t-border)', color: 'var(--t-ink)' }}
							>
								NEXT ▶
							</button>
						</div>
					</div>

					{/* ── 8. TECH STACK — horizontal scrolling marquee ── */}
					<div
						className='
							@sm:col-span-4
							@4xl:col-start-1 @4xl:col-span-12 @4xl:row-start-9 @4xl:row-span-2
							shadow-translucent relative overflow-hidden flex items-center gap-3 px-4 min-h-[60px]
						'
						style={{ background: 'var(--t-surface)' }}
					>
						<div className='shrink-0 flex flex-col justify-center'>
							<h3
								className='font-bold text-lg leading-tight drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'
								style={{ color: 'var(--t-accent-orange)' }}
							>
								Tech Stack
							</h3>
							<p className='text-xs font-mono' style={{ color: 'var(--t-ink-muted)' }}>
								My go-to toolkit.
							</p>
						</div>
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
