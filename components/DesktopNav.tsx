'use client';

import { RiFolderUserFill, RiFolderChartFill, RiFolderInfoFill } from 'react-icons/ri';
import { DesktopFolder } from './DesktopFolder';

export const DesktopNav = () => {
	return (
		<nav className='flex flex-row sm:flex-col gap-2 sm:gap-6 shrink-0 items-center sm:pt-4'>
			<DesktopFolder icon={RiFolderUserFill} label='ABOUT' href='/about' />
			<DesktopFolder icon={RiFolderInfoFill} label='XP' href='/experience' />
			<DesktopFolder icon={RiFolderChartFill} label='WORK' href='/projects' />
		</nav>
	);
};
