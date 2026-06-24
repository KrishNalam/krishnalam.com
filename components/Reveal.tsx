'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	/** Stagger delay in seconds when used among siblings. */
	delay?: number;
	as?: 'div' | 'li' | 'section' | 'span';
};

/** Fade + rise on scroll into view. Respects reduced-motion. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
	const reduce = useReducedMotion();

	const variants: Variants = {
		hidden: { opacity: 0, y: reduce ? 0 : 24 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
		},
	};

	const MotionTag = motion[as];

	return (
		<MotionTag
			className={className}
			variants={variants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: '0px 0px -12% 0px' }}
		>
			{children}
		</MotionTag>
	);
}
