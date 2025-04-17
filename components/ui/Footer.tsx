import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MainLogo from '@/assets/logoMine.png'


const socialLinks = [
  {
    title: "Linkedin",
    icon: <LinkedinIcon className='w-5 h-5' />,
    link: "https://www.linkedin.com/in/shehjad-ali/"
  },
  {
    title: "Github",
    icon: <GithubIcon className='w-5 h-5' />,
    link: "https://github.com/shehjad-dev"
  },
  {
    title: "Mail",
    icon: <MailIcon className='w-5 h-5' />,
    link: "mailto:satauskz@gmail.com"
  },
]

const Footer = () => {
  return (
    <>
      <div className='py-[100px] border-[1px] border-slate-900 bg-slate-950'>
        {/* <Image
        src={ }
        width={512}
        height={512}
      /> */}
        <div className='md:w-[1400px] mx-auto text-white flex md:flex-row flex-col items-center justify-center gap-10 md:items-start md:justify-between'>
          <div className='flex flex-col md:items-start items-center'>
            <Link
              href={"/"}
              className='font-mono flex items-center gap-2 font-semibold text-base md:text-lg'
            >
              <Image
                src={MainLogo}
                alt='my logo for three point dev'
                width={512}
                height={512}
                className='w-[30px]'
              />
              ThreePointDev;
            </Link>
            <div className='flex items-center gap-2 mt-3'>
              {socialLinks.map((item: any, idx: any) => (
                <Link
                  key={`${item.link}-${idx}`}
                  href={item.link}
                  target='_blank'
                  className='bg-yellow-200 flex items-center justify-center p-2 rounded-full text-yellow-950 hover:ring-1 ring-yellow-300'
                >
                  {item.icon}
                  {/* {item.title === 'Github' ?
                <GithubIcon className='w-5 h-5' /> :
                <LinkedinIcon className='w-5 h-5' />
              } */}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div>
              <h4 className='font-mono font-medium text-xs'>Projects</h4>
              <div className='flex flex-col items-start gap-2 mt-3'>
                <Link
                  href={"https://exp-tracker-by-taus.vercel.app/"}
                  target='_blank'
                  className='text-yellow-100 font-mono text-sm hover:underline'
                >
                  Expense Tracker
                </Link>
                <Link
                  href={"https://www.mecruit.com/"}
                  target='_blank'
                  className='text-yellow-100 font-mono text-sm hover:underline'
                >
                  Mecruit
                </Link>
                <Link
                  href={"https://www.npmjs.com/package/get-a-unique-id"}
                  target='_blank'
                  className='text-yellow-100 font-mono text-sm hover:underline'
                >
                  Unique ID - NPM Package
                </Link>
              </div>
            </div>
          </div>
        </div>



      </div>
      <p className='text-center text-white/70 py-7 font-mono text-sm'>© ThreePointDev. All rights reserved.</p>
    </>
  )
}

export default Footer