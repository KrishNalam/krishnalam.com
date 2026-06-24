import { ThemeProvider } from '@/components/ThemeProvider';
import { Sidebar } from '@/components/Sidebar';
import { CtaButton } from '@/components/CtaButton';
import { TechMarquee } from '@/components/TechMarquee';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Logbook } from '@/components/sections/Logbook';
import { Footer } from '@/components/Footer';
import { LINKS } from '@/data/config';

export default function Home() {
	return (
		<ThemeProvider>
			<a
				href="#content"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-accent-ink"
			>
				Skip to content
			</a>
			<div className="grain mx-auto min-h-screen max-w-6xl px-6 py-12 font-sans md:px-12 md:py-16 lg:px-20 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-12">
					<Sidebar />
					<main id="content" className="pt-20 lg:w-[55%] lg:py-24">
						<About />
						<TechMarquee />
						<Experience />
						<CtaButton href={LINKS.resume}>View Full Résumé</CtaButton>
						<Projects />
						<CtaButton href={LINKS.archive}>View Full Project Archive</CtaButton>
						<Logbook />
						<Footer />
					</main>
				</div>
			</div>
		</ThemeProvider>
	);
}
