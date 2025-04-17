import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import Exp1ToolsImage from "@/assets/exp1Tools.png";
import Exp2ToolsImage from "@/assets/exp2Tools.png";
import Exp3ToolsImage from "@/assets/exp3ToolsV3.png";
import Exp4ToolsImage from "@/assets/exp4ToolsV3.png";
import Exp5ToolsImage from "@/assets/exp5Tools.png";
import Exp6ToolsImage from "@/assets/exp6Tools.png";
import Exp2DemoImage from "@/assets/exp2Demo.png";
import Exp3DemoImage from "@/assets/exp3Demo.png";
import Exp4DemoImage from "@/assets/exp4Demo.png";
import Exp5DemoImage from "@/assets/exp5Demo.png";
import Exp6DemoImage from "@/assets/exp6Demo.png";
import AiseoDemo from "@/assets/aiseoDemo.png";
// import ArtAiseoDemo from "@/assets/artDemo.png";
// import HumanizeDemo from "@/assets/humanizeDemo.png";
import AiseoToolsImg from "@/assets/aiseoTools.png";

import Link from "next/link";

export function TimelineContainer() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <div className="text-neutral-200 font-mono text-xs md:text-sm font-normal mb-2">
            Joined <Link href="https://www.worktrooper.com/" className="hover:underline font-medium text-yellow-200 transition-all duration-75 ease-in" target="_blank">Worktrooper</Link> as a Web Scraping Developer
          </div>
          <ul className="list-disc max-w-[90%] pl-4 font-mono text-neutral-200 text-xs md:text-sm mb-8">
            <li>Worked on creating effective solutions for scraping useful data from various websites.</li>
            <li>Helped on increasing efficiency for the existing teams.</li>
            <li>Helped Clients with their required data on the go.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Exp1ToolsImage}
              alt="Tools used while working in worktrooper."
              width={500}
              height={500}
              className="rounded-lg transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-cover h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2022",
      content: (
        <div>
          <p className="text-neutral-200 font-mono text-xs md:text-sm font-normal mb-8">
            Went in depth of ui/ux & figma and started working on the official mobile app of <Link href="https://www.babycare.com.bd/" className="hover:underline transition-all font-medium text-yellow-200 duration-75 ease-in" target="_blank">Babycare BD</Link>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={Exp2DemoImage}
              alt="UI UX design of babybare mobile app."
              width={500}
              height={500}
              className="rounded-lg transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-cover h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Exp2ToolsImage}
              alt="Tools used while working with Babycare BD."
              width={500}
              height={500}
              className="rounded-lg transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-cover h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <p className="text-neutral-200 font-mono text-xs md:text-sm font-normal mb-8 mt-12">
            Got the chance to work for Social Impact Lab of <Link href="https://www.bracu.ac.bd/" className="hover:underline transition-all font-medium text-yellow-200 duration-75 ease-in" target="_blank">Brac University</Link>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={Exp3DemoImage}
              alt="Demo Image of Social Impact lab"
              width={500}
              height={500}
              className="rounded-lg bg-white transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-contain h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Exp3ToolsImage}
              alt="Tools used while working with Social Impact Lab."
              width={500}
              height={500}
              className="rounded-lg transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-cover h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <p className="text-neutral-200 font-mono text-xs md:text-sm font-normal mb-8 mt-12">
            Developed the landing page for <Link href="https://landing.golflandsdental.co.nz/" className="hover:underline font-medium text-yellow-200 transition-all duration-75 ease-in" target="_blank">Golflands Dental NZ</Link>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={Exp4DemoImage}
              alt="Demo of Golflands Dental."
              width={500}
              height={500}
              className="rounded-lg bg-white transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-contain h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Exp4ToolsImage}
              alt="Tools used while working with Golflands Dental."
              width={500}
              height={500}
              className="rounded-lg transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-cover h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2022 to April 2023",
      content: (
        <div>
          <div className="text-neutral-200 font-mono text-xs md:text-sm font-normal mb-8">
            Joined <Link href="https://www.linkedin.com/company/ubehero/posts/?feedView=all" className="hover:underline font-medium text-yellow-200 transition-all duration-75 ease-in" target="_blank">Ubehero</Link>  {`(e24games)`} as a full time Frontend Developer.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={Exp5DemoImage}
              alt="Demo of E24games"
              width={500}
              height={500}
              className="rounded-lg bg-white transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-contain h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Exp5ToolsImage}
              alt="Tools used while working E24games"
              width={500}
              height={500}
              className="rounded-lg transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-cover h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <p className="text-neutral-200 font-mono text-xs md:text-sm font-normal mb-8 mt-12">
            Developed frontend of <Link href="https://devhunt.org/tool/onetapfolio" className="hover:underline font-medium text-yellow-200 transition-all duration-75 ease-in" target="_blank">Onetapfolio</Link>  {`(e24games)`} from scratch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={Exp6DemoImage}
              alt="Onetapfolio demo Image"
              width={500}
              height={500}
              className="rounded-lg bg-white transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-contain h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Exp6ToolsImage}
              alt="Tools used while working on Onetapfolio"
              width={500}
              height={500}
              className="rounded-lg transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-cover h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2023 to Present",
      content: (
        <div>
          <div className="text-neutral-200 font-mono text-xs md:text-sm font-normal mb-2 ">
            Joined <Link href="https://aiseo.ai/" className="hover:underline font-medium text-yellow-200 transition-all duration-75 ease-in" target="_blank">Aiseo.ai</Link> as a Full Stack Developer.
          </div>
          <div className="text-neutral-200 font-mono text-xs md:text-sm font-normal mb-8 ">
            Contributed to in-house Products - <Link href="https://humanizeaitext.ai/" className="hover:underline font-medium text-yellow-200 transition-all duration-75 ease-in" target="_blank">Humanize Ai text</Link>,
            {" "}<Link href="https://humanizeaitext.ai/" className="hover:underline transition-all duration-75 ease-in font-medium text-yellow-200" target="_blank">Humanize Ai text</Link> and
            {" "}<Link href="https://ai-video.ai/" className="hover:underline transition-all duration-75 ease-in font-medium text-yellow-200 " target="_blank">Aivideo Ai</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src={AiseoDemo}
              alt="Demo of Aiseo.ai"
              width={500}
              height={500}
              className="rounded-lg bg-white transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-contain h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* <Image
              src={ArtAiseoDemo}
              alt="UI UX design of babybare mobile app."
              width={500}
              height={500}
              className="rounded-lg bg-white transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-contain h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={HumanizeDemo}
              alt="UI UX design of babybare mobile app."
              width={500}
              height={500}
              className="rounded-lg bg-white transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-contain h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
            <Image
              src={AiseoToolsImg}
              alt="Tools used at Aiseo"
              width={500}
              height={500}
              className="rounded-lg bg-[#0a1216] transition-all duration-75 ease-in hover:ring-1 ring-yellow-100/20 object-contain h-fit md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    }
  ];
  return (
    <div id="experience" className="min-h-screen w-full md:py-[60px] py-[120px]">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
