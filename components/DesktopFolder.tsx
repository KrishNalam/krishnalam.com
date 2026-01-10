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
				className={`flex flex-col items-center gap-2 cursor-pointer w-32 p-2 pb-0 rounded-lg transition-colors border-2 border-transparent
        ${isActive ? 'bg-off-white border-black shadow-opaque' : 'hover:bg-white/10'}`}
			>
				<Icon size={76} className='transition-transform drop-shadow-opaque fill-retro-yellow' />
				<span
					className={`text-xl px-2 font-bold tracking-wide text-center select-none
          ${isActive ? 'text-black' : 'text-white'}
        `}
				>
					{label}
				</span>
			</div>
		</Link>
	);
};
