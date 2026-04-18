'use client';

import { RiFolderUserFill, RiFolderChartFill, RiFolderInfoFill, RiFolderSharedFill } from 'react-icons/ri';
import { DesktopFolder } from './DesktopFolder';

export const DesktopNav = () => {
	return (
		<nav className='flex flex-col shrink-0'>
			{/* Explorer panel header — desktop only */}
			<div
				className='hidden sm:flex items-center gap-1.5 px-2 py-1 mb-2 border-b-2 font-mono text-xs uppercase tracking-widest shrink-0'
				style={{
					background: 'linear-gradient(90deg, var(--t-titlebar) 0%, var(--t-titlebar-end) 100%)',
					borderColor: 'var(--t-border)',
					color: 'var(--t-titlebar-text)',
				}}
			>
				<span>📁</span>
				<span>Explore</span>
			</div>

			{/* Folder icons */}
			<div className='flex flex-row sm:flex-col gap-1 sm:gap-2 items-center shrink-0'>
				<DesktopFolder icon={RiFolderUserFill} label='ABOUT' href='/about' />
				<DesktopFolder icon={RiFolderInfoFill} label='XP' href='/experience' />
				<DesktopFolder icon={RiFolderChartFill} label='WORK' href='/projects' />
				<DesktopFolder icon={RiFolderSharedFill} label='CONTACT' href='/contact' />
			</div>
		</nav>
	);
};
