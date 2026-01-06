'use client';

import Image from 'next/image';
import confetti from 'canvas-confetti';
import { WindowFrame } from '@/components/WindowFrame';
import { PERSONAL_INFO } from '@/data/config';
import { Globe } from '@/components/Globe';
import { VscGithub } from 'react-icons/vsc';
import { RiFileCopyFill } from 'react-icons/ri';

const TechBadge = ({ label }: { label: string }) => (
	<div className=' border border-1 border-black px-3 py-1 rounded text-xs font-mono text-black bg-orange-50 w-fit'>
		{label}
	</div>
);

const HobbyItem = ({ emoji, name }: { emoji: string; name: string }) => (
	<div className='group relative flex flex-col items-center justify-center p-2 bg-dark-gray border-4 border-dark-gray hover:bg-light-gray transition-all cursor-help flex-4 '>
		<span className='text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300'>{emoji}</span>
		<span className='absolute -bottom-12 bg-black text-white text-xl px-2 py-1 border border-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none'>
			{name}
		</span>
	</div>
);

// --- Main Component ---
//TODO: USE DOTTED LINES IN HOBBIES
//TODO: ADJUST GLOBE POSITIONING

export default function AboutPage() {
	// 2. Confetti & Copy Logic
	const handleCopyEmail = () => {
		navigator.clipboard.writeText('your.email@example.com'); // Replace with PERSONAL_INFO.email

		// Confetti explosion
		const scalar = 2;
		const triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });
		const square = confetti.shapeFromPath({ path: 'M0 10 L10 10 L10 0 L0 0z' });

		confetti({
			shapes: [triangle, square],
			scalar,
			colors: ['#000000', '#FFFFFF', '#800080'], // Retro colors
			spread: 70,
			origin: { y: 0.8 }, // Start from button area roughly
		});
	};

	return (
		<WindowFrame title='> ABOUT_ME'>
			{/* Main Bento Grid Wrapper */}
			<div className='grid grid-cols-8 grid-rows-5 gap-4 h-full p-6'>
				{/* --- 1. BIO CARD (Top Left - Big) --- */}
				<div className='col-span-5 row-span-3 relative  p-6 shadow-translucent flex flex-row justify-between overflow-hidden bg-white'>
					<div className='relative flex flex-col flex-1 pr-6 pb-6'>
						<div className='flex items-center gap-2 mb-4 text-retro-blue drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>
							<span className='text-3xl font-extrabold uppercase tracking-widest'>:) Hello Again!</span>
						</div>
						<h1 className='text-2xl leading-tight'>
							This is me - a tech geek by day, code wizard by night. Always ready to debug life&apos;s
							challenges with a dash of humor and caffeine!
						</h1>
					</div>
					{/* Floating Headshot */}
					<div className='relative aspect-square h-full border-3 border-black'>
						<Image
							src={PERSONAL_INFO.headshot || '/placeholder.jpg'}
							fill
							alt='Me'
							className='object-cover'
						/>
					</div>
				</div>

				{/* --- CURRENT PROJECT --- */}
				<div className='col-span-3 bg-white p-4 shadow-translucent flex flex-row justify-between group'>
					<div>
						<p className='text-dark-gray text-lg mb-1 flex items-baseline'>
							Works In Progress
							<span className='typing-dots overflow-hidden whitespace-nowrap inline-block text-left text-bottom'>
								...
							</span>
						</p>
						<h3 className='font-bold text-3xl text-green-500 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>
							Project Delphi
						</h3>
					</div>
					<a
						href='#'
						className='text-2xl border-black border-double border-5 group-hover:text-white group-hover:border-white group-hover:bg-green-500 p-3 flex items-center mr-5 gap-2 mt-2 shadow-translucent'
					>
						View status{' '}
						<div className='relative inline-flex items-center justify-center w-8 h-8'>
							{/* Layer 1: The Flashing Green Dot */}
							<div className='absolute inset-0 bg-green-500 rounded-full animate-pulse' />

							{/* Layer 2: The Static Icon */}
							<VscGithub className='relative z-10 w-full h-full text-black group-hover:text-white' />
						</div>
					</a>
				</div>

				{/* --- CONTACT / CONFETTI --- */}
				<div className='col-span-2 row-span-2 bg-white p-5 shadow-translucent flex flex-col items-center justify-center text-center relative overflow-hidden'>
					<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
					<p className='relative z-10 text-lg mb-3 text-black'>Click it; Trust me, it does something cool.</p>
					<button
						onClick={handleCopyEmail}
						className='relative z-10  text-purple-700 px-6 py-2 border border-double border-5 border-purple-700 hover:border-white hover:text-white font-bold text-3xl hover:bg-purple-700 transition-colors shadow-[0px_0px_5px_rgba(0,0,0,1)]'
					>
						<span className='drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] flex items-center gap-2'>
							Copy Email <RiFileCopyFill />
						</span>
					</button>
				</div>

				{/* --- TECH STACK --- */}
				<div className='col-span-1 row-span-4  bg-white shadow-translucent relative overflow-hidden flex flex-col p-4'>
					<div className='mb-4 relative z-10  pb-2'>
						<h3 className='font-bold text-2xl drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] text-orange-600'>
							Tech Stack
						</h3>
						<p className='text-lg text-black'>Too much to list here...</p>
					</div>
					{/* Vertical Marquee Mask */}
					<div className='relative flex-1 overflow-hidden mask-image-gradient'>
						<div className='absolute top-0 left-0 w-full animate-marquee-vertical flex flex-col gap-3'>
							{/* Duplicated list for infinite scroll effect */}
							{[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
								<div key={i} className='flex justify-end'>
									<TechBadge label={tech} />
								</div>
							))}
						</div>
					</div>
				</div>

				{/* --- INTERACTIVE GLOBE --- */}
				<div className='col-span-3 row-span-2 bg-white relative overflow-hidden shadow-translucent flex flex-col justify-center '>
					{/* Text Section */}
					<div className='p-6 pointer-events-none'>
						<h3 className='font-bold text-3xl text-light-gray leading-tight text-red-600 '>
							<span className='drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>Ready to Connect? </span>
							<br />
							<span className='text-lg text-dark-gray'>Give it a spin.</span>
						</h3>
					</div>
					{/* Globe Container */}
					<div className='absolute bottom-[-5%] right-[-50%] w-full h-full z-50'>
						<Globe />
					</div>
				</div>

				{/* --- HOBBIES --- */}
				<div className='col-span-4 row-span-2  bg-white p-5 shadow-translucent flex flex-col'>
					<h3 className='font-bold text-3xl mb-4 flex items-center gap-2 text-retro-yellow '>
						<span className='drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>My Recharge Modes 🌩️</span>
						<span className='text-lg font-normal text-dark-gray '>(Try Hovering!)</span>
					</h3>
					<div className='flex flex-wrap gap-4 flex-1 mb-10'>
						<HobbyItem emoji='🍿' name='Cinema Nerd' />
						<HobbyItem emoji='🖨️' name='3D Printing' />
						<HobbyItem emoji='🚜' name='Touching Grass (Gardening)' />
						<HobbyItem emoji='🎮' name='Gaming' />
					</div>
				</div>
			</div>
		</WindowFrame>
	);
}

// Data for the Marquee
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
