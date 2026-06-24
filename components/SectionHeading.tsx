/**
 * Sticky section label on mobile; visually hidden (but still in the a11y
 * tree) on desktop, where the sidebar nav provides context instead.
 */
export function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
			<h2 className="eyebrow text-ink">{children}</h2>
		</div>
	);
}
