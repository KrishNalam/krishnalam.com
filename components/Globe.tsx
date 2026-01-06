'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

interface GlobeProps {
	className?: string;
	markers?: { location: [number, number]; size: number }[];
}

export const Globe = ({
	className = '',
	// Default to Toronto
	markers = [{ location: [43.6532, -79.3832], size: 0.1 }],
}: GlobeProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pointerInteracting = useRef<number | null>(null);
	const pointerInteractionMovement = useRef(0);

	// Sensitivity: Lower = slower drag.
	// 0.005 is very slow/heavy. 0.01 is standardish.
	const DRAG_SENSITIVITY = 0.01;

	useEffect(() => {
		let phi = 0;
		let width = 0;

		const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
		window.addEventListener('resize', onResize);
		onResize();

		if (!canvasRef.current) return;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2.28,
			width: width,
			height: width,
			phi: 0,
			theta: 0.25,
			dark: 0, // 0 = Light Mode (best for white backgrounds)
			diffuse: 1.2, // Higher = brighter
			mapSamples: 16000, // Number of dots
			mapBrightness: 6,
			baseColor: [255, 255, 255],
			markerColor: [239, 68, 68],
			glowColor: [0, 0, 0],
			// -----------------

			markers: markers,
			onRender: (state) => {
				// Auto-rotation
				if (!pointerInteracting.current) {
					phi += 0.005;
				}
				// Interactive Rotation
				state.phi = phi + pointerInteractionMovement.current;
			},
		});

		return () => {
			globe.destroy();
			window.removeEventListener('resize', onResize);
		};
	}, [markers]);

	return (
		<div className={`w-full h-full flex items-center justify-center ${className}`}>
			<canvas
				ref={canvasRef}
				style={{
					width: '100%',
					height: '100%',
					contain: 'layout paint size',
					opacity: 1,
				}}
				className='cursor-grab active:cursor-grabbing'
				onPointerDown={(e) => {
					pointerInteracting.current = e.clientX - pointerInteractionMovement.current / DRAG_SENSITIVITY;
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
						const delta = e.clientX - pointerInteracting.current;
						pointerInteractionMovement.current = delta * DRAG_SENSITIVITY;
					}
				}}
			/>
		</div>
	);
};
