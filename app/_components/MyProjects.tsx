'use client';

import React from 'react';
import Project1Thumbnail from "@/assets/project1Thumbnail.png";
import Project2Thumbnail from "@/assets/project2Thumbnail.png";
import Project3Thumbnail from "@/assets/project3Thumbnail.png";
import Project4Thumbnail from "@/assets/project4Thumbnail.png";
import Project5Thumbnail from "@/assets/project5Thumbnail.png";
import Image from 'next/image';
import { ExternalLinkIcon, GithubIcon, GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";


const data = [
  {
    title: "Full Stack Expense Tracker",
    summary: "A full stack expense tracker with the ability to add recurring expenses automatically. Monthly expenses report generation with the help of Rabbit MQ and cron job.",
    thumbnail: Project1Thumbnail,
    githubLink: "https://github.com/shehjad-dev/expense-tracker-full-stack",
    liveLink: "https://exp-tracker-by-taus.vercel.app/",
    techStack: ["React", "Vite", "Nest Js", "Mongo DB", "Rabbit MQ"]
  },
  {
    title: "Mecruit - Job board",
    summary: "A job board that shows jobs across the globe. The highlight is the extensive filter options and newsletter feature to get notified about jobs that the user signed up for.",
    thumbnail: Project5Thumbnail,
    liveLink: "https://www.mecruit.com/",
    techStack: ["Next Js", "Nest Js", "Mongo DB"]
  },
  {
    title: "Get Unique ID - NPM Package",
    summary: "The one stop solution to get a uniqe id for your use case. Play with it and integrate for your particular use case. Good luck!",
    thumbnail: Project2Thumbnail,
    npmLink: "https://www.npmjs.com/package/get-a-unique-id",
    homepageLink: "https://get-unique-id.netlify.app/",
    techStack: ["Node JS", "npm"]
  },
  {
    title: "Youtube Town",
    summary: "A collection of useful free tools for youtubers or youtubing. This is something I have been developing in my free time, and I keep adding tools here that I belive are useful for he niche.",
    thumbnail: Project4Thumbnail,
    liveLink: "https://youtubetown.netlify.app/",
    techStack: ["Javascript", "CSS"]
  },
  {
    title: "Github Finder",
    summary: "User can search for github profiles individually and then plenty of information of the Github user gets displayed on the tab.",
    thumbnail: Project3Thumbnail,
    githubLink: "https://github.com/Taus1999/Github-Finder",
    liveLink: "https://github-finder-by-sat.netlify.app/",
    techStack: ["Javascript", "CSS"]
  },
];

const MyProjects = () => {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delay: 0.4
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='py-12 md:py-20' id='projects'>
      <motion.div
        initial={{
          x: -20,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 100
        }}
        transition={{
          duration: 0.5,
          delay: 0.3
        }}
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10"
      >
        <h2 className="text-lg md:text-4xl mb-2 text-white max-w-4xl font-kanit tracking-wider">
          Some of my projects
        </h2>
        <p className="font-mono text-neutral-300 text-sm md:text-base max-w-sm">
          I develop these projects whenever I am bored or I am learning something new.
        </p>
      </motion.div>
      <motion.div
        className='max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto py-6 md:py-16 px-4 md:px-8 lg:px-10'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.map((project: any, idx: any) => (
          <motion.div
            key={`${project.title}-${idx}`}
            className='text-white bg-[#0A1216] border-[1px] border-slate-800 rounded-lg overflow-hidden'
            variants={cardVariants}
          >
            <div>
              <Image
                src={project.thumbnail}
                alt={`${project.title} - thumbnail image`}
                width={500}
                height={500}
                className='w-full h-fit'
              />
            </div>
            <div className='p-6'>
              <div>
                <h4 className='font-mono font-semibold text-lg mb-2'>{project.title}</h4>
              </div>
              <div>
                <div className='flex flex-wrap gap-2 mt-4 mb-8'>
                  {project.techStack && project.techStack.length > 0 && project.techStack.map((tech: any, idx2: any) => (
                    <p
                      key={`${project.title}-${tech}-${idx2}`}
                      className='bg-slate-950 border-[1px] h-fit border-slate-600 text-slate-300 rounded-full px-4'
                    >
                      {tech}
                    </p>
                  ))}
                </div>

                <div className='flex flex-wrap items-center gap-3'>
                  {project.githubLink && (
                    <Button
                      onClick={() => window.open(project.githubLink)}
                      className='flex cursor-pointer bg-transparent text-yellow-200 border-[1px] border-yellow-100 px-4 rounded-lg py-2 items-center gap-2 hover:ring-1 ring-yellow-100 transition-all duration-75 ease-in'
                    >
                      <GithubIcon className='w-5 h-5' />
                      Github
                    </Button>
                  )}
                  {project.npmLink && (
                    <Button
                      onClick={() => window.open(project.npmLink)}
                      className='flex cursor-pointer bg-transparent text-yellow-200 border-[1px] border-yellow-100 px-4 rounded-lg py-2 items-center gap-2 hover:ring-1 ring-yellow-100 transition-all duration-75 ease-in'
                    >
                      <GlobeIcon className='w-5 h-5' />
                      NPM
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button
                      onClick={() => window.open(project.liveLink)}
                      className='flex cursor-pointer bg-yellow-200 hover:bg-yellow-200 text-yellow-950 px-4 rounded-lg py-2 items-center gap-2 hover:ring-2 ring-yellow-300 transition-all duration-75 ease-in'
                    >
                      <ExternalLinkIcon className='w-5 h-5' />
                      Live Link
                    </Button>
                  )}
                  {project.homepageLink && (
                    <Button
                      onClick={() => window.open(project.homepageLink)}
                      className='flex cursor-pointer bg-yellow-200 hover:bg-yellow-200 text-yellow-950 px-4 rounded-lg py-2 items-center gap-2 hover:ring-2 ring-yellow-300 transition-all duration-75 ease-in'
                    >
                      <ExternalLinkIcon className='w-5 h-5' />
                      Homepage
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MyProjects;