import type { IconType } from 'react-icons';
import { FiGithub, FiLinkedin, FiFileText, FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

/* ─────────────────────────────────────────────────────────────
   Single source of truth for all site content.
   Edit here — every section reads from these exports.
   ───────────────────────────────────────────────────────────── */

export const PERSONAL = {
	name: 'Krish Nalam',
	monogram: 'KN',
	role: 'Software & ML Engineer',
	tagline: 'I build systems that quietly just work — from RAG pipelines and CI/CD to ETL moving 30GB+ a week.',
	location: 'Toronto, ON',
	email: 'dev.nalamkrish@gmail.com',
	headshot: '/Headshot.jpeg',
	availability: 'Currently ML Engineer Intern @ RBC Borealis',
} as const;

// Destinations for the between-section CTAs. The résumé PDF lives in this repo (public/).
export const LINKS = {
	resume: '/Krish_Nalam_Resume.pdf',
	archive: '/archive',
	experience: '/experience',
} as const;

export type Social = {
	name: string;
	icon: IconType;
	url: string;
	handle: string;
};

export const SOCIALS: Social[] = [
	{ name: 'GitHub', icon: FiGithub, url: 'https://github.com/KrishNalam', handle: '@KrishNalam' },
	{ name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/KrishNalam', handle: '/in/KrishNalam' },
	{ name: 'X', icon: FaXTwitter, url: 'https://x.com/StayKool18', handle: '@StayKool18' },
	{ name: 'Resume', icon: FiFileText, url: LINKS.resume, handle: 'PDF ↗' },
	{ name: 'Email', icon: FiMail, url: `mailto:${PERSONAL.email}`, handle: PERSONAL.email },
];

export type Experience = {
	role: string;
	company: string;
	/** Company homepage. */
	url?: string;
	location: string;
	start: string;
	end: string;
	bullets: string[];
	stack: string[];
	/** Full-colour mark, shown on a white tile. Falls back to a monogram. */
	logo?: string;
};

export const EXPERIENCES: Experience[] = [
	{
		role: 'Machine Learning Engineer Intern',
		company: 'RBC Borealis',
		url: 'https://rbcborealis.com',
		location: 'Toronto, ON',
		start: 'Sep 2026',
		end: 'Present',
		bullets: [],
		stack: ['Python', 'RAG', 'FastAPI', 'Vector Search', 'Docker', 'Kubernetes'],
		logo: '/rbc-borealis.png',
	},
	{
		role: 'Software Developer',
		company: 'aUToronto',
		url: 'https://autodrive.utoronto.ca',
		location: 'Toronto, ON',
		start: 'Sep 2026',
		end: 'Present',
		bullets: [],
		stack: ['Python', 'C++', 'Linux'],
		logo: '/autoronto.png',
	},
	{
		role: 'Software Engineer Intern',
		company: 'RBC',
		url: 'https://www.rbc.com',
		location: 'Toronto, ON',
		start: 'May 2026',
		end: 'Aug 2026',
		bullets: [
			'Built an end-to-end CI/CD pipeline on Red Hat Ansible deploying an auth service to Windows Server across 4 environments, cutting deploy time 85% and eliminating 30+ manual steps.',
			'Automated the TLS certificate lifecycle against an OAuth2 PKI CA, cutting provisioning from 2 days to 5 minutes using in-memory PKCS12 bundles and HashiCorp Vault so no key touches disk.',
		],
		stack: ['Ansible', 'Python', 'HashiCorp Vault', 'OAuth2', 'CI/CD'],
		logo: '/rbc.svg',
	},
	{
		role: 'Software Developer Intern',
		company: 'RBC',
		url: 'https://www.rbc.com',
		location: 'Toronto, ON',
		start: 'May 2025',
		end: 'Aug 2025',
		bullets: [
			'Engineered a Java/Spring Boot ETL service consolidating HSBC data post-merger, reformatting 30GB+ of weekly data for 12+ mainframe jobs and migrating SOAP endpoints to REST.',
			'Wrote PostgreSQL stored procedures archiving transaction history (database size down 15%) and modernized legacy RBC Express code to ES6+, contributing $100K in annual savings.',
		],
		stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST', 'ES6'],
		logo: '/rbc.svg',
	},
	{
		role: 'Full-Stack Developer (Contract)',
		company: 'Unicomm — Fintech Startup',
		location: 'Toronto, ON',
		start: 'Mar 2025',
		end: 'Jun 2025',
		bullets: [
			'Shipped Dockerized Node.js microservices on AWS EC2 behind API Gateway for a social platform connecting investors and startups, released through a Jenkins CI/CD pipeline.',
			'Moved the client from React to React Native, cutting re-renders 60% with Redux and client-side caching.',
		],
		stack: ['React Native', 'Redux', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
		logo: '/unicomm.svg',
	},
	{
		role: 'Back-End Developer Intern',
		company: 'RBC',
		url: 'https://www.rbc.com',
		location: 'Toronto, ON',
		start: 'Jul 2024',
		end: 'Aug 2024',
		bullets: [
			'Benchmarked SARIMA against an LSTM (TensorFlow) on RMSE for hourly login-traffic forecasting.',
			'Operationalized the winning model in production to automate capacity planning, cutting manual workload 30%.',
		],
		stack: ['Python', 'TensorFlow', 'SARIMA', 'Jupyter'],
		logo: '/rbc.svg',
	},
	{
		role: 'Software Engineer Intern',
		company: 'RBC',
		url: 'https://www.rbc.com',
		location: 'Toronto, ON',
		start: 'Jul 2023',
		end: 'Aug 2023',
		bullets: [
			'Boosted test coverage to 95% for RBC’s Visa Rewards by automating key tests with Docker, Java & ReadyAPI.',
			'Improved API test reliability 25% with a WireMock & Postman mock-API suite, reducing UAT and production issues.',
		],
		stack: ['Java', 'Docker', 'ReadyAPI', 'WireMock', 'Postman'],
		logo: '/rbc.svg',
	},
];

export type Project = {
	title: string;
	description: string;
	bullets: string[];
	stack: string[];
	/** Omit for projects without a public link yet. */
	url?: string;
	award?: string;
	comingSoon?: boolean;
};

export const PROJECTS: Project[] = [
	{
		title: 'Project Tantalus',
		description: 'Coming soon.',
		bullets: [],
		stack: [],
		comingSoon: true,
	},
	{
		title: 'Lens',
		description: 'An agentic research assistant that plans multi-step research and cites verified sources.',
		bullets: [
			'LangGraph agent that plans multi-step research, retrieves from uploaded documents and web search via Chroma, and drafts a cited report.',
			'Fine-tuned DeBERTa-v3 on FEVER to flag unsupported claims, serving per-claim confidence via FastAPI and a streaming Next.js UI, with retrieval scored by RAGAS.',
		],
		stack: ['LangGraph', 'FastAPI', 'Next.js', 'Chroma', 'DeBERTa-v3', 'RAGAS'],
	},
	{
		title: 'UofT Webring',
		description: 'A live community platform showcasing UofT students’ portfolios in one connected network.',
		bullets: [
			'Locked member data behind Postgres row-level security with a column allowlist keeping emails out of public payloads; verified site ownership via an HMAC-SHA256 DNS TXT check.',
			'Moved avatar processing into the browser (crop, 512px, AVIF) and uploaded direct to S3 via presigned URLs with immutable CloudFront caching, cutting image payload 80%.',
		],
		stack: ['Next.js', 'TypeScript', 'Supabase', 'AWS S3', 'CloudFront'],
		url: 'https://www.uoftwebring.com',
	},
	{
		title: 'FITRIS',
		description: 'An interactive fitness game that maps real exercises to Tetris controls via computer vision.',
		bullets: [
			'Mapped 5 exercises to Tetris controls in real time, classifying a 33-point MediaPipe skeleton with a state machine over 12+ joint angles that counts only full reps.',
			'Architected a 3-process pipeline (OpenCV, Flask, React) replacing file polling with Server-Sent Events and a monotonic sequence counter for exactly-once delivery.',
		],
		stack: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'React'],
		url: 'https://github.com/KrishNalam/Project-Fitris',
		award: 'Winner @ JamHacks 8',
	},
	{
		title: 'DevDuels',
		description: 'A web game that encourages effective code reviews through competition and real-time AI feedback.',
		bullets: [
			'MongoDB + GitHub API back end for auth, storage, and user integration.',
			'Context-aware feedback via embeddings & RAG with LangChain, semantically analyzing code.',
		],
		stack: ['Next.js', 'MongoDB', 'LangChain', 'Tailwind'],
		url: 'https://github.com/m-shao/hack-the-valley',
		award: 'Winner @ HackTheValley',
	},
];

export type LogEntry = {
	/** Display date, e.g. 'Jun 20, 2026'. Keep entries newest-first. */
	date: string;
	title: string;
	body: string;
	tags?: string[];
};

/* ─── LOGBOOK ───────────────────────────────────────────────
   A running log of what I'm learning. To add an entry, copy a
   block and drop it at the TOP of the array (newest first).
   ─────────────────────────────────────────────────────────── */
export const LOGBOOK: LogEntry[] = [];

export const SKILLS: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['Python', 'TypeScript', 'Java', 'C/C++', 'Rust', 'SQL', 'Bash'] },
	{ group: 'ML & AI', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangGraph', 'RAG', 'OpenCV'] },
	{ group: 'Web', items: ['React', 'Next.js', 'React Native', 'Node.js', 'FastAPI', 'Spring Boot'] },
	{ group: 'Infra', items: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Ansible', 'GitHub Actions', 'PostgreSQL'] },
];

export const EDUCATION = {
	school: 'University of Toronto',
	degree: 'Honours B.Sc. Computer Science (Co-op)',
	period: 'expected April 2029',
} as const;

export const ABOUT = {
	body: [
		'I’m a Computer Science student at the University of Toronto who likes turning messy, large-scale problems into systems that quietly just work.',
		'Across six internships at RBC, RBC Borealis, and a fintech startup, I’ve shipped RAG pipelines, CI/CD and certificate automation, ETL services, and ML forecasting models. I’m also on aUToronto, U of T’s self-driving car team. On weekends I’m usually at a hackathon, debugging life’s challenges with a dash of humour and caffeine.',
	],
} as const;

export type WipProject = {
	name: string;
	description: string;
	url: string;
};

export const WORKS_IN_PROGRESS: WipProject[] = [
	{ name: 'PredicTurf', description: 'ML sports prediction engine', url: 'https://github.com/KrishNalam' },
	{ name: 'Project Delphi', description: 'AI-powered analytics platform', url: 'https://github.com/KrishNalam/Project-Delphi' },
];

// UofT Webring — this site's slot in the ring (https://uoftwebring.com)
export const WEBRING = {
	id: 3,
	home: 'https://uoftwebring.com',
	logo: 'https://uoftwebring.com/ring_logo.svg',
	prev: 'https://uoftwebring.com/redirect?nav=prev&id=3',
	next: 'https://uoftwebring.com/redirect?nav=next&id=3',
} as const;


