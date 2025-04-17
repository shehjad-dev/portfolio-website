'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLogo from '@/assets/logoMine.png';
import { MenuIcon, XIcon } from 'lucide-react';
import { redirect } from 'next/navigation';

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu container
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Animation variants for the links
  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div className="h-[70px] z-50 font-mono px-4 py-2 sticky top-0">
      <div className="max-w-[1400px] px-4 backdrop-filter bg-slate-950 border-[1px] border-slate-600/50 rounded-md mx-auto text-white flex items-center justify-between h-full">
        <Link
          href="/"
          className="font-mono flex items-center gap-2 font-semibold text-base"
        >
          <Image
            src={MainLogo}
            alt="my logo for three point dev"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
          />
          ThreePointDev;
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 hover:text-yellow-200 cursor-pointer p-1 border-[1px] rounded-sm border-yellow-50/50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <MenuIcon className='w-5 h-5' />
          ) : (
            <XIcon className='w-5 h-5' />
          )}

        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#experience" className="hover:text-yellow-200">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-yellow-200">
            Projects
          </Link>
          <Link href="#blogs" className="hover:text-yellow-200">
            Blogs
          </Link>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-[70px] px-4 rounded-lg left-[50%] translate-x-[-50%] w-[92vw] bg-slate-950 border-[1px] border-slate-600/50 md:hidden flex flex-col items-center gap-4 py-4 text-sm"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {['#experience', '#projects', '#blogs'].map((href, index) => (
                <motion.div
                  key={`${href}-${index}`}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className='w-full py-3 px-4 cursor-pointer hover:bg-slate-800 rounded-md'
                  onClick={() => {
                    toggleMenu();
                    redirect(href);
                  }}
                >
                  {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;





// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import MainLogo from '@/assets/logoMine.png'

// type Props = {}

// const Navbar = (props: Props) => {
//   return (
//     <div className='h-[70px] font-mono md:px-0 px-4 py-2'>
//       <div
//         className='md:w-[1400px] px-4 backdrop-filter bg-slate-950 border-[1px] border-slate-600/50 rounded-md mx-auto text-white flex items-center gap-12 justify-between h-full'
//       >
//         <Link
//           href={"/"}
//           className='font-mono flex items-center gap-2 font-semibold text-base md:text-lg'
//         >
//           <Image
//             src={MainLogo}
//             alt='my logo for three point dev'
//             width={512}
//             height={512}
//             className='w-[30px]'
//           />
//           ThreePointDev;
//         </Link>

//         <div className='flex items-center gap-4 text-sm'>
//           <Link
//             href={"#experience"}
//             className='hover:text-yellow-200'
//           >
//             Experience
//           </Link>
//           <Link
//             href={"#projects"}
//             className='hover:text-yellow-200'
//           >
//             Projects
//           </Link>
//           <Link
//             href={"#blogs"}
//             className='hover:text-yellow-200'
//           >
//             Blogs
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

