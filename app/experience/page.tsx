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

	useEffect(() => {
		const updateHeight = () => {
			if (heightRef.current) setHeight(heightRef.current.getBoundingClientRect().height);
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
			<div className='relative w-full h-full' style={{ background: 'var(--t-surface-dim)', color: 'var(--t-ink)' }}>
				{/* CRT scanline overlay */}
				<div
					className='absolute inset-0 z-10 pointer-events-none opacity-100'
					style={{
						background:
							'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.05)), linear-gradient(90deg, rgba(255,0,0,0.02), rgba(0,255,0,0.02), rgba(0,0,255,0.02))',
						backgroundSize: '100% 3px, 4px 100%',
					}}
				/>

				{/* Scroll container — owns the scroll for framer-motion tracking */}
				<div ref={containerRef} className='w-full h-full relative overflow-y-auto overflow-x-hidden custom-scrollbar'>
					<div className='w-full px-4 mx-auto relative pt-8'>
						<div ref={heightRef} className='relative pl-15'>

							{/* Timeline track */}
							<div
								className='absolute left-6 top-0 w-[2px] z-0'
								style={{ height: height + 'px', background: 'var(--t-border)', opacity: 0.35 }}
							/>
							{/* Animated progress fill */}
							<div className='absolute left-6 top-0 w-[2px] z-0 overflow-hidden' style={{ height: height + 'px' }}>
								<motion.div
									style={{ height: heightTransform, opacity: opacityTransform, background: 'var(--t-ink)' }}
									className='absolute inset-x-0 top-0 w-[2px]'
								/>
							</div>

							{EXPERIENCES.map((exp, index) => (
								<div key={index} className='flex flex-row justify-start pt-12 gap-0 group'>
									{/* Date & marker */}
									<div className='sticky flex z-0 items-end top-20 self-start shrink-0 max-w-[15%]'>
										<div
											className='h-4 w-4 absolute -left-11 top-1 md:top-2 border-2 flex items-center justify-center z-30 transition-all duration-300 group-hover:scale-125'
											style={{ background: 'var(--t-surface)', borderColor: 'var(--t-ink-muted)' }}
										>
											<div
												className='h-1.5 w-1.5 opacity-0 group-hover:opacity-100 transition-opacity'
												style={{ background: 'var(--t-ink)' }}
											/>
										</div>
										<div className='hidden md:block text-left pr-6 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-300'>
											<div className='text-3xl font-black tracking-tighter leading-none' style={{ color: 'var(--t-ink)' }}>
												{exp.date}
											</div>
											<div className='text-xs font-bold mt-2 uppercase tracking-widest' style={{ color: 'var(--t-ink-muted)' }}>
												{exp.location}
											</div>
										</div>
									</div>

									{/* Card content */}
									<div className='relative pl-12 md:pl-0 flex-1 w-full z-10'>
										{/* Mobile header */}
										<div className='md:hidden block mb-3 pl-1'>
											<span className='text-xs font-bold block mb-1 uppercase' style={{ color: 'var(--t-ink-muted)' }}>
												{exp.date}
											</span>
											<span className='text-xl font-black block' style={{ color: 'var(--t-ink)' }}>
												{exp.company}
											</span>
											<span className='text-xs block uppercase font-bold' style={{ color: 'var(--t-ink-muted)' }}>
												{exp.title}
											</span>
										</div>

										{/* Desktop header */}
										<div className='hidden md:flex items-baseline gap-4 mb-4 pb-2 w-full border-b' style={{ borderColor: 'var(--t-border)' }}>
											<h3 className='text-3xl font-black uppercase' style={{ color: 'var(--t-ink)' }}>
												{exp.company}
											</h3>
											<div className='text-sm font-bold uppercase tracking-widest' style={{ color: 'var(--t-ink-muted)' }}>
												{exp.title}
											</div>
										</div>

										{/* Content row: description + image */}
										<div className='flex flex-row pb-10'>
											<div
												className='flex-1 border-2 p-6 mr-6 relative group-hover:shadow-translucent group-hover:-translate-y-1 transition-all duration-300'
												style={{ background: 'var(--t-surface)', borderColor: 'var(--t-border)' }}
											>
												<ul className='space-y-3'>
													{exp.desc.map((point, i) => (
														<li key={i} className='flex items-start text-sm md:text-base leading-relaxed font-medium' style={{ color: 'var(--t-ink-body)' }}>
															<span className='mr-3 mt-1.5 text-[10px] shrink-0' style={{ color: 'var(--t-ink-muted)' }}>●</span>
															{point}
														</li>
													))}
												</ul>
											</div>

											<div
												className='w-[25%] h-auto z-50 shrink-0 relative overflow-hidden group/image flex items-center justify-center border border-dashed'
												style={{ background: 'var(--t-surface-faint)', borderColor: 'var(--t-border)' }}
											>
												{exp.image ? (
													<Image
														src={exp.image}
														alt={`${exp.company} office`}
														fill
														className='absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2'
													/>
												) : (
													<div className='text-center z-10'>
														<div
															className='font-bold font-mono text-xs uppercase tracking-[0.2em] px-3 py-1 border shadow-sm'
															style={{ color: 'var(--t-ink-muted)', borderColor: 'var(--t-border)', background: 'var(--t-surface)' }}
														>
															NO_IMG_DATA
														</div>
													</div>
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
