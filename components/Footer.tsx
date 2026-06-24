export function Footer() {
	return (
		<footer className="max-w-md pb-16 text-sm text-ink-3 lg:pb-0">
			<p className="leading-relaxed">
				Designed &amp; built by Krish Nalam. Coded in{' '}
				<a
					href="https://nextjs.org"
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-ink-2 transition-colors hover:text-accent"
				>
					Next.js
				</a>{' '}
				and styled with{' '}
				<a
					href="https://tailwindcss.com"
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-ink-2 transition-colors hover:text-accent"
				>
					Tailwind CSS
				</a>
				.
			</p>
		</footer>
	);
}
