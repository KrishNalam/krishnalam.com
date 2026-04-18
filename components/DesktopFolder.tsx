'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiFolderOpenFill } from 'react-icons/ri';

export const DesktopFolder = ({
	label,
	href,
	icon: Icon,
}: {
	label: string;
	href: string;
	icon: React.ComponentType<{ size: number; className: string }>;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	const DisplayIcon = isActive ? RiFolderOpenFill : Icon;

	return (
		<Link href={href}>
			<div
				className={`flex flex-col items-center gap-1 cursor-pointer w-14 sm:w-20 p-1 sm:p-2 select-none transition-colors ${
					isActive
						? 'border-2 border-dashed border-white/70'
						: 'border-2 border-transparent hover:bg-white/10'
				}`}
				style={isActive ? { background: 'var(--t-titlebar)' } : undefined}
			>
				<div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center'>
					<DisplayIcon size={48} className='w-full h-full drop-shadow-opaque fill-retro-yellow' />
				</div>
				<span className='text-xs sm:text-sm font-bold tracking-wide text-center leading-tight text-white'>
					{label}
				</span>
			</div>
		</Link>
	);
};
