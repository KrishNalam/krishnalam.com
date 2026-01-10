'use client';

import { RiFolderUserFill, RiFolderChartFill, RiFolderInfoFill } from 'react-icons/ri';
import { DesktopFolder } from './DesktopFolder';

export const DesktopNav = () => {
	return (
		<nav className='flex flex-col gap-6 w-20 shrink-0 items-center pt-4'>
			<DesktopFolder icon={RiFolderUserFill} label='ABOUT' href='/about' />
			<DesktopFolder icon={RiFolderInfoFill} label='EXPERIENCE' href='/experience' />
			<DesktopFolder icon={RiFolderChartFill} label='PROJECTS' href='/projects' />
		</nav>
	);
};
