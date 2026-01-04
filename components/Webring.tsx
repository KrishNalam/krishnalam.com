export const Webring = () => (
	<div className='flex justify-center items-center gap-2 text-6xl text-neutral-200 pb-12'>
		<a
			className='drop-shadow-[0px_0px_5px_rgba(99,117,195,1)]'
			href='https://uoftwebring.com/redirect?nav=prev&id=3'
		>
			&lt;
		</a>
		<a href='https://uoftwebring.com' target='_blank'>
			<img src='https://uoftwebring.com/ring_logo.svg' alt='UofT Webring' className='w-12 h-auto' />
		</a>
		<a
			className='drop-shadow-[0px_0px_5px_rgba(99,117,195,1)]'
			href='https://uoftwebring.com/redirect?nav=next&id=3'
		>
			&gt;
		</a>
	</div>
);
