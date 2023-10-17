import {createElement} from 'react';
import {CgWorkAlt} from 'react-icons/cg';
import pInventory from '@/public/pInventory.png';
import disha from '@/public/dish.png';
import tef from '@/public/tef.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Dobox.tv',
    location: 'Lagos, NG',
    description:
      'I worked as a front-end developer, developing user-oriented visuals and features using front-end languages, including HTML5, CSS3, Bootstrap Framework and jQuery/JavaScript.',
    icon: createElement(CgWorkAlt),
    date: '2015 - 2016',
  },
  {
    title: 'Greenwich Media',
    location: 'Lagos NG',
    description:
      'I worked as a WordPress developer, leveraging my design skills with Figma and strong understanding of WordPress and Elementor to develop websites and manipulate admin and theme components. I also up-skilled to React Developer.',
    icon: createElement(CgWorkAlt),
    date: '2016 - 2017',
  },
  {
    title: 'OAA Study',
    location: 'Remote',
    description:
      'I worked as a lead frontend developer for various projects including a CRM for academic agents to collect and analyze student data for admission into top Universities around the world.',
    icon: createElement(CgWorkAlt),
    date: '2017 - 2020',
  },
  {
    title: 'Academic Partnerships',
    location: 'Dallas TX',
    description:
      'I worked as a front-end developer developing web pages and applications using HTML5, CSS3, JavaScript, some .NET and C# for partner Universities.',
    icon: createElement(CgWorkAlt),
    date: '2020 - 2021',
  },
  {
    title: 'Projekt202',
    location: 'Dallas TX',
    description:
      'I worked as a UI developer, working on a React driven banking application. Created UI components with reusable codes for a better user experience using React, TypeScript, Storybook and Sass for styling.',
    icon: createElement(CgWorkAlt),
    date: '2021 - 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Product Inventory System',
    description:
      'A full-stack product inventory system to control and manage products in real-time.',
    tags: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Sass',
      'Redux Toolkit',
      'Cloudinary',
      'Nodemailer',
    ],
    imageUrl: pInventory,
    link: 'https://pinventory.onrender.com',
  },
  {
    title: 'Disha.co',
    description:
      'A zero code web builder for creating websites and web applications.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Elementor',
      'WordPress',
      'Figma',
    ],
    imageUrl: disha,
    link: 'https://getdisha.co/pages',
  },
  {
    title: 'The Tony Elumelu Foundation',
    description:
      'African private-sector-led philanthropy empowering African entrepreneurs to create jobs on the continent.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Elementor',
      'WordPress',
      'Figma',
    ],
    imageUrl: tef,
    link: 'https://www.tonyelumelufoundation.org',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'SASS/SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Context API',
  'Redux Toolkit',
  'React Query',
  'React Testing Library',
  'Jest',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Express',
  'WordPress',
  'Figma',
  'Framer',
  'Framer Motion',
  'CI/CD',
  'AWS',
  'Jenkins',
  'Nexus Artifact Repository',
] as const;
