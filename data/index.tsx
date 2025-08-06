import { title } from 'process';

export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Experiences', link: '#testimonials' },
	// { name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title: 'This is me - a tech geek by day, code wizard by night, and always ready to debug life’s challenges with a dash of humor and caffeine! 🚀',
		description: '👋Hello Again,',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.png',
		spareImg: '/grid.svg',
	},
	{
		id: 2,
		title: 'Give it a spin and let’s see where our ideas take us!',
		description: 'Ready to Connect?',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'Too much to list here...',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Currently working on Project Delphi  Stay tuned!',
		description: 'The Inside Scoop',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'My hobbies include 3D designing, gaming & watching movies.',
		description: '',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/grid.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Send Me a Message?',
		description: 'Click the button; It does something cool, trust me!',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const projects = [
	{
		id: 1,
		title: 'FITRIS',
		des: 'An exercise game, combining fitness routines with the classic game,Tetris, utilizing AI-powered exercise detection to transform workouts into engaging gameplay challenges.',
		img: '/p1.png',
		iconLists: ['/re.svg', '/tail.svg', '/js.svg', '/py.svg', '/flask.svg'],
		link: 'https://github.com/yuvibirdi/fitris',
		trophy: 'Winner at JamHacks8',
	},
	{
		id: 2,
		title: 'PredicTurf',
		des: 'A cryptocurrency and betting appS, featuring machine learning-powered match predictions and secure transactions through Near wallet integration, along with a distinct NFT wallet system.',
		img: '/p3.png',
		iconLists: ['/node.svg', '/ts.svg', '/adobe.svg', '/mongo.svg', '/flask.svg'],
		link: 'https://github.com/aftwasiq/hawkhacks24',
	},
	{
		id: 3,
		title: 'DevDuels',
		des: 'A web-based video game that makes coding fun and engaging, especially for younger users, by integrating with GitHub to create a competitive environment for learning coding skills.',
		img: '/p2.png',
		iconLists: ['/next.svg', '/js.svg', '/tail.svg', '/mongo.svg', '/figma.svg'],
		link: 'https://github.com/m-shao/hack-the-valley',
		trophy: 'Winner at HackTheValley8',
	},
	// {
	//   id: 4,
	//   title: "Animated Apple Iphone 3D Website",
	//   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
	//   img: "/p4.svg",
	//   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
	//   link: "https://github.com/adrianhajdin/iphone",
	// },
];

export const testimonials = [
	{
		title: 'July 2024',
		content: (
			<div className='testimonial-container p-6 border-2 border-purple-500 rounded-xl shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 hover:shadow-2xl transition-shadow duration-300'>
				<div className='company-name text-2xl font-bold mb-3 text-blue-400'>
					Royal Bank of Canada, Toronto, ON
				</div>
				<div className='job-title text-lg font-semibold mb-4 text-gray-300'>
					Innovation Developer - Backend Engineer, OLB Support Team
					<span className='text-sm text-gray-400 ml-2'>July 2024 - August 2024</span>
				</div>
				<div className='job-description text-base text-gray-400 leading-relaxed mb-2'>
					• Developed a machine learning model that forecasts volumes of online banking app logins and
					automates resource allocation, reducing workload of various OLB support teams by 71%, saving around
					$360,000 annually for RBC
				</div>
				<div className='job-description text-base text-gray-400 leading-relaxed'>
					• Built and deployed final SARIMA model on Jupyter Notebooks utilizing Pandas, NumPy, and
					Statsmodels for thorough data visualization and statistical analysis; Validated through TSM
					techniques such as MAE and RMSE
				</div>
			</div>
		),
	},
	{
		title: 'July 2023',
		content: (
			<div className='testimonial-container p-6 border-2 border-purple-500 rounded-xl shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 hover:shadow-2xl transition-shadow duration-300'>
				<div className='company-name text-2xl font-bold mb-3 text-blue-400'>
					Royal Bank of Canada, Toronto, ON
				</div>
				<div className='job-title text-lg font-semibold mb-4 text-gray-300'>
					Innovation Developer - Full Stack Engineer, Avion Rewards
					<span className='text-sm text-gray-400 ml-2'>July 2023 - August 2023</span>
				</div>
				<div className='job-description text-base text-gray-400 leading-relaxed mb-2'>
					• Automated 5+ services for RBC’s Avion Rewards app using Docker, Maven and ReadyAPI increasing
					global test coverage by 35%
				</div>
				<div className='job-description text-base text-gray-400 leading-relaxed'>
					• Created a mock API suite using WireMock and Postman, eliminating reliance on third-party vendors,
					reducing issues in UAT and Production and improving API test accuracy by 25%
				</div>
			</div>
		),
	},
];
