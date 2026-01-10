import { WindowFrame } from '@/components/WindowFrame';
import { PROJECTS } from '@/data/config';

export default function ProjectsPage() {
	return (
		<WindowFrame title='PROJECT_ARCHIVE'>
			<div className='grid grid-cols-1 gap-8 p-6'>
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className='bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] flex flex-col'
					>
						<div className='flex justify-between items-start mb-2'>
							<h3 className='text-3xl font-bold uppercase hover:underline decoration-4 decoration-blue-500'>
								<a href={project.url} target='_blank' rel='noreferrer'>
									{project.title}
								</a>
							</h3>
							<div className='flex gap-2'>
								{project.stack.map((t) => (
									<span key={t} className='px-2 py-1 bg-black text-white text-xs font-mono'>
										{t}
									</span>
								))}
							</div>
						</div>
						<p className='text-neutral-600 italic mb-4 border-b-2 border-neutral-200 pb-2'>
							{project.description}
						</p>
						<ul className='list-disc list-inside text-sm'>
							{project.tasks.map((task, i) => (
								<li key={i}>{task}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</WindowFrame>
	);
}
