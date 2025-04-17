"use client";

import HeroImage from '@/assets/meSideProfile3.png';
import HeroImg from './HeroImg';
import Link from 'next/link';
import { HeadsetIcon, MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Meteors } from '@/components/ui/meteors';

const HeroSection = () => {
  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  // Animation for each child element
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full md:pt-0 pt-5 h-[100vh] md:max-h-[1000px] max-h-fit bg-slate-950">
      <div className="md:w-[1400px] relative mx-auto text-white flex md:flex-row flex-col items-center gap-12 justify-between h-full">
        <div className='md:block absolute top-0 left-0 hidden'>
          <Meteors number={20} />
        </div>

        <motion.div
          className="md:max-w-[50%] flex flex-col md:items-start items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-xl animate-accordion-down md:text-left text-center md:mx-0 mx-auto md:text-5xl font-kanit tracking-wider"
            variants={itemVariants}
          >
            Full Stack Developer who is Obsessed with UX 💥
          </motion.h1>

          <motion.p
            className="font-mono md:text-left text-center md:mx-0 mx-auto text-sm md:text-xl mt-2 md:mt-4 max-w-[70%]"
            variants={itemVariants}
          >
            Welcome to the portfolio of a dev who went rogue and never looked back.
          </motion.p>

          <motion.div
            className="flex items-center flex-wrap gap-4 z-20"
            variants={itemVariants}
          >
            <Link
              href={"https://cal.com/shehjad-ali-taus-nt6a0m/30min"}
              target="_blank"
              className="text-base transition-all ease-in duration-75 md:text-lg flex gap-2 items-center justify-center rounded-lg px-4 h-[40px] font-semibold bg-yellow-200 hover:bg-yellow-200 hover:ring-2 ring-yellow-300 mt-4 text-yellow-950 font-mono cursor-pointer"
            >
              <HeadsetIcon className="w-6 h-6" />
              Let&apos;s Talk
            </Link>
            <Link
              href={"mailto:satauskz@gmail.com"}
              target="_blank"
              className="text-base transition-all ease-in duration-75 md:text-lg flex gap-2 items-center justify-center rounded-lg px-4 h-[40px] font-semibold bg-transparent hover:ring-2 ring-yellow-100 mt-4 text-yellow-200 border-[1px] border-yellow-50 font-mono cursor-pointer"
            >
              <MailIcon />
              Mail Me
            </Link>
          </motion.div>
        </motion.div>
        <HeroImg ImageSrc={HeroImage} />
      </div>
    </section >
  );
};

export default HeroSection;








// 'use client';
// import HeroImage from '@/assets/meSideProfile3.png';
// // import HeroImage from '@/assets/myProfileImg.png';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// const HeroSection = () => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const springConfig = { stiffness: 100, damping: 20 };
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

//   const handleMouseMove = (event: any) => {
//     const rect = event.currentTarget.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const mouseX = (event.clientX - centerX) / rect.width;
//     const mouseY = (event.clientY - centerY) / rect.height;
//     x.set(mouseX);
//     y.set(mouseY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <section className="w-full md:pt-0 pt-5 h-[100vh] md:max-h-[1000px] max-h-fit bg-slate-950">
//       <div className="md:w-[1400px] mx-auto text-white flex md:flex-row flex-col items-center gap-12 justify-between h-full">
//         <div className="md:max-w-[50%] flex flex-col md:items-start items-center">
//           <div>
//             <h1 className="text-3xl md:text-left text-center md:mx-0 mx-auto md:text-5xl font-kanit tracking-wider">
//               Full Stack Developer that never misses a shot 💥
//             </h1>
//           </div>

//           <p className="font-mono md:text-left text-center md:mx-0 mx-auto text-base md:text-xl mt-4 max-w-[70%]">
//             Welcome to the portfolio of a dev who went rogue and never looked back.
//           </p>
//           <Button
//             className="text-lg h-[40px] font-semibold bg-yellow-200 hover:bg-yellow-200 hover:ring-2 ring-yellow-300 mt-4 text-yellow-950 font-mono cursor-pointer"
//           >
//             Let's Talk
//           </Button>
//         </div>
//         <motion.div
//           style={{
//             rotateX,
//             rotateY,
//             transformPerspective: 1000,
//           }}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className="relative"
//         >
//           <Image
//             src={HeroImage}
//             alt=""
//             width={500}
//             height={500}
//             className="rounded-2xl border-slate-300/10 border-2 shadow-2xl shadow-black md:max-w-fit max-w-[90vw] md:mx-0 mx-auto"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




