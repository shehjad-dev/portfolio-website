'use client';
import Blog1Img from "@/assets/blog1.png";
import Blog2Img from "@/assets/blog2.png";
import Blog3Img from "@/assets/blog3.png";
import Image from 'next/image'
import { ExternalLinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"


const data = [
  {
    title: "Building a SEO friendly React FAQ Component with Smooth Animations - By Mark Iceberg",
    thumbnail: Blog1Img,
    liveLink: "https://shehjad.hashnode.dev/building-a-seo-friendly-react-faq-component-with-smooth-animations-by-mark-iceberg",
  },
  {
    title: "Giving up Bad habits and taking up Good one: A self testament by Bruce Wayne",
    thumbnail: Blog2Img,
    liveLink: "https://shehjad.hashnode.dev/giving-up-bad-habits-and-taking-up-good-one-by-bruce-wayne",
  },
  {
    title: "Set up React Native on Windows: A guide by the God Father.",
    thumbnail: Blog3Img,
    liveLink: "https://shehjad.hashnode.dev/set-up-react-native-on-windows-a-guide-by-the-god-father",
  },
]

const MyBlogs = () => {
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
    <div id="blogs" className='py-20 '>
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
          Stuff I write about
        </h2>
        <p className="font-mono text-neutral-300 text-sm md:text-base max-w-sm">
          Often I am writing in a twisted way and making use of fictional characters here and there.
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
            <div className="w-full h-[230px] relative">
              <Image
                src={project.thumbnail}
                alt={`${project.title} - thumbnail image`}
                // width={500}
                // height={500}
                className='w-full h-fit'
                layout="fill"
              />
            </div>
            <div className='p-6 h-[200px] flex flex-col justify-between'>
              <div>
                <h4 className='font-mono font-semibold text-lg mb-2'>{project.title}</h4>
                {/* <p className='mt-2 mb-4 md:h-[220px]'>{project.summary}</p> */}
              </div>
              {/* <p className='mt-2 mb-4 md:h-[180px]'>{project.summary}</p> */}

              <div className="">
                <div className='flex flex-wrap items-center gap-3'>
                  {project.liveLink && (
                    <Button
                      onClick={() => window.open(project.liveLink)}
                      className='flex cursor-pointer bg-yellow-200 hover:bg-yellow-200 text-yellow-950 px-4 rounded-lg py-2 items-center gap-2 hover:ring-2 ring-yellow-300 transition-all duration-75 ease-in'
                    >

                      Read
                      <ExternalLinkIcon className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default MyBlogs