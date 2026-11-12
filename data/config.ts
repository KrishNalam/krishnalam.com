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
		bullets: [
			'Cut OOM-failed ingestion runs from 30% to 0 across 75K+ documents on Knowledge AI, an internal RAG platform serving 10K+ advisors, via worker recycling and cgroup memory caps.',
			'Reduced unsupported citations from 25% to 5% across 300+ EN/FR eval questions with an NLI verifier that drops claim–citation links the passage doesn’t back, scored by an independent LLM-as-NLI audit.',
		],
		stack: ['Python', 'RAG', 'FastAPI', 'PGVector', 'OpenShift', 'W&B'],
		logo: '/rbc-borealis.png',
	},
	{
		role: 'ML Infrastructure Developer, Training Infrastructure',
		company: 'aUToronto',
		url: 'https://autodrive.utoronto.ca',
		location: 'Toronto, ON',
		start: 'Sep 2026',
		end: 'Present',
		bullets: [
			'Cut PointPillars 3D LiDAR detection latency on a Tenstorrent Wormhole accelerator 2.8× (280 → 102 ms/frame, 1.9× faster than CPU) by moving the neck and head on-chip and padding pillar counts to kill 2.5 s kernel recompiles, holding 0.9996 PCC against the PyTorch reference.',
			'Recovered detections on 108/140 frames of the team’s own 108K-point Ouster drive logs by tracing empty output to saturated LiDAR intensity (78% of points clipped) and rescaling it.',
		],
		stack: ['Python', 'PyTorch', 'Tenstorrent TT-NN', 'LiDAR', 'ROS 2'],
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
			'Built uptime monitoring for 54 member sites on a scheduled GitHub Actions job, logging HTTP status and latency to PostgreSQL (90-day history); sites down twice in a row drop out of the ring and rejoin on recovery.',
			'Shipped a 4.0KB, dependency-free embed widget (Shadow DOM, no innerHTML) that cuts joining to a single script tag, with server-side detection so installs verify themselves.',
			'Locked member data behind PostgreSQL row-level security with a column allowlist keeping emails out of public payloads; verified site ownership via an HMAC-SHA256 DNS TXT check.',
		],
		stack: ['Next.js', 'TypeScript', 'Supabase', 'AWS S3', 'CloudFront'],
		url: 'https://www.uoftwebring.com',
	},
	{
		title: 'FITRIS',
		description: 'Tetris you play with your body: webcam pose tracking turns squats, jumping jacks and arm raises into game controls.',
		bullets: [
			'Rebuilt the hackathon version to run fully in the browser: MediaPipe pose inference on WebAssembly/WebGL, with no server, so video never leaves the device.',
			'Per-exercise state machines over 12 joint angles (computed in pixel space) count only full reps; tested with Vitest and deployed by a GitHub Actions pipeline.',
		],
		stack: ['React', 'MediaPipe', 'WebAssembly', 'WebGL', 'Vite'],
		url: 'https://github.com/KrishNalam/Project-FITRIS',
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
	{ group: 'Languages', items: ['Python', 'TypeScript', 'Java', 'C/C++', 'SQL', 'Bash'] },
	{ group: 'ML & AI', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangGraph', 'RAG', 'OpenCV', 'Tenstorrent TT-NN'] },
	{ group: 'Web', items: ['React', 'Next.js', 'React Native', 'Node.js', 'FastAPI', 'Spring Boot'] },
	{ group: 'Infra', items: ['Linux', 'Docker', 'ROS 2', 'Kubernetes', 'AWS', 'Ansible', 'GitHub Actions', 'PostgreSQL'] },
];

export const EDUCATION = {
	school: 'University of Toronto',
	degree: 'Honours Bachelor of Computer Science (Co-op)',
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


