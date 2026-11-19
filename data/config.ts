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
	logbook: '/logbook',
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
		title: 'Legacy Siege',
		description: 'A self-healing swarm of AI agents that keeps a simulated bank’s legacy systems alive while an AI Red fleet attacks them. MongoDB Hackathon 1st place ($10K in prizes).',
		bullets: [
			'Built a self-healing LangGraph agent swarm that scales its workers to the incident and detects, diagnose and fix cascading failures across simulated legacy bank systems, checkpointed in MongoDB so killed agents resume mid-task without redoing steps.',
			'Gave agents memory: fixes are saved as playbooks and recalled with Atlas Vector Search, cutting repeat incidents from 3 diagnosis hops to 1 and recovery time 43% (35.7→20.2 s).',
			'Built an adversarial fleet of LLM attackers (agent SIGKILLs, lying ops, memory poisoning) run by a planner; the swarm recovered from every attack in our test suite, winning 1st place.',
		],
		stack: ['LangGraph', 'MongoDB Atlas', 'Vector Search', 'FastAPI'],
		url: 'https://github.com/KrishNalam/legacy-siege',
	},
	{
		title: 'UofT Webring',
		description: 'A live community platform showcasing UofT students’ portfolios in one connected network.',
		bullets: [
			'Built uptime monitoring for 34 member sites on a scheduled GitHub Actions job, logging HTTP status and latency to PostgreSQL (90-day history); caught 6 dead sites on its first run.',
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
			'Runs inference at 18 ms median (22 ms p95) on the WebGL GPU delegate with 24 ms capture-to-input latency, at the webcam’s full 20 fps.',
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

export type LogKind = 'project' | 'hackathon' | 'take' | 'til';

export const LOG_KIND_LABEL: Record<LogKind, string> = {
	project: 'Build',
	hackathon: 'Hackathon',
	take: 'Take',
	til: 'TIL',
};

export type LogEntry = {
	/** URL slug: /logbook/<slug>. Never change once published (posts link here). */
	slug: string;
	/** ISO date, e.g. '2026-11-15'. Entries are sorted newest-first automatically. */
	date: string;
	kind: LogKind;
	title: string;
	/** One or two sentences, shown in lists and as the share description. */
	summary: string;
	/** Full entry, one string per paragraph. A string starting with '## ' is a section heading. */
	body: string[];
	tags?: string[];
	/** Path under /public, e.g. '/logbook/legacy-siege/stage.jpg'. */
	image?: { src: string; alt: string };
	/** Extra images shown inside the body, each placed after paragraph `after` (0-based). */
	figures?: { src: string; alt: string; caption?: string; after: number }[];
	links?: { label: string; url: string }[];
	/** Where this entry was syndicated (POSSE). Fill in after posting. */
	posted?: { x?: string; linkedin?: string };
	/** Hidden on the production site until you remove it. Shown in `npm run dev`. */
	draft?: boolean;
};

/* ─── LOGBOOK ───────────────────────────────────────────────
   Builds, hackathons, takes and TILs. Publish here first, then
   post to X/LinkedIn linking back, and paste the post URLs into
   `posted`. Order doesn't matter: sorted by date on render.
   ─────────────────────────────────────────────────────────── */
export const LOGBOOK: LogEntry[] = [
	{
		slug: 'home-server-setup',
		date: '2026-11-19',
		kind: 'project',
		title: 'My home server is a 2017 laptop',
		summary: 'A 2017 laptop with its lid shut runs my demos, my dev environment and my coding agents. How I set it up with Ubuntu, Tailscale and T3 Code, and why an old laptop is all you need.',
		body: [
			'My "server" is a 2017 Dell Inspiron 13 laptop with its lid shut, sitting on my desk. It has a dual-core i5-7200U, 16 GB of RAM and a cheap 480 GB SSD. It\'s been running for days without a reboot, and it\'s the reason [Legacy Siege](/logbook/legacy-siege-mongodb-hackathon) was live on stage within a minute of us making the finals.',
			'This is how it\'s set up, what I run on it, and why I think almost every developer should have one, even if it\'s just an old laptop from a drawer.',
			'## Why bother?',
			'Your laptop sleeps when you close it, and the cloud bills you by the hour. A home server fills the gap between them. It\'s a machine that\'s always on, always reachable and entirely yours. Long jobs keep running overnight. Demos stay up. Coding agents keep working while I\'m in class, and I check on them from my phone.',
			'## The hardware',
			'Dell Inspiron 13 5378: Intel Core i5-7200U (2 cores, 4 threads), Intel HD 620 graphics, 16 GB of RAM and a Crucial BX500 480 GB SSD. By modern standards it\'s weak, and that\'s the point: for a server that mostly runs Node, Python, Docker and SSH sessions, it\'s plenty. The SSD matters a lot more than the CPU.',
			'A laptop also comes with two things a tower doesn\'t. The battery works as a built-in UPS that rides out short power cuts. The screen and keyboard are there for the day SSH breaks and you need to log in physically.',
			'## The setup',
			'1. Install Ubuntu Server 24.04 LTS. LTS means years of security updates without chasing upgrades. I boot straight into a terminal (no desktop), which saves RAM and power.',
			'2. Stop it sleeping when the lid closes. By default Ubuntu suspends a laptop when you shut it, which kills a server. A small override in /etc/systemd/logind.conf.d/ setting HandleLidSwitch=ignore (plus the ExternalPower and Docked variants) fixes it. This was the first thing that bit me.',
			'3. Install Tailscale. This is the part that makes everything work. Tailscale puts all my devices (this laptop, my tower, my phone) on one private network, each with a stable address, and opens no ports on my router. Nothing is exposed to the public internet, and there\'s no port forwarding or dynamic DNS to deal with. I can SSH in from anywhere as if I were on my home Wi-Fi. It also lets friends in: Anwar\'s machines are shared into the same network.',
			'4. Install SSH and Docker. SSH is how I get in. Docker runs anything I don\'t want installed system-wide.',
			'5. Install T3 Code, which turns the box from a server I maintain into a server I actually use.',
			'## T3 Code: the reason I use it every day',
			'T3 Code is a workspace for coding agents, and it runs on the server, inside my real projects. I open it from whatever device I have with me over Tailscale. The agents run on the server, so closing my laptop doesn\'t stop them. I can start a task at my desk, go to class, and check on it from my phone.',
			'A few things it does that I rely on. Threads run in parallel, and each can get its own git worktree, so several agents can work on separate branches without stepping on each other. It can preview a dev server running on the box, which is how I review this site before it ships. And it can hand work to different model providers depending on the task. Most of this logbook, including this post, was drafted, previewed and pushed from it.',
			'## The towers never left home',
			'At Agents in Context, MongoDB\'s hackathon in Toronto, Anwar and I brought monitors to the venue (we forgot our ethernet cables) but not our desktop towers. They stayed at home. Over Tailscale, the venue Wi-Fi was all we needed: we were coding on our own machines, with their full power, from across the city.',
			'Then, when we suddenly made the finals, Legacy Siege was still running on this server. There was nothing to set up or redeploy. I opened the link and we were on stage. That one minute is the best argument I have for owning a server.',
			'## Pros and cons',
			'| Pros | Cons |\n| **Always on:** demos, bots and agents keep running while you sleep. | **You are the IT department:** updates, dead SSDs and full disks are your problem. |\n| **Nearly free:** an old laptop plus a laptop\'s worth of power. | **Home-dependent:** a power cut or ISP outage takes it down. Not real production hosting. |\n| **Your data stays on hardware you own.** | Your family will ask why the closed laptop on your desk is warm, humming and "definitely not off". |\n| **Goes everywhere:** with Tailscale, any device on any Wi-Fi reaches your full environment. |  |\n| **More capable than it looks:** 16 GB of RAM and an SSD go a long way for Node, Python and Docker. |  |\n| **You learn a lot:** Linux, networking, SSH and systemd stop being abstract the first time something breaks. |  |',
			'Two cores won\'t train a model, so anything heavy goes to a stronger machine. For everything else, the left column wins.',
			'## What it takes',
			'Less than you think. Hardware: any laptop from the last ten years, ideally with 8 GB of RAM or more and an SSD. A cheap SATA SSD is the best $40 upgrade you can make. Software: Ubuntu Server LTS, the lid-switch override, Tailscale and SSH. Time: an afternoon. Start with what you have and upgrade once you know what you actually need.',
			'If you have an old laptop in a drawer, you already have a server.',
		],
	},
	{
		slug: 'legacy-siege-mongodb-hackathon',
		date: '2026-11-14',
		kind: 'hackathon',
		title: 'Legacy Siege won the MongoDB Hackathon',
		image: {
			src: '/logbook/legacy-siege/first-place.jpg',
			alt: 'Krish Nalam and Anwar on stage under the First Place: Legacy Siege slide at Agents in Context, a MongoDB hackathon in Toronto',
		},
		summary:
			'A swarm of AI agents kept a simulated bank\'s legacy systems alive while a fleet of AI attackers tried to kill it. It recovered from every attack we threw at it and won 1st place at Agents in Context, MongoDB\'s hackathon in Toronto.',
		body: [
			'## The Story',
			'Here\'s the thing about Agents in Context: Anwar and I forgot we\'d signed up. Between our internships it had slipped right out of our heads. When we finally looked at it, the night before, we realized it was a huge opportunity, so we fully locked in, ideating and planning until nearly 1 a.m.',
			'The next morning we dragged ourselves awake, grabbed our monitors, forgot our ethernet cables, and drove to MongoDB\'s one-day hackathon in Toronto. Our [desktop towers](/logbook/home-server-setup) stayed at home: we connected to them over Tailscale and coded on them from the venue.',
			'We coded for so long that we looked up and it was 4:30 p.m. Submissions closed at 5. And at that exact moment we got kicked out of our room, because it was about to become a judging room. Small problem: the submission needed a 1-minute demo video, and we hadn\'t thought about it...',
			'We tore down the whole setup, booked it downstairs, found an empty hallway, and recorded it off the tops of our heads. We got three takes before the deadline made the decision for us. Then judging started in 15 minutes, so we ran back upstairs to prep a 3-minute presentation we hadn\'t written.',
			'Round 1 did not go well. We ran over time, left room for only 1 question, and walked off certain we\'d bombed. It felt so bad that we sat down and held a 30-minute post-mortem on everything we should have done differently, so that next time would go better. Then we honestly gave up. We only stayed to see who won and to support our friends (but also for the free food).',
			'When they called the finalists, we missed our own name. We were half asleep and had forgotten what we\'d named ourselves. When it finally clicked, we literally screamed ourselves awake, Anwar chugged a Red Bull, and I instantly opened my laptop. Legacy Siege was still running on our home server (this is why I love my home server), so the demo was live within a minute. And on stage we did every single thing we\'d spent those 30 minutes wishing we had done.',
			'We won 1st place.',
			'## The Project',
			'Banks still run on systems older than most of the people maintaining them. When one fails at 3 a.m., the fix lives in someone\'s head. We wanted to see if a swarm of AI agents could hold that knowledge instead, and keep the systems alive while something actively tried to break them.',
			'Legacy Siege is two sides. The swarm is a set of LangGraph agents that spawns as many workers as an incident needs: Scouts trace a failure back through the mainframe, Unix batch and web portal to its root cause, Workers fix it, a Guard only marks a step done after reading the system back, and Nurses take over the job of any agent that gets killed. Against it, a Red fleet of LLM attackers run by a planner kills agents mid-task, feeds them lying ops reports, and tries to poison their memory.',
			'MongoDB is the spine. Every agent step is checkpointed, so when an agent dies halfway through a fix, another picks up the job from the last step instead of starting over. Every successful fix is saved as a playbook and recalled with Atlas Vector Search, so the second time it sees the same attack, it finds the cause in 1 step instead of 3 and recovers 43% faster. When a fault keeps coming back, a Gardener rewrites the legacy code itself, after replaying the attack to prove the fix works.',
			'It recovered from every attack we threw at it. The part I\'d keep: memory is an attack surface. Once agents learn from past fixes, poisoning that memory is the cheapest attack there is, so recalled playbooks have to be verified, not trusted.',
			'## The Aftermath',
			'1st place came with $7K and $3K in LangSmith credits. We went home exhausted and very happy.',
			'Thanks to MongoDB and Bond AI for running Agents in Context, and to the judges for their questions. Congrats to Suture on 2nd place: their crash-proof incident agent was tackling the same problem from a different angle.',
			'Legacy Siege was supposed to end when the hackathon did. It hasn\'t. We learned there\'s real fear around this problem, and real demand for a fix: the 3 a.m. problem it goes after is a lot bigger than one demo. So Anwar and I aren\'t done with it just yet...',
		],
		figures: [
			{
				src: '/logbook/legacy-siege/dashboard.jpg',
				alt: 'Legacy Siege war room: Chaos Monkey attackers on the left, the legacy bank systems in the middle, the agent swarm on the right, MongoDB collections along the bottom',
				caption: 'The war room mid-attack. An Assassin has killed the mainframe worker, and Nurse 7 has taken over its job.',
				after: 11,
			},
		],
		tags: ['LangGraph', 'MongoDB Atlas', 'Vector Search', 'Multi-agent'],
		links: [
			{ label: 'Demo video', url: 'https://youtu.be/nyAwr1PlQpE' },
			{ label: 'Code on GitHub', url: 'https://github.com/KrishNalam/legacy-siege' },
			{ label: 'Hackathon gallery', url: 'https://cerebralvalley.ai/e/mongodb-toronto-hackathon/hackathon/gallery/52' },
		],
		posted: {
			x: 'https://x.com/StayKool18/status/2123560299403841577',
			linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7529329193747107840/',
		},
	},
];

export const SKILLS: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['Python', 'TypeScript', 'Java', 'C/C++', 'SQL', 'Bash'] },
	{ group: 'ML & AI', items: ['PyTorch', 'Hugging Face', 'LangGraph', 'RAG', 'Vector Search', 'MediaPipe', 'OpenCV', 'Tenstorrent TT-NN'] },
	{ group: 'Web', items: ['React', 'Next.js', 'React Native', 'Node.js', 'FastAPI', 'Spring Boot'] },
	{ group: 'Infra', items: ['Linux', 'Docker', 'AWS', 'Ansible', 'GitHub Actions', 'PostgreSQL', 'MongoDB'] },
];

export const EDUCATION = {
	school: 'University of Toronto',
	degree: 'Honours Bachelor of Computer Science (Co-op)',
	period: 'expected April 2028',
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


