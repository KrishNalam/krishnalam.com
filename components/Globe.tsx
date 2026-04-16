'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

interface GlobeProps {
	className?: string;
	markers?: { location: [number, number]; size: number }[];
}

export const Globe = ({
	className = '',
	markers = [{ location: [43.6532, -79.3832], size: 0.12 }],
}: GlobeProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pointerInteracting = useRef<number | null>(null);
	const pointerInteractionMovement = useRef(0);
	const DRAG_SENSITIVITY = 0.01;

	useEffect(() => {
		let phi = 0;
		let width = 0;

		const onResize = () => {
			if (canvasRef.current) width = canvasRef.current.offsetWidth;
		};

		// ResizeObserver tracks the canvas parent — responsive to container, not viewport
		const ro = new ResizeObserver(onResize);
		if (canvasRef.current?.parentElement) ro.observe(canvasRef.current.parentElement);
		onResize();

		if (!canvasRef.current) return;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: 0,
			theta: 0.3,
			dark: 1,
			diffuse: 1.8,
			mapSamples: 16000,
			mapBrightness: 4.5,
			baseColor: [0.05, 0.14, 0.32],
			markerColor: [1, 0.6, 0.1],
			glowColor: [0.2, 0.5, 1.0],
			markers,
			onRender: (state) => {
				if (!pointerInteracting.current) phi += 0.004;
				state.phi = phi + pointerInteractionMovement.current;
				state.width = width * 2;
				state.height = width * 2;
			},
		});

		return () => {
			globe.destroy();
			ro.disconnect();
		};
	}, [markers]);

	return (
		<div className={`w-full h-full flex items-center justify-center ${className}`}>
			<canvas
				ref={canvasRef}
				style={{ aspectRatio: '1 / 1', width: '100%', contain: 'layout paint size' }}
				className='cursor-grab active:cursor-grabbing'
				onPointerDown={(e) => {
					pointerInteracting.current =
						e.clientX - pointerInteractionMovement.current / DRAG_SENSITIVITY;
					canvasRef.current!.style.cursor = 'grabbing';
				}}
				onPointerUp={() => {
					pointerInteracting.current = null;
					canvasRef.current!.style.cursor = 'grab';
				}}
				onPointerOut={() => {
					pointerInteracting.current = null;
					canvasRef.current!.style.cursor = 'grab';
				}}
				onMouseMove={(e) => {
					if (pointerInteracting.current !== null) {
						pointerInteractionMovement.current =
							(e.clientX - pointerInteracting.current) * DRAG_SENSITIVITY;
					}
				}}
			/>
		</div>
	);
};
