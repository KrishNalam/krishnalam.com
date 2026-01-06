import { WindowFrame } from '@/components/WindowFrame';
import { EXPERIENCES } from '@/data/config';

export default function ExperiencePage() {
	return (
		<WindowFrame title='EXPERIENCE_LOG'>
			<div className='relative max-w-5xl mx-auto p-4'>
				{/* 1. The Center Timeline Line */}
				{/* We use translate-x-1/2 to perfectly center the 4px border */}
				<div className='absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dashed border-neutral-400 hidden md:block'></div>

				<div className='space-y-12'>
					{EXPERIENCES.map((exp, index) => {
						const isEven = index % 2 === 0;

						return (
							<div
								key={index}
								// 2. Alternating Layout Logic
								// If even: Standard Row (Content Left, Image Right)
								// If odd: Reverse Row (Image Left, Content Right)
								className={`flex items-center justify-between w-full relative ${
									isEven ? 'flex-row' : 'flex-row-reverse'
								}`}
							>
								{/* --- CENTER DOT --- */}
								<div className='absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 border-4 border-black rounded-full z-10 hidden md:block'></div>

								{/* --- CONTENT CARD  --- */}
								<div className='w-full mb-6 md:mb-0'>
									<div className='bg-white p-6 shadow-translucent relative group'>
										{/* Decorative arrow pointing to center line */}
										<div
											className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-b border-r border-black transform rotate-45 ${
												isEven
													? '-right-2 border-t-0 border-l-0'
													: '-left-2 border-b-0 border-r-0 rotate-[225deg]'
											}`}
										></div>

										<div className='flex justify-between mb-4'>
											<div>
												<h3 className='text-2xl font-bold uppercase'>{exp.title}</h3>
												<span className='font-bold text-neutral-600 block'>{exp.company}</span>
												<span className='text-sm text-neutral-500 block md:hidden mt-1'>
													{exp.date}
												</span>
											</div>
											<div className='text-right'>
												<div className='text-sm text-neutral-500 mt-1'>{exp.location}</div>
											</div>
										</div>
										<ul className='list-disc list-inside space-y-1 text-neutral-800'>
											{exp.desc.map((point, i) => (
												<li key={i}>{point}</li>
											))}
										</ul>
									</div>
								</div>

								{/* --- DATE & IMAGE SIDE (Always 45% width on desktop) --- */}
								<div
									className={`w-full md:w-[45%] flex flex-col ${
										isEven ? 'md:items-start pl-8' : 'md:items-end pr-8'
									}`}
								>
									{/* The Date Badge */}
									<div className='inline-block bg-neutral-200 px-4 py-2 border border-black text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4'>
										{exp.date}
									</div>

									{/* The Picture Placeholder */}
									{/* You can replace the div below with an <img /> tag later */}
									<div className='w-full h-48 bg-neutral-800 border-2 border-black flex items-center justify-center relative overflow-hidden'>
										{/* Placeholder styling */}
										<div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent'></div>
										<span className='text-neutral-400 font-mono text-xs uppercase tracking-widest'>
											[IMG: {exp.company}]
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</WindowFrame>
	);
}
