'use client';
import { usePathname } from 'next/navigation';

const SECTION_MAP: Record<string, string> = {
	'/': '',
	'/about': 'ABOUT',
	'/experience': 'EXPERIENCE',
	'/projects': 'PROJECTS',
	'/contact': 'CONTACT',
};

export const AddressBar = () => {
	const pathname = usePathname();
	const section = SECTION_MAP[pathname] ?? '';
	const displayPath = `C:\\PORTFOLIO\\${section ? section + '\\' : ''}`;

	return (
		<div className='flex items-center gap-2 shrink-0 mb-3 font-mono'>
			<span
				className='hidden sm:block text-xs uppercase tracking-widest shrink-0 opacity-70'
				style={{ color: 'var(--t-titlebar-text)' }}
			>
				Address:
			</span>
			<div
				className='flex items-center gap-2 border-2 px-3 py-0.5 text-sm'
				style={{
					background: 'var(--t-surface)',
					borderColor: 'var(--t-border)',
					color: 'var(--t-ink)',
					minWidth: '220px',
					maxWidth: '340px',
				}}
			>
				<span className='font-mono tracking-wide'>{displayPath}</span>
				<span className='animate-pulse ml-1' style={{ color: 'var(--t-accent-blue)' }}>
					█
				</span>
			</div>
			<div className='flex-1 hidden sm:block h-px' style={{ background: 'var(--t-border)', opacity: 0.25 }} />
		</div>
	);
};
