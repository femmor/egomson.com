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
        I am a UI/Front-end developer with a passion for creating accessible and pixel-perfect user experiences.
      </p>
      <p className='mb-3'>
        I have consulted as a Frontend Developer on large-scale projects including a fintech company such as Union Bank. 
        I have built React applications in fast-paced agile environments, collaborating with the design team, product owner, and clients to deliver 
        high-quality solutions. 
        I have contributed to the creation and maintenance of component libraries and design systems. 
        I am a fast learner and can pick up new technologies on the fly. 
        I am always excited to embrace new frameworks or dive into back-end code, as learning develops my skills as a developer.
      </p>
      <p>
        When I'm not coding, I enjoy playing the piano, watching
        movies, and spending time with family. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>.
      </p>
    </motion.section>
  );
}
