import type { IconType } from 'react-icons';
import { FiGithub, FiLinkedin, FiFileText, FiMail } from 'react-icons/fi';
import { SiDevpost } from 'react-icons/si';

/* ─────────────────────────────────────────────────────────────
   Single source of truth for all site content.
   Edit here — every section reads from these exports.
   ───────────────────────────────────────────────────────────── */

export const PERSONAL = {
	name: 'Krish Nalam',
	monogram: 'KN',
	role: 'Software Developer',
	tagline: 'I build scalable systems — from ETL pipelines moving 30GB+ to serverless infra handling 10k req/min.',
	motto: '☕ Coffee · 💻 Code · 🧠 Concentration',
	location: 'Toronto, ON',
	email: 'nalamkrish1@gmail.com',
	headshot: '/Headshot.jpeg',
	availability: 'Open to SWE internships & new-grad roles',
} as const;

// Destinations for the between-section CTAs.
export const LINKS = {
	resume: 'https://drive.google.com/file/d/1spq1R7LHjfKBr8BawODr0yznoVeBqLzR/view?usp=sharing',
	archive: '/archive',
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
	{ name: 'Devpost', icon: SiDevpost, url: 'https://devpost.com/KrishNalam', handle: '@KrishNalam' },
	{
		name: 'Resume',
		icon: FiFileText,
		url: 'https://drive.google.com/file/d/1spq1R7LHjfKBr8BawODr0yznoVeBqLzR/view?usp=sharing',
		handle: 'PDF ↗',
	},
	{ name: 'Email', icon: FiMail, url: 'mailto:nalamkrish1@gmail.com', handle: PERSONAL.email },
];

export type Experience = {
	role: string;
	company: string;
	location: string;
	start: string;
	end: string;
	bullets: string[];
	stack: string[];
	logo?: string;
};

