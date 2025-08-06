import { projects } from '@/data/index.tsx';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow, FaTrophy } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';

const RecentProjects = () => {
	return (
		<div className='py-20' id='projects'>
			<h1 className='heading'>
				A small selection of <span className='text-purple'>recent projects</span>
			</h1>
			<div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
				{projects.map(({ id, title, des, img, iconLists, link, trophy }) => {
					return (
						<div
							key={id}
							className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center
                justify-center sm:w-[570px] w-[80vw]'
						>
							<PinContainer title={link} href={link}>
								<div
									className='relative flex items-center justify-center sm:w-[570px] w-[80vw] 
                        overflow-hidden sm:h-[40vh] mb-10'
								>
									<div className='relative w-full h-84 overflow-hidden lg:rounded-3xl bg-[#13162d]'>
										<img src='/bg.png' alt='bg-img' />
									</div>
									<img src={img} alt={title} className='z-10 absolute h-72 w-11/12 rounded-2xl' />
								</div>
								<h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
								<p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>

								<div className='flex items-center justify-between mt-7 mb-3'>
									<div className='flex items-center'>
										{iconLists.map((icon, index) => {
											return (
												<div
													key={icon}
													className='border border-white/[0.2] rounded-full bg-black
                                    lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center'
													style={{ transform: `translateX(-${5 * index * 2}px)` }}
												>
													<img src={icon} alt={icon} className='p-2' />
												</div>
											);
										})}
									</div>
									{trophy && (
										<div className='border border-white/[0.2] rounded-full p-2 gap-2 bg-black flex justify-center items-center'>
											<FaTrophy className='text-xl text-yellow-500' />
											<span className='text-md font-medium italic text-yellow-500'>{trophy}</span>
										</div>
									)}
									{/* <FaSquareGithub className='text-5xl' color='#CBACF9' /> */}
								</div>
							</PinContainer>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RecentProjects;
