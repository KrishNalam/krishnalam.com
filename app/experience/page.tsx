'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { WindowFrame } from '@/components/WindowFrame';
import { EXPERIENCES } from '@/data/config';

export default function ExperiencePage() {
	const containerRef = useRef<HTMLDivElement>(null);
	const heightRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	// Calculate height for the beam animation
	useEffect(() => {
		if (heightRef.current) {
			const rect = heightRef.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [heightRef]);

	// Track scrolling ONLY within this specific container
	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ['start start', 'end end'],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<WindowFrame title='EXPERIENCE_LOG'>
			<div
				className='w-full h-full text-neutral-800 relative overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-400 scrollbar-track-neutral-200'
				ref={containerRef}
			>
				{/* --- LIGHT MODE SCANLINE OVERLAY --- */}
				{/* Subtle dark lines on white background */}
				<div className='pointer-events-none sticky top-0 left-0 w-full h-full z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(0,0,0,0.03),rgba(0,0,0,0.01),rgba(0,0,0,0.03))] bg-[length:100%_3px,3px_100%] opacity-40' />

				<div className='px-2 md:px-8 relative z-10'>
					{/* Header Section */}
					<div className='mb-12 border-b-2 border-dashed border-neutral-300 pb-6'>
						<h2 className='text-2xl md:text-4xl mb-2 text-black uppercase tracking-tighter'>
							{'>'} ./EXECUTE_HISTORY
						</h2>
						<p className='text-neutral-600 text-sm md:text-base bg-neutral-200/50 p-2 border border-neutral-400 border-dashed inline-block'>
							[STATUS]: DATA_RETRIEVAL_SUCCESSFUL
							<br />
							[COUNT]: {EXPERIENCES.length} ENTRIES FOUND
						</p>
					</div>

					<div ref={heightRef} className='relative pb-20'>
						{EXPERIENCES.map((exp, index) => (
							<div key={index} className='flex justify-start pt-10 md:pt-24 md:gap-10'>
								{/* --- LEFT SIDE (Sticky Date/Title) --- */}
								<div className='sticky flex flex-col md:flex-row z-40 items-center top-10 self-start max-w-xs lg:max-w-sm md:w-full'>
									{/* Retro Square Node (White box, black border) */}
									<div className='h-8 absolute left-3 md:left-3 w-8 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] z-50'>
										<div className='h-3 w-3 bg-blue-600 animate-pulse' />
									</div>

									{/* Desktop Title Block */}
									<div className='hidden md:block md:pl-20  p-2 border border-transparent rounded'>
										<div className='text-4xl font-bold text-neutral-300 uppercase tracking-widest leading-none select-none'>
											{exp.date}
										</div>
										<div className='text-xl font-bold text-black uppercase mt-2'>{exp.company}</div>
										<div className='text-sm text-blue-700 font-bold uppercase'>{exp.title}</div>
										<div className='text-xs text-neutral-500 mt-1'>[{exp.location}]</div>
									</div>
								</div>

								{/* --- RIGHT SIDE (Content & Details) --- */}
								<div className='relative pl-20 pr-4 md:pl-4 w-full'>
									{/* Mobile Only Header */}
									<div className='md:hidden block mb-4 border-b border-dashed border-neutral-400 pb-2'>
										<span className='text-2xl font-bold text-black block'>{exp.company}</span>
										<span className='text-sm font-bold text-blue-700 block'>{exp.title}</span>
										<span className='text-xs text-neutral-500 block'>
											{exp.date} | {exp.location}
										</span>
									</div>

									{/* Description Card */}
									{/* White card with hard shadow for "Paper" look */}
									<div className='bg-white border border-neutral-300 p-6 relative group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300'>
										{/* Decorative Corner (Blue) */}
										<div className='absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-600'></div>
										<div className='absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-600'></div>

										<ul className='list-none space-y-2 text-neutral-700 text-sm md:text-base'>
											{exp.desc.map((point, i) => (
												<li key={i} className='flex items-start'>
													<span className='mr-2 mt-1.5 text-blue-600 font-bold text-[10px]'>
														▶
													</span>
													{point}
												</li>
											))}
										</ul>
									</div>

									{/* Image Placeholder */}
									<div className='mt-4 w-full h-32 md:h-48 bg-neutral-200 border border-neutral-300 flex items-center justify-center relative overflow-hidden group'>
										{/* Radial gradient background */}
										<div className='absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent'></div>
										{/* Grid pattern overlay */}
										<div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]'></div>

										<span className='text-neutral-500 font-bold font-mono text-xs uppercase tracking-widest group-hover:text-blue-600 transition-colors'>
											[IMG: {exp.company}]
										</span>
									</div>
								</div>
							</div>
						))}

						{/* --- THE BEAM (Timeline Line) --- */}
						<div
							style={{ height: height + 'px' }}
							className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]'
						>
							{/* Static Background Line (Light Gray) */}
							<div className='absolute inset-y-0 left-0 w-full border-l-2 border-dashed border-black' />

							{/* Animated Fill Line (Blue) */}
							<motion.div
								style={{
									height: heightTransform,
									opacity: opacityTransform,
								}}
								className='absolute inset-x-0 top-0 w-[2px] bg-blue-600 shadow-[0_0_10px_1px_rgba(37,99,235,0.5)]'
							/>
						</div>
					</div>
				</div>
			</div>
		</WindowFrame>
	);
}
