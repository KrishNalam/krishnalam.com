import { image } from 'framer-motion/client';
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiDevpost } from 'react-icons/si';

export const PERSONAL_INFO = {
	name: 'Krish',
	title: 'Welcome to my digital desktop.',
	headshot: '/Headshot.jpeg', // Ensure this exists in public/
};

export const SOCIALS = [
	{ name: 'GitHub', icon: FiGithub, url: 'https://github.com' },
	{ name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com' },
	{ name: 'Resume', icon: FiFileText, url: '/resume.pdf' },
	{ name: 'Devpost', icon: SiDevpost, url: 'https://devpost.com' },
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
		title: 'Retro Webring',
		url: 'https://google.com',
		stack: ['Next.js', 'Supabase', 'Tailwind'],
		description: 'A connected platform for student portfolios.',
		tasks: [
			'Designed the database schema for efficient querying.',
			'Implemented authentication using OAuth providers.',
		],
	},
	{
		title: 'AI Fitness Tracker',
		url: 'https://github.com',
		stack: ['Python', 'OpenCV', 'React'],
		description: 'Tracks exercise movements using computer vision.',
		tasks: [
			'Integrated MediaPipe for real-time joint tracking.',
			'Built a REST API to serve analysis data to the frontend.',
		],
	},
	{
		title: 'Retro Webring',
		url: 'https://google.com',
		stack: ['Next.js', 'Supabase', 'Tailwind'],
		description: 'A connected platform for student portfolios.',
		tasks: [
			'Designed the database schema for efficient querying.',
			'Implemented authentication using OAuth providers.',
		],
	},
	{
		title: 'Retro Webring',
		url: 'https://google.com',
		stack: ['Next.js', 'Supabase', 'Tailwind'],
		description: 'A connected platform for student portfolios.',
		tasks: [
			'Designed the database schema for efficient querying.',
			'Implemented authentication using OAuth providers.',
		],
		image: '/nextunicorn.png',
		award: '1st Place - HackUofT 2023',
	},
];