export const EXPERIENCES: Experience[] = [
	{
		role: 'Software Developer',
		company: 'RBC — Royal Bank of Canada',
		location: 'Toronto, ON',
		start: 'May 2025',
		end: 'Aug 2025',
		bullets: [
			'Built a Java/Maven ETL pipeline modernizing deprecated workflows, automating weekly 30GB+ transit-data processing into flat files for 12+ mainframe JCL jobs, replacing SOAP with REST APIs.',
			'Implemented automated PostgreSQL stored procedures to archive historical transactional data, reducing production database size by 15% and improving query performance.',
			'Cut $100K in maintenance costs by migrating RBC Express systems to ES6, ensuring full cross-browser support.',
		],
		stack: ['Java', 'Maven', 'PostgreSQL', 'REST', 'ES6'],
		logo: '/rbc-bw.svg',
	},
	{
		role: 'Full-Stack Developer',
		company: 'Next Unicorn — Fintech Startup',
		location: 'Toronto, ON',
		start: 'Mar 2025',
		end: 'Jun 2025',
		bullets: [
			'Reduced re-render frequency by 60% via Redux for efficient global state management and caching in React Native.',
			'Built Dockerized Node.js microservices on AWS Lambda & API Gateway integrating MongoDB & Supabase to support up to 10k req/min; established a Jenkins CI/CD pipeline.',
			'Cut storage costs 30% with a media pipeline using S3 lifecycle policies, Lambda triggers for resize/compression, and CloudFront edge caching.',
		],
		stack: ['React Native', 'Redux', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
		logo: '/next-unicorn-bw.svg',
	},
	{
		role: 'Back-End Developer',
		company: 'RBC — Royal Bank of Canada',
		location: 'Toronto, ON',
		start: 'Jul 2024',
		end: 'Aug 2024',
		bullets: [
			'Benchmarked SARIMA against TensorFlow models in Jupyter using RMSE to optimize login-traffic forecast accuracy.',
			'Operationalized the winning model to automate resource allocation, cutting workload 30% and saving $360K annually.',
		],
		stack: ['Python', 'TensorFlow', 'SARIMA', 'Jupyter'],
		logo: '/rbc-bw.svg',
	},
	{
		role: 'Software Engineer',
		company: 'RBC — Royal Bank of Canada',
		location: 'Toronto, ON',
		start: 'Jul 2023',
		end: 'Aug 2023',
		bullets: [
			'Boosted test coverage to 95% for RBC’s Visa Rewards by automating key tests with Docker, Java & ReadyAPI.',
			'Improved API test reliability 25% with a WireMock & Postman mock-API suite, reducing UAT and production issues.',
		],
		stack: ['Java', 'Docker', 'ReadyAPI', 'WireMock', 'Postman'],
		logo: '/rbc-bw.svg',
	},
];

export type Project = {
	title: string;
	tagline: string;
	description: string;
	bullets: string[];
	stack: string[];
	url: string;
	image: string;
	award?: string;
};

export const PROJECTS: Project[] = [
	{
		title: 'UofT Webring',
		tagline: 'Connected network of UofT student portfolios',
		description: 'A platform that showcases the portfolios of UofT students in one connected network.',
		bullets: [
			'Serverless media pipeline using S3 presigned URLs for secure uploads, CloudFront edge caching, and Supabase metadata; automated image resizing with Lambda triggers.',
			'Scalable serverless mass-mailing workflow with AWS SES & Lambda — 10K+ emails per user with auto-scaling and 99% delivery success.',
		],
		stack: ['Next.js', 'Supabase', 'AWS', 'CloudFront'],
		url: 'https://www.uoftwebring.com',
		image: '/UofTWebring.png',
	},
	{
		title: 'FITRIS',
		tagline: 'Play Tetris with real-world exercises',
		description: 'An interactive fitness game that maps real exercises to Tetris controls via computer vision.',
		bullets: [
			'React front end with a Flask + NumPy back end for movement detection and precise body-joint tracking.',
			'MediaPipe & OpenCV to classify 5+ exercises with 90% detection accuracy.',
		],
		stack: ['React', 'OpenCV', 'PyTorch', 'MediaPipe', 'Flask'],
		url: 'https://github.com/yuvibirdi/fitris',
		image: '/Fitris.png',
		award: 'Winner @ JamHacks',
	},
	{
		title: 'DevDuels',
		tagline: 'Competitive code review with real-time AI feedback',
		description: 'A web game that encourages effective code reviews through competition and real-time AI feedback.',
		bullets: [
			'Responsive Next.js + Tailwind front end using lazy loading and code splitting for efficient rendering.',
			'MongoDB + GitHub API back end for auth, storage, and user integration.',
			'Context-aware feedback via embeddings & RAG with LangChain, semantically analyzing code.',
		],
		stack: ['Next.js', 'MongoDB', 'LangChain', 'Tailwind'],
		url: 'https://github.com/m-shao/hack-the-valley',
		image: '/DevDuels.png',
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
export const LOGBOOK: LogEntry[] = [
	{
		date: 'Jun 20, 2026',
		title: 'Taming React re-renders',
		body: 'Traded prop-drilling for memoized Redux selectors and React.memo on hot list rows, which cut wasted renders sharply. Lesson: profile first — useMemo everywhere is a smell, not a fix.',
		tags: ['React', 'Redux', 'Performance'],
	},
	{
		date: 'Jun 8, 2026',
		title: 'Killing Lambda cold starts',
		body: 'Provisioned concurrency plus a leaner bundle (lazy-loading the AWS SDK v3 clients) dropped p99 cold starts from ~1.2s to under 300ms.',
		tags: ['AWS', 'Lambda', 'Serverless'],
	},
	{
		date: 'May 27, 2026',
		title: 'Window functions > N+1 queries',
		body: 'Replaced a pile of running-total queries with one pass using SUM() OVER (PARTITION BY …). One query, far less app-side glue, and the planner does the heavy lifting.',
		tags: ['PostgreSQL', 'SQL'],
	},
];

export const SKILLS: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C'] },
	{ group: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Redux', 'Tailwind CSS'] },
	{ group: 'Backend', items: ['Node.js', 'Flask', 'REST', 'PostgreSQL', 'MongoDB', 'Supabase'] },
	{ group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Jenkins', 'Lambda', 'CloudFront', 'CI/CD'] },
	{ group: 'ML & Data', items: ['TensorFlow', 'PyTorch', 'OpenCV', 'MediaPipe', 'LangChain'] },
];

export const EDUCATION = {
	school: 'University of Toronto',
	degree: 'B.Sc. Computer Science',
	detail: 'Specialist · Co-op',
	period: '2022 — 2026',
} as const;

export const ABOUT = {
	heading: 'About',
	greeting: 'Hello again :)',
	body: [
		'I’m a Computer Science student at the University of Toronto who likes turning messy, large-scale problems into systems that quietly just work.',
		'Across four internships at RBC and a fintech startup, I’ve shipped ETL pipelines, serverless infrastructure, and ML forecasting models. On weekends I’m a tech geek debugging life’s challenges with a dash of humour and caffeine — usually at a hackathon.',
	],
} as const;

export type WipProject = {
	name: string;
	description: string;
	progress: number;
	url: string;
};

export const WORKS_IN_PROGRESS: WipProject[] = [
	{ name: 'PredicTurf', description: 'ML sports prediction engine', progress: 80, url: 'https://github.com/KrishNalam' },
	{ name: 'Project Delphi', description: 'AI-powered analytics platform', progress: 65, url: 'https://github.com/KrishNalam' },
];

export const HOBBIES: { emoji: string; name: string }[] = [
	{ emoji: '🍿', name: 'Cinema nerd' },
	{ emoji: '🖨️', name: '3D printing' },
	{ emoji: '🚜', name: 'Gardening' },
	{ emoji: '🎮', name: 'Gaming' },
];

// UofT Webring — this site's slot in the ring (https://uoftwebring.com)
export const WEBRING = {
	id: 3,
	home: 'https://uoftwebring.com',
	logo: 'https://uoftwebring.com/ring_logo.svg',
	prev: 'https://uoftwebring.com/redirect?nav=prev&id=3',
	next: 'https://uoftwebring.com/redirect?nav=next&id=3',
} as const;

export const STATS: { value: string; label: string }[] = [
	{ value: '4', label: 'Internships' },
	{ value: '2', label: 'Hackathon wins' },
	{ value: '10k', label: 'Req/min served' },
	{ value: '$560K', label: 'Costs saved' },
];

export const NAV_SECTIONS = [
	{ id: 'about', label: 'About', index: '01' },
	{ id: 'experience', label: 'Experience', index: '02' },
	{ id: 'projects', label: 'Projects', index: '03' },
	{ id: 'contact', label: 'Contact', index: '04' },
] as const;
