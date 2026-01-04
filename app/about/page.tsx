import Image from 'next/image';
import { WindowFrame } from '@/components/WindowFrame';
import { PERSONAL_INFO } from '@/data/config';

export default function AboutPage() {
	return (
		<WindowFrame title='ABOUT_ME'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				<div className='md:col-span-2 md:row-span-2 bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]'>
					<div className='flex flex-row flex-1'>
						<div>
							<h3 className='text-3xl font-bold mb-4 uppercase'>Who I Am</h3>
							<p className='mb-4 text-neutral-800 flex-1'>
								This is me - a tech geek by day, code wizard by night, and always ready to debug life’s
								challenges with a dash of humor and caffeine!
							</p>
						</div>
						<div className='relative h-full w-1/2'>
							\{' '}
							<div className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] overflow-hidden'>
								<Image
									src={PERSONAL_INFO.headshot}
									height={500}
									width={500}
									alt='Me'
									className='object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-yellow-300 border-2 border-black p-4 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]'>
					<div className='w-24 h-24 bg-black rounded-full mb-2'></div>
					<p className='font-bold text-xl'>LEVEL 21</p>
				</div>
				<div className='bg-blue-300 border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]'>
					<h3 className='font-bold text-xl mb-2'>Toolkit</h3>
					<p className='text-sm font-mono'>React • Next.js • Node • Python • AWS</p>
				</div>
				<div className='md:col-span-3 bg-neutral-100 border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]'>
					<h3 className='font-bold text-xl'>University of Toronto</h3>
					<p className='text-sm text-neutral-600'>B.Sc Computer Science • 2028 (Expected)</p>
				</div>
			</div>
		</WindowFrame>
	);
}
