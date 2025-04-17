'use client';

import HeroImage from '@/assets/meSideProfile3.png';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';


type Props = {
  ImageSrc: any
}

const HeroImg = ({ ImageSrc }: Props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = (event.clientX - centerX) / rect.width;
    const mouseY = (event.clientY - centerY) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <Image
          src={ImageSrc}
          alt=""
          width={500}
          height={500}
          className="rounded-2xl border-slate-300/10 border-2 shadow-2xl shadow-black md:max-w-fit max-w-[90vw] md:mx-0 mx-auto"
        />
      </motion.div>
    </>
  )
}

export default HeroImg;