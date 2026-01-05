'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import createGlobe from 'cobe';
import confetti from 'canvas-confetti';
import { WindowFrame } from '@/components/WindowFrame'; // Assuming this exists
import { PERSONAL_INFO } from '@/data/config'; // Assuming this exists

// --- Sub-components for clean code ---

const TechBadge = ({ label }: { label: string }) => (
	<div className='bg-slate-800 border border-slate-600 px-3 py-1 rounded text-xs font-mono text-slate-300 w-fit'>
		{label}
	</div>
);

const HobbyItem = ({ emoji, name }: { emoji: string; name: string }) => (
	<div className='group relative flex flex-col items-center justify-center p-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all cursor-help h-20 w-20 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]'>
		<span className='text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300'>{emoji}</span>
		<span className='absolute -bottom-8 bg-black text-white text-[10px] px-2 py-1 border border-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none'>
			{name}
		</span>
	</div>
);

// --- Main Component ---

export default function AboutPage() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pointerInteracting = useRef(null);
	const pointerInteractionMovement = useRef(0);

	// 1. Interactive Globe Logic (using Cobe)
	useEffect(() => {
		let phi = 0;
		let width = 0;
		const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
		window.addEventListener('resize', onResize);
		onResize();

		if (!canvasRef.current) return;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [0.1, 0.1, 0.2],
			markers: [
				{ location: [43.6532, -79.3832], size: 0.1 }, // Toronto coordinates
			],
			onRender: (state) => {
				// Drag logic
				if (!pointerInteracting.current) {
					phi += 0.005;
				}
				state.phi = phi + pointerInteractionMovement.current;
				state.width = width * 2;
				state.height = width * 2;
			},
		});

		return () => {
			globe.destroy();
			window.removeEventListener('resize', onResize);
		};
	}, []);

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
			colors: ['#000000', '#FFFFFF', '#6366F1'], // Retro colors
			spread: 70,
			origin: { y: 0.8 }, // Start from button area roughly
		});
	};

	return (
		<WindowFrame title='ABOUT_ME'>
			{/* Main Bento Grid Wrapper */}
			<div className='grid grid-cols-8 grid-rows-2 gap-4'>
				{/* --- 1. BIO CARD (Top Left - Big) --- */}
				<div className='col-span-5 row-span-3 relative border-2 border-black p-6 shadow-translucent flex flex-row justify-between overflow-hidden bg-white'>
					<div className='relative flex flex-col w-[70%]'>
						<div className='flex items-center gap-2 mb-4 text-retro-yellow drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>
							<span className='text-3xl font-extrabold uppercase tracking-widest'>:) Hello Again!</span>
						</div>
						<h1 className='text-2xl leading-tight'>
							This is me - a tech geek by day, code wizard by night. Always ready to debug life&apos;s
							challenges with a dash of humor and caffeine! 🚀
						</h1>
					</div>
					{/* Floating Headshot */}
					<div className='relative h-[20%] w-[20%] border-3'>
						<Image src={PERSONAL_INFO.headshot || '/placeholder.jpg'} fill alt='Me' className='' />
					</div>
				</div>

				{/* --- 2. INTERACTIVE GLOBE (Top Right) --- */}
				<div className='col-span-2 row-span-1 border-2 border-white/20 bg-[#050505] relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] flex flex-col'>
					<div className='p-4 z-10 pointer-events-none'>
						<p className='text-xs font-mono text-slate-400 mb-1'>Ready to Connect?</p>
						<h3 className='font-bold text-lg leading-tight'>Give it a spin.</h3>
					</div>
					<div className='absolute inset-0 top-10 cursor-grab active:cursor-grabbing w-full h-full flex items-center justify-center'>
						<canvas
							ref={canvasRef}
							style={{ width: '100%', height: '100%', maxWidth: '100%', aspectRatio: 1 }}
							onPointerDown={(e) => {
								pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
								canvasRef.current!.style.cursor = 'grabbing';
							}}
							onPointerUp={() => {
								pointerInteracting.current = null;
								canvasRef.current!.style.cursor = 'grab';
							}}
							onPointerOut={() => {
								pointerInteracting.current = null;
								canvasRef.current!.style.cursor = 'grab';
							}}
							onMouseMove={(e) => {
								if (pointerInteracting.current !== null) {
									const delta = e.clientX - pointerInteracting.current;
									pointerInteractionMovement.current = delta;
								}
							}}
						/>
					</div>
				</div>

				{/* --- 3. TECH STACK (Right Vertical Strip) --- */}
				<div className='col-span-1 row-span-2 md:row-span-2 border-2 border-white/20 bg-[#0f0f13] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] relative overflow-hidden flex flex-col p-4'>
					<div className='mb-4 relative z-10 bg-[#0f0f13] pb-2'>
						<h3 className='font-bold text-lg'>My tech stack</h3>
						<p className='text-xs text-slate-500'>Too much to list here...</p>
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

				{/* --- 4. CURRENT PROJECT (Bottom Left - Small) --- */}
				<div className='col-span-2 border-2 border-white/20 bg-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] flex flex-col justify-between group'>
					<div>
						<p className='text-[10px] font-mono text-blue-400 mb-1'>THE INSIDE SCOOP</p>
						<h3 className='font-bold text-md'>Project Delphi</h3>
					</div>
					<a
						href='#'
						className='text-xs text-slate-400 hover:text-white flex items-center gap-2 mt-2 group-hover:underline'
					>
						View status{' '}
						<span className='inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
					</a>
				</div>

				{/* --- 5. CONTACT / CONFETTI (Bottom Center-Left) --- */}
				<div className='col-span-2  border-2 border-white/20 bg-gradient-to-br from-indigo-900 to-purple-900 p-5 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center text-center relative overflow-hidden'>
					<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
					<p className='relative z-10 text-sm font-bold mb-3 text-white'>Trust me, it does something cool.</p>
					<button
						onClick={handleCopyEmail}
						className='relative z-10 bg-black text-white px-6 py-2 border border-white/30 font-mono text-sm hover:bg-white hover:text-black transition-colors active:scale-95'
					>
						Copy Email ❐
					</button>
				</div>

				{/* --- 6. HOBBIES (Bottom Right - Wide) --- */}
				<div className='col-span-4 border-2 border-white/20 bg-[#111] p-5 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]'>
					<h3 className='font-bold mb-4 flex items-center gap-2'>
						Interesting hobbies...
						<span className='text-xs font-normal text-slate-500 font-mono'>(Hover them)</span>
					</h3>
					<div className='flex flex-wrap gap-4'>
						<HobbyItem emoji='🍿' name='Cinema Nerd' />
						<HobbyItem emoji='🖨️' name='3D Printing' />
						<HobbyItem emoji='🎮' name='Retro Gaming' />
						<HobbyItem emoji='🚜' name='Touch Grass' />
					</div>
				</div>
			</div>
		</WindowFrame>
	);
}

// Data for the Marquee
const TECH_STACK = [
	'React.js',
	'Next.js',
	'TypeScript',
	'Node.js',
	'Python',
	'AWS Lambda',
	'Docker',
	'PostgreSQL',
	'Tailwind',
	'Figma',
	'Linux',
	'Git',
	'OpenCV',
	'Redis',
];
