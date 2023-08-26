import React from 'react';
import {CgWorkAlt} from 'react-icons/cg';
import {FaReact} from 'react-icons/fa';
import pInventory from '@/public/pInventory.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

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
    icon: React.createElement(CgWorkAlt),
    date: '2015 - 2016',
  },
  {
    title: 'Greenwich Media',
    location: 'Lagos NG',
    description:
      'I worked as a WordPress developer, leveraging my strong understanding of WordPress core to develop and manipulate admin and theme components. I also up-skilled to React Developer.',
    icon: React.createElement(CgWorkAlt),
    date: '2016 - 2017',
  },
  {
    title: 'OAA Study',
    location: 'Remote',
    description:
      'I worked as a lead frontend developer for various projects including a CRM for academic agents to collect and analyze student data for admission into top Universities around the world.',
    icon: React.createElement(CgWorkAlt),
    date: '2017 - 2020',
  },
  {
    title: 'Academic Partnerships',
    location: 'Dallas TX',
    description:
      'I worked as a front-end developer developing web pages and applications using HTML5, CSS3, JavaScript, some .NET and C# for partner Universities.',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2021',
  },
  {
    title: 'Projekt202',
    location: 'Dallas TX',
    description:
      'I worked as a UI developer, working on a React driven banking application. Created UI components with reusable codes for a better user experience using React, TypeScript, Storybook and Sass for styling.',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Product Inventory System',
    description:
      'A full-stack product inventory system to control and manage products in in real-time.',
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
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Testing Library',
  'Jest',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'Framer Motion',
  'CI/CD',
  'AWS',
  'Jenkins',
  'Nexus Artifact Repository',
] as const;
