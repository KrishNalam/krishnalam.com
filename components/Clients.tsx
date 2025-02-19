import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { Timeline } from './ui/timeline';
import { testimonials } from '../data/index.tsx';
const Clients = () => {
	return (
		<div className='py-20' id='testimonials'>
			<h1 className='heading'>
				A few of my
				<span className='text-purple'> experiences</span>
			</h1>
			<div className='flex flex-col items-center max-lg:mt-10'>
				{testimonials.map(({ title, content }) => (
					<Timeline data={[{ title, content }]} key={title} />
				))}
			</div>
		</div>
	);
};

export default Clients;
