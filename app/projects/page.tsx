import { WindowFrame } from '@/components/WindowFrame';
import { PROJECTS } from '@/data/config';
import Image from 'next/image';
import { RiSupabaseFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoAws } from 'react-icons/bi';
import { SiAwslambda, SiOpencv, SiMediapipe, SiPytorch, SiFlask, SiMongodb, SiLangchain } from 'react-icons/si';
import { AiFillTrophy } from 'react-icons/ai';

export default function ProjectsPage() {
	return (
		<WindowFrame title='PROJECT_ARCHIVE'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 h-full'>
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className='bg-white border-3 border-black flex flex-col h-full relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.9)] shadow-translucent'
					>
						{/* 1. CLICKABLE IMAGE SECTION */}
						<a
							href={project.url}
							target='_blank'
							rel='noreferrer'
							className='block h-48 border-b-2 border-black overflow-hidden relative group cursor-pointer bg-neutral-100'
						>
							{/* Placeholder for image - standard img tag used for simplicity */}
							{project.image ? (
								<Image
									src={project.image}
									alt={project.title}
									fill
									sizes='100%'
									className='object-cover transition-transform duration-700 scale-105 group-hover:scale-115'
								/>
							) : (
								<div className='text-center z-10'>
									<div className='text-neutral-400 group-hover/image:text-neutral-900 font-bold font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 border border-neutral-300 px-3 py-1 bg-white shadow-sm'>
										NO_IMG_DATA
									</div>
								</div>
							)}

							{/* 2. WINNER/AWARD BADGE */}
							{project.award && (
								<div className='absolute top-2 right-2 z-20 bg-retro-yellow border-black border-2 px-2 py-1 flex items-center group duration-300 '>
									<span className='font-bold max-w-0 overflow-hidden opacity-0 whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-50 group-hover:opacity-100 group-hover:mr-2'>
										{project.award}
									</span>
									<span className='text-black text-3xl flex items-center justify-center '>
										<AiFillTrophy />
									</span>
								</div>
							)}
						</a>

						{/* CONTENT SECTION */}
						<div className='p-6 flex flex-col grow'>
							<div className='mb-4'>
								<h3 className='text-2xl font-bold uppercase mb-2'>
									<a
										href={project.url}
										target='_blank'
										rel='noreferrer'
										className='hover:underline decoration-4 decoration-retro-blue'
									>
										{project.title}
									</a>
								</h3>
								<p className='text-neutral-600 italic text-sm border-b-2 border-neutral-200 pb-2 mb-2'>
									{project.description}
								</p>
								<ul className='list-disc list-inside text-sm space-y-1 text-neutral-800'>
									{project.tasks.map((task, i) => (
										<li key={i}>{task}</li>
									))}
								</ul>
							</div>

							{/* 3. TECH STACK - Pushed to bottom with mt-auto */}
							<div className='mt-auto pt-4 border-t-2 border-neutral-100'>
								<div className='flex flex-wrap gap-2'>
									{project.stack.map((t) => (
										<span
											key={t}
											className='px-2 py-1 bg-neutral-100 border border-black text-xs font-bold font-mono hover:bg-black hover:text-white transition-colors'
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
		</WindowFrame>
	);
}
