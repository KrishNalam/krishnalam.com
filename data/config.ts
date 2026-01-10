import { image } from 'framer-motion/client';
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiDevpost } from 'react-icons/si';

export const PERSONAL_INFO = {
	name: 'Krish',
	title: 'Welcome to my digital desktop.',
	headshot: '/Headshot.jpeg', // Ensure this exists in public/
};

export const SOCIALS = [
	{ name: 'GitHub', icon: FiGithub, url: 'https://github.com/KrishNalam' },
	{ name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/KrishNalam' },
	{ name: 'Resume', icon: FiFileText, url: '/resume.pdf' },
	{ name: 'Devpost', icon: SiDevpost, url: 'https://devpost.com/KrishNalam' },
];

export const EXPERIENCES = [
	{
		title: 'Software Developer',
		company: 'RBC (Royal Bank of Canada)',
		location: 'Toronto, ON',
		date: 'May 2025 - Aug 2025',
		desc: [
			'Built a Java/Maven ETL pipeline modernizing RBC`s deprecated workflows, automating weekly 30GB+ transit data processing into flat files for 12+ mainframe JCL jobs, replacing SOAP with REST APIs',
			'Implemented automated SQL stored procedures in PostgreSQL to archive historical transactional data, reducing production database size by 15% and improving query performance',
			'Cut $100K in maintenance costs by updating RBC Express systems to ES6, ensuring full cross-browser support',
		],
	},
	{
		title: 'Full-Stack Developer',
		company: 'Next Unicorn (Fintech Startup)',
		location: 'Toronto, ON',
		date: 'March 2025 - June 2025',
		desc: [
			'Reduced re-render frequency by 60% via Redux for efficient global state management and caching in React Native',
			'Built Dockerized Node.js microservices on AWS Lambda and API Gateway integrating with MongoDB & Supabase to support up to 10k req/min; established Jenkins CI/CD pipeline',
			'Reduced storage costs by 30% with a media storage pipeline using AWS S3 with lifecycle policies and Lambda Triggers for resizing, dynamic compression as well as CloudFront for edge caching',
		],
		image: '/nextunicorn.png',
	},
	{
		title: 'Back-End Developer',
		company: 'RBC (Royal Bank of Canada)',
		location: 'Toronto, ON',
		date: 'July 2024 - Aug 2024',
		desc: [
			'Benchmarked SARIMA against TensorFlow models in Jupyter with RMSE to optimize login traffic forecast accuracy',
			'Operationalized the winning model to automate resource allocation, cutting workload by 30%, saving $360K annually',
		],
		image: '/rbc2024.png',
	},
	{
		title: 'Software Engineer',
		company: 'RBC (Royal Bank of Canada)',
		location: 'Toronto, ON',
		date: 'July 2023 - Aug 2023',
		desc: [
			'Boosted test coverage to 95% for RBC’s Visa Rewards by automating key tests with Docker, Java, & ReadyAPI',
			'Improved API test reliability 25% with a WireMock & Postman mock API suite, reducing UAT and production issues',
		],
		image: '/rbc2023.png',
	},
];

export const PROJECTS = [
	{
		title: 'UofT Webring',
		url: 'https://www.uoftwebring.com',
		stack: ['Next.js', 'Supabase', 'Tailwind'],
		description: 'A connected platform that showcases the portfolios of UofT students in one network.',
		tasks: [
			'Implemented serverless media pipeline using AWS S3 with presigned URLs for secure uploads, CloudFront for edge caching, and Supabase for metadata management; automated image resizing with Lambda triggers',
			'Developed a scalable, serverless mass mailing workflow with AWS SES & Lambda, sending 10K+ emails per user with automated scaling and 99% delivery success',
		],
	},
	{
		title: 'FITRIS',
		url: 'https://github.com/yuvibirdi/fitris',
		stack: ['Python', 'OpenCV', 'React'],
		description: 'An interactive fitness game that maps real-world exercises to Tetris controls.',
		tasks: [
			'Developed a React front end, creating a responsive user interface, and built a Flask API back end using NumPy for movement detection and precise body joint tracking',
			'Used MediaPipe & OpenCV to classify 5+ exercises with 90% detection accuracy',
		],
	},
	{
		title: 'DevDuels',
		url: 'https://github.com/m-shao/hack-the-valley',
		stack: ['Next.js', 'Supabase', 'Tailwind'],
		description:
			'A web-based game that encourages effective code reviews through competition and real-time AI feedback.',
		tasks: [
			'Built a responsive front end with Next.js & Tailwind CSS, using lazy loading and code splitting and efficient rendering',
			'Engineered the back end with MongoDB & GitHub API for authentication, data storage, and user integration',
			'Implemented context-aware feedback using embeddings and RAG via LangChain, semantically analyzing code',
		],
	},
];
