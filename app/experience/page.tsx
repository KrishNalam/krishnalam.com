import { WindowFrame } from '@/components/WindowFrame';
import { EXPERIENCES } from '@/data/config';

export default function ExperiencePage() {
	return (
		<WindowFrame title='EXPERIENCE_LOG'>
			<div className='space-y-8 pl-4 border-l-4 border-dashed border-neutral-400'>
				{EXPERIENCES.map((exp, index) => (
					<div key={index} className='relative pl-8'>
						<div className='absolute -left-[22px] top-0 w-8 h-8 bg-yellow-400 border-4 border-black rounded-full'></div>
						<div className='bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]'>
							<div className='flex flex-col md:flex-row md:justify-between mb-4'>
								<div>
									<h3 className='text-2xl font-bold uppercase'>{exp.title}</h3>
									<span className='font-bold text-neutral-600'>{exp.company}</span>
								</div>
								<div className='text-right'>
									<div className='inline-block bg-neutral-200 px-2 py-1 border border-black text-sm font-bold'>
										{exp.date}
									</div>
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
				))}
			</div>
		</WindowFrame>
	);
}
