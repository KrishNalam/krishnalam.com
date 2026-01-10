'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { WindowFrame } from '@/components/WindowFrame';
import { EXPERIENCES } from '@/data/config';
import Image from 'next/image';
export default function ExperiencePage() {
	const containerRef = useRef<HTMLDivElement>(null);
	const heightRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	// Recalculate height on load and window resize
	useEffect(() => {
		const updateHeight = () => {
			if (heightRef.current) {
				const rect = heightRef.current.getBoundingClientRect();
				setHeight(rect.height);
			}
		};

		updateHeight();
		window.addEventListener('resize', updateHeight);
		return () => window.removeEventListener('resize', updateHeight);
	}, []);

	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ['start 10%', 'end 50%'],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<WindowFrame title='EXPERIENCE'>
			{/* WRAPPER: Light Mode Background */}
			<div className='relative w-full h-full bg-[#faf9f6] text-neutral-900 selection:bg-yellow-200 selection:text-black'>
				{/* CRT SCANLINE OVERLAY */}
				<div
					className='pointer-events-none absolute inset-0 z-10 opacity-100'
					style={{
						background: `
                            linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.06)),
                            linear-gradient(90deg, rgba(255,0,0,0.02), rgba(0,255,0,0.02), rgba(0,0,255,0.02))
                        `,
						backgroundSize: '100% 3px, 4px 100%',
					}}
				></div>

				{/* SCROLL CONTAINER */}
				<div ref={containerRef} className='w-full h-full relative overflow-y-auto overflow-x-hidden '>
					{/* FULL WIDTH CONTAINER */}
					<div className='w-full px-4 mx-auto relative pt-8'>
						{/* CONTENT WRAPPER */}
						<div ref={heightRef} className='relative pl-15 '>
							{/* --- THE BEAM (Timeline Line) --- */}
							<div
								style={{ height: height + 'px' }}
								className='absolute left-6 top-0 overflow-hidden w-[2px] bg-neutral-200 z-0'
							>
								<motion.div
									style={{
										height: heightTransform,
										opacity: opacityTransform,
									}}
									className='absolute inset-x-0 top-0 w-[2px] bg-neutral-800'
								/>
							</div>

							{EXPERIENCES.map((exp, index) => (
								<div key={index} className='flex flex-row justify-start pt-12 gap-0 group'>
									{/* --- LEFT SIDE (Date & Marker) --- */}
									<div className='sticky flex z-0 items-end top-20 self-start shrink-0 max-w-[15%]'>
										{/* The Marker Dot */}
										<div className='h-4 w-4 absolute -left-11 top-1 md:top-2 bg-[#faf9f6] border-2 border-neutral-400 flex items-center justify-center z-30 group-hover:border-black group-hover:scale-125 transition-all duration-300'>
											<div className='h-1.5 w-1.5 bg-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity' />
										</div>

										{/* Desktop Date Display */}
										<div className='hidden md:block text-left pr-6 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 bg-[#faf9f6]'>
											<div className='text-3xl font-black text-neutral-900 tracking-tighter leading-none'>
												{exp.date}
											</div>
											<div className='text-xs font-bold text-neutral-500 mt-2 uppercase tracking-widest'>
												{exp.location}
											</div>
										</div>
									</div>

									{/* --- RIGHT SIDE (Card Content) --- */}
									<div className='relative pl-12 md:pl-0 flex-1 w-full z-10'>
										{/* Mobile Header */}
										<div className='md:hidden block mb-3 pl-1'>
											<span className='text-xs font-bold text-neutral-500 block mb-1 uppercase'>
												{exp.date}
											</span>
											<span className='text-xl font-black text-neutral-900 block'>
												{exp.company}
											</span>
											<span className='text-xs text-neutral-600 block uppercase font-bold'>
												{exp.title}
											</span>
										</div>

										{/* Desktop Header */}
										<div className='hidden md:flex items-baseline gap-4 mb-4 border-b border-neutral-300/50 pb-2 w-full'>
											<h3 className='text-3xl font-black text-neutral-900 uppercase'>
												{exp.company}
											</h3>
											<div className='text-sm font-bold text-neutral-500 uppercase tracking-widest'>
												{exp.title}
											</div>
										</div>

										{/* CONTENT ROW: Description + Image Side-by-Side */}
										<div className='flex flex-row pb-10'>
											{/* 1. Description Box */}
											<div className='flex-1 bg-off-white border border-black border-2 p-6 mr-6 relative group-hover:shadow-translucent group-hover:-translate-y-1 transition-all duration-300'>
												<ul className='space-y-3'>
													{exp.desc.map((point, i) => (
														<li
															key={i}
															className='flex items-start text-sm md:text-base text-neutral-700 leading-relaxed font-medium'
														>
															<span className='mr-3 mt-1.5 text-neutral-400 text-[10px] shrink-0'>
																●
															</span>
															{point}
														</li>
													))}
												</ul>
											</div>

											{/* 2. Image Logic */}
											<div className='w-[25%] h-auto z-50 shrink-0 bg-neutral-100 border border-dashed border-neutral-300 relative overflow-hidden group/image flex items-center justify-center'>
												{/* CONDITIONAL RENDERING */}
												{exp.image ? (
													// IF IMAGE EXISTS
													<>
														{/* Optional: Add a mix-blend overlay to make it look printed/retro */}
														<Image
															src={exp.image}
															alt={`${exp.company} office`}
															fill
															className='absolute border-2 border-black inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
														/>
													</>
												) : (
													// IF NO IMAGE (Default Fallback)
													<>
														<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-150"></div>
														<div className='text-center z-10'>
															<div className='text-neutral-400 group-hover/image:text-neutral-900 font-bold font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 border border-neutral-300 px-3 py-1 bg-white shadow-sm'>
																NO_DATA
															</div>
														</div>
													</>
												)}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</WindowFrame>
	);
}
