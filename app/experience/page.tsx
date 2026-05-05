'use client';
import { WindowFrame } from '@/components/WindowFrame';
import { EXPERIENCES } from '@/data/config';
import Image from 'next/image';

export default function ExperiencePage() {
	return (
		<WindowFrame title='EXPERIENCE'>
			<div
				className='relative w-full h-full'
				style={{ background: 'var(--t-surface-dim)', color: 'var(--t-ink)' }}
			>
				{/* CRT scanline overlay */}
				<div
					className='absolute inset-0 z-10 pointer-events-none'
					style={{
						background:
							'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.05))',
						backgroundSize: '100% 3px',
					}}
				/>

				<div className='w-full h-full overflow-y-auto custom-scrollbar'>
					<div className='w-full px-8 py-8'>
						{EXPERIENCES.map((exp, index) => (
							<div key={index} className='grid grid-cols-[20px_1fr] gap-x-6'>
								{/* Left column: dot + connecting line */}
								<div className='flex flex-col items-center'>
									<div
										className='w-3 h-3 shrink-0 mt-1 border-2'
										style={{ background: 'var(--t-surface-dim)', borderColor: 'var(--t-border)' }}
									/>
									{index < EXPERIENCES.length - 1 && (
										<div
											className='w-px flex-1 mt-1'
											style={{ background: 'var(--t-border)', opacity: 0.35 }}
										/>
									)}
								</div>

								{/* Right column: content */}
								<div className='pb-12'>
									{/* Date + location */}
									<div
										className='text-sm uppercase tracking-widest mb-2 leading-none'
										style={{ color: 'var(--t-ink-muted)' }}
									>
										{exp.date} · {exp.location}
									</div>

									{/* Company */}
									<h3
										className='text-4xl font-black uppercase leading-none mb-2'
										style={{ color: 'var(--t-ink)' }}
									>
										{exp.company}
									</h3>

									{/* Title */}
									<div
										className='text-lg uppercase tracking-wider mb-6 border-b pb-4'
										style={{ color: 'var(--t-ink-muted)', borderColor: 'var(--t-border)', opacity: 0.9 }}
									>
										{exp.title}
									</div>

									{/* Bullets + image */}
									<div className='flex gap-6'>
										<ul className='flex-1 space-y-4'>
											{exp.desc.map((point, i) => (
												<li
													key={i}
													className='flex items-start text-base leading-relaxed'
													style={{ color: 'var(--t-ink-body)' }}
												>
													<span
														className='mr-3 mt-1 shrink-0 text-sm'
														style={{ color: 'var(--t-ink-muted)' }}
													>
														—
													</span>
													{point}
												</li>
											))}
										</ul>

										{exp.image && (
											<div
												className='w-36 shrink-0 relative overflow-hidden border-2'
												style={{ borderColor: 'var(--t-border)', minHeight: '110px' }}
											>
												<Image
													src={exp.image}
													alt={exp.company}
													fill
													className='object-cover grayscale hover:grayscale-0 transition-all duration-500'
												/>
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</WindowFrame>
	);
}
