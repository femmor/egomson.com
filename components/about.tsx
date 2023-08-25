'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {motion} from 'framer-motion';
import {useSectionInView} from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I am an experienced front-end mobile/web developer based in
        the Dallas area. A solution-driven professional excelling in
        highly collaborative work environment. I started as a graphic
        designer and my passion for user interface design fueled my
        curiosity to learn how software works and communicate hence
        honing my web development skills.{' '}
      </p>
      <p className='mb-3'>
        My favorite part of programming is the problem-solving aspect.
        I <span className='underline'>love</span> the feeling of
        finally figuring out a solution to a problem. My core stack is{' '}
        <span className='font-medium'>
          React, Context API, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always
        looking to learn new technologies. I am currently looking for
        a <span className='font-medium'>full-time position</span> as a
        frontend software developer.
      </p>
      <p>
        When I'm not coding, I enjoy playing the piano, watching
        movies, and spending time with family. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>.
      </p>
    </motion.section>
  );
}
