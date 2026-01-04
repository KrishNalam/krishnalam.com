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
		title: 'Full Stack Developer',
		company: 'Tech Corp',
		location: 'Toronto, ON',
		date: 'Jan 2024 - Present',
		desc: [
			'Built a scalable serverless architecture using AWS Lambda.',
			'Reduced load times by 40% using Next.js optimization.',
			'Collaborated with design teams to implement pixel-perfect UI.',
		],
	},
	{
		title: 'Software Intern',
		company: 'Startup Inc',
		location: 'Remote',
		date: 'May 2023 - Aug 2023',
		desc: [
			'Refactored legacy code base to modern React standards.',
			'Implemented automated testing using Jest and Cypress.',
		],
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
];
