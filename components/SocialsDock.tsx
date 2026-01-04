'use client';

import { SOCIALS } from '@/data/config';

export const SocialsDock = () => {
	return (
		<div className='flex gap-4 pb-2'>
			{SOCIALS.map((link) => (
				<a
					key={link.name}
					href={link.url}
					target='_blank'
					rel='noreferrer'
					className='group flex items-center h-14 bg-light-gray hover:bg-retro-yellow border-2 hover:shadow-translucent hover:text-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-out min-w-14 overflow-hidden'
				>
					<span className='text-black text-3xl font-bold uppercase tracking-wider overflow-hidden opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs group-hover:pl-4 transition-all duration-300 ease-in'>
						{link.name}
					</span>
					<span className='w-14 h-14 flex items-center justify-center shrink-0 [&_svg]:w-8 [&_svg]:h-8'>
						<link.icon />
					</span>
				</a>
			))}
		</div>
	);
};
