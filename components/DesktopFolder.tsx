'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

	return (
		<Link href={href}>
			<div
				className={`flex flex-col items-center gap-1 sm:gap-2 cursor-pointer w-16 sm:w-28 p-1 sm:p-2 sm:pb-0 rounded-lg transition-colors border-2 border-transparent
					${isActive ? 'bg-off-white border-[var(--t-border)] shadow-opaque' : 'hover:bg-white/10'}`}
			>
				{/* Icon wrapper — CSS controls the responsive size */}
				<div className='w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center'>
					<Icon
						size={64}
						className='w-full h-full transition-transform drop-shadow-opaque fill-retro-yellow'
					/>
				</div>
				<span
					className={`text-sm sm:text-lg font-bold tracking-wide text-center select-none
						${isActive ? 'text-dark-gray' : 'text-white'}`}
				>
					{label}
				</span>
			</div>
		</Link>
	);
};
