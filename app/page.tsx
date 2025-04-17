import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import { TimelineContainer } from "./_components/TimelineContainer";
import MyProjects from "./_components/MyProjects";
import MyBlogs from "./_components/MyBlogs";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // metadataBase: new URL("")
  title: 'Full Stack SDE - Shehjad | saas | user experience(UX)',
  description: 'A software engineer with years of experience in fast paced environments with proven growth. Obsessed with user experience.',
  alternates: {
    canonical: `https://threepointdev.com`,
  },
  openGraph: {
    title: 'Full Stack SDE - Shehjad | saas | user experience(UX)',
    description: 'A software engineer with years of experience in fast paced environments with proven growth. Obsessed with user experience.',
    // images: 
  }
}

export default function Home() {
  return (
    <div className=" ">
      {/* <p className="font-mono">Herop Section</p>
      <p className="font-sans">Herop Section</p>
      <p className="font-kanit">Herop Section</p>
      <p className="font-anton">Herop Section</p> */}
      <HeroSection />

      <TimelineContainer />

      <MyProjects />
      <MyBlogs />
    </div>
  );
}
