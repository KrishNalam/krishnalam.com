import { WindowFrame } from '@/components/WindowFrame';
import { PROJECTS } from '@/data/config';
import Image from 'next/image';
import { AiFillTrophy } from 'react-icons/ai';

export default function ProjectsPage() {
	return (
		<WindowFrame title='PROJECT_ARCHIVE'>
			{/* Page-owned scroll */}
			<div className='h-full overflow-y-auto custom-scrollbar'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6'>
					{PROJECTS.map((project, index) => (
						<div
							key={index}
							className='flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.9)] shadow-translucent border-3'
							style={{ background: 'var(--t-surface)', borderColor: 'var(--t-border)' }}
						>
							{/* Image */}
							<a
								href={project.url}
								target='_blank'
								rel='noreferrer'
								className='block h-48 overflow-hidden relative group cursor-pointer border-b-2'
								style={{ background: 'var(--t-surface-faint)', borderColor: 'var(--t-border)' }}
							>
								{project.image ? (
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes='100%'
										className='object-cover transition-transform duration-700 scale-105 group-hover:scale-115'
									/>
								) : (
									<div className='flex items-center justify-center h-full'>
										<div
											className='font-bold font-mono text-xs uppercase tracking-[0.2em] px-3 py-1 border shadow-sm'
											style={{ color: 'var(--t-ink-muted)', borderColor: 'var(--t-border)', background: 'var(--t-surface)' }}
										>
											NO_IMG_DATA
										</div>
									</div>
								)}

								{project.award && (
									<div
										className='absolute top-2 right-2 z-20 border-2 px-2 py-1 flex items-center group duration-300'
										style={{ background: 'var(--t-accent-yellow)', borderColor: 'var(--t-border)' }}
									>
										<span
											className='font-bold max-w-0 overflow-hidden opacity-0 whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-50 group-hover:opacity-100 group-hover:mr-2'
											style={{ color: 'var(--t-ink)' }}
										>
											{project.award}
										</span>
										<span className='text-3xl flex items-center justify-center' style={{ color: 'var(--t-ink)' }}>
											<AiFillTrophy />
										</span>
									</div>
								)}
							</a>

							{/* Content */}
							<div className='p-6 flex flex-col grow'>
								<div className='mb-4'>
									<h3 className='text-2xl font-bold uppercase mb-2' style={{ color: 'var(--t-ink)' }}>
										<a
											href={project.url}
											target='_blank'
											rel='noreferrer'
											className='hover:underline decoration-4'
											style={{ textDecorationColor: 'var(--t-accent-blue)' }}
										>
											{project.title}
										</a>
									</h3>
									<p
										className='italic text-sm pb-2 mb-2 border-b-2'
										style={{ color: 'var(--t-ink-muted)', borderColor: 'var(--t-border)' }}
									>
										{project.description}
									</p>
									<ul className='list-disc list-inside text-sm space-y-1' style={{ color: 'var(--t-ink-body)' }}>
										{project.tasks.map((task, i) => (
											<li key={i}>{task}</li>
										))}
									</ul>
								</div>

								{/* Tech stack */}
								<div className='mt-auto pt-4 border-t-2' style={{ borderColor: 'var(--t-border)' }}>
									<div className='flex flex-wrap gap-2'>
										{project.stack.map((t) => (
											<span
												key={t}
												className='px-2 py-1 border text-xs font-bold font-mono transition-colors cursor-default'
												style={{
													background: 'var(--t-surface-faint)',
													borderColor: 'var(--t-border)',
													color: 'var(--t-ink)',
												}}
											>
												{t}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</WindowFrame>
	);
}
