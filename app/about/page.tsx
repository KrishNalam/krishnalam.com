'use client';

import Image from 'next/image';
import confetti from 'canvas-confetti';
import { WindowFrame } from '@/components/WindowFrame';
import { PERSONAL_INFO } from '@/data/config';
// import { Globe } from '@/components/Globe';
import { VscGithub } from 'react-icons/vsc';
import { RiFileCopyFill } from 'react-icons/ri';
import {
	RadarChart,
	Radar,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from 'recharts';

const TechBadge = ({ label }: { label: string }) => (
	<div className='border border-black px-3 py-1 rounded text-xs font-mono text-black bg-orange-50 w-fit'>
		{label}
	</div>
);

const HobbyItem = ({ emoji, name }: { emoji: string; name: string }) => (
	<div className='group relative flex flex-col items-center justify-center p-2 border-dashed border-4 border-light-gray hover:bg-light-gray transition-all flex-1 min-w-0'>
		<span className='text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:-translate-y-3'>
			{emoji}
		</span>
		<span className='absolute bottom-2 text-white text-2xl px-2 py-1 drop-shadow-opaque opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity'>
			{name}
		</span>
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

// --- Main Component ---
// TODO: FIX CONFETTI BUTTON

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
			{/* @container wrapper so children can query this element's width */}
			<div className='@container h-full'>
				{/*
				  Desktop (@4xl = 896px+): explicit 8-col × 5-row grid
				  Col:  1  2  3  4  5  6  7  8
				  Row1: [      BIO (5)     ][PROJECT(3)]
				  Row2: [      BIO (5)     ][CONTACT(2)][TS]
				  Row3: [      BIO (5)     ][RTC    (2)][TS]
				  Row4: [RADAR   (3)][HOBBIES  (4)     ][TS]
				  Row5: [RADAR   (3)][HOBBIES  (4)     ][TS]
				  Mobile: single-column stacked
				*/}
				<div className='grid grid-cols-1 @4xl:grid-cols-8 @4xl:grid-rows-5 @4xl:h-full gap-4 p-6'>

					{/* --- 1. BIO CARD --- */}
					<div className='@4xl:col-start-1 @4xl:col-span-5 @4xl:row-start-1 @4xl:row-span-3 relative p-6 shadow-translucent flex flex-col @4xl:flex-row justify-between overflow-hidden bg-white min-h-[200px]'>
						<div className='relative flex flex-col flex-1 @4xl:pr-6 pb-4 @4xl:pb-6 min-w-0'>
							<div className='flex items-center gap-2 mb-4 text-retro-blue drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>
								<span className='text-3xl font-extrabold uppercase tracking-widest'>:) Hello Again!</span>
							</div>
							<h1 className='text-2xl leading-tight'>
								This is me - a tech geek by day, code wizard by night. Always ready to debug life&apos;s
								challenges with a dash of humor and caffeine!
							</h1>
						</div>
						{/* Headshot */}
						<div className='relative aspect-square h-40 @4xl:h-full self-center flex-shrink-0 border-3 border-black mt-4 @4xl:mt-0'>
							<Image
								src={PERSONAL_INFO.headshot || '/placeholder.jpg'}
								fill
								alt='Me'
								className='object-cover'
							/>
						</div>
					</div>

					{/* --- 2. CURRENT PROJECT --- */}
					<div className='@4xl:col-start-6 @4xl:col-span-3 @4xl:row-start-1 bg-white p-4 shadow-translucent flex flex-row justify-between group'>
						<div className='min-w-0'>
							<p className='text-dark-gray text-lg mb-1 flex items-baseline'>
								Works In Progress
								<span className='typing-dots overflow-hidden whitespace-nowrap inline-block text-left text-bottom'>
									...
								</span>
							</p>
							<h3 className='font-bold text-3xl text-green-500 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] truncate'>
								Project Delphi
							</h3>
						</div>
						<a
							href='#'
							className='text-2xl border-black border-double border-5 group-hover:text-white group-hover:border-white group-hover:bg-green-500 p-3 flex items-center mr-5 gap-2 mt-2 shadow-translucent flex-shrink-0'
						>
							View status{' '}
							<div className='relative inline-flex items-center justify-center w-8 h-8'>
								<div className='absolute inset-0 bg-green-500 rounded-full animate-pulse' />
								<VscGithub className='relative z-10 w-full h-full text-black group-hover:text-white' />
							</div>
						</a>
					</div>

					{/* --- 3. CONTACT / CONFETTI (shrunk to 1 row on desktop) --- */}
					<div className='@4xl:col-start-6 @4xl:col-span-2 @4xl:row-start-2 bg-white p-4 shadow-translucent flex flex-col items-center justify-center gap-3 @4xl:flex-row @4xl:items-center @4xl:justify-between relative overflow-hidden'>
						<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
						<p className='relative z-10 text-lg text-black leading-tight min-w-0 @4xl:truncate'>
							Click it; Trust me, it does something cool.
						</p>
						<button
							onClick={handleCopyEmail}
							className='relative z-10 text-purple-900 px-4 py-2 border-double border-5 border-purple-700 hover:border-white hover:text-white font-bold text-2xl hover:bg-purple-900 flex-shrink-0'
						>
							<span className='flex items-center gap-2'>
								Copy Email <RiFileCopyFill />
							</span>
						</button>
					</div>

					{/* --- 4. TECH STACK --- */}
					<div className='@4xl:col-start-8 @4xl:row-start-2 @4xl:row-span-4 bg-white shadow-translucent relative overflow-hidden flex flex-col p-4 min-h-[200px]'>
						<div className='mb-4 relative z-10 pb-2'>
							<h3 className='font-bold text-2xl drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] text-orange-600'>
								Tech Stack
							</h3>
							<p className='text-lg text-black'>Too much to list here...</p>
						</div>
						<div className='relative flex-1 overflow-hidden mask-image-gradient'>
							<div className='absolute top-0 left-0 w-full animate-marquee-vertical flex flex-col gap-3'>
								{[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
									<div key={i} className='flex justify-end'>
										<TechBadge label={tech} />
									</div>
								))}
							</div>
						</div>
					</div>

					{/* --- 5. READY TO CONNECT (Globe commented out, shrunk to 1 row) --- */}
					<div className='@4xl:col-start-6 @4xl:col-span-2 @4xl:row-start-3 bg-white p-4 shadow-translucent flex flex-col justify-center overflow-hidden'>
						<h3 className='font-bold text-2xl text-red-600 leading-tight'>
							<span className='drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>Ready to Connect?</span>
							<br />
							<span className='text-base text-dark-gray'>Drop a line anytime.</span>
						</h3>
						{/* <Globe /> */}
					</div>

					{/* --- 6. SKILL RADAR --- */}
					<div className='@4xl:col-start-1 @4xl:col-span-3 @4xl:row-start-4 @4xl:row-span-2 bg-white p-4 shadow-translucent flex flex-col min-h-[300px]'>
						<h3 className='font-bold text-2xl drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] text-retro-blue'>
							Skill Radar
						</h3>
						<p className='text-sm font-mono text-light-gray mb-2'>Self-assessed, caffeine-adjusted.</p>
						<div className='flex-1 min-h-0'>
							<ResponsiveContainer width='100%' height='100%'>
								<RadarChart cx='50%' cy='50%' outerRadius='72%' data={SKILL_DATA}>
									<PolarGrid stroke='#000000' strokeWidth={1} />
									<PolarAngleAxis
										dataKey='subject'
										tick={{ fontFamily: 'monospace', fontSize: 11, fill: '#000000' }}
									/>
									<PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
									<Radar
										dataKey='value'
										stroke='#ff8600'
										strokeWidth={2}
										fill='#11408c'
										fillOpacity={0.2}
										dot={{ fill: '#11408c', r: 3, strokeWidth: 0 }}
									/>
								</RadarChart>
							</ResponsiveContainer>
						</div>
					</div>

					{/* --- 7. HOBBIES --- */}
					<div className='@4xl:col-start-4 @4xl:col-span-4 @4xl:row-start-4 @4xl:row-span-2 bg-white p-5 shadow-translucent flex flex-col'>
						<h3 className='font-bold text-3xl mb-4 flex items-center gap-2 text-retro-yellow'>
							<span className='drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>My Recharge Modes 🌩️</span>
							<span className='text-lg font-normal text-dark-gray'>(Try Hovering!)</span>
						</h3>
						<div className='flex flex-wrap gap-4 flex-1'>
							<HobbyItem emoji='🍿' name='Cinema Nerd' />
							<HobbyItem emoji='🖨️' name='3D Printing' />
							<HobbyItem emoji='🚜' name='Gardener' />
							<HobbyItem emoji='🎮' name='Gamer' />
						</div>
					</div>

				</div>
			</div>
		</WindowFrame>
	);
}

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
