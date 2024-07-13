import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiHashnode } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiX } from "react-icons/si";

function Navbar({className}:{className?:string}) {

    const socials = [

        {
            link: "https://www.linkedin.com/in/aniket-dhaygude-63bab6291/",
            label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/Aniket-2504",
            label: "Github",
            Icon: SiGithub,
        },
        {
            link: "https://twitter.com/Aniket_d04",
            label: "x",
            Icon: SiX,
        },
        {
            link: "https://aniket04blog.hashnode.dev/",
            label: "x",
            Icon: SiHashnode,
        },
    ]

     
  return (
   <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}>

    <h1 className='text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 '>Aniket 🧑🏻‍💻</h1>

        <div className='flex items-center gap-5'>
            {socials.map((social,index)=>{

                const Icon = social.Icon;

                return <Link href={social.link} key={index} aria-Label={social.label}>

                    <Icon className='w-6 h-6 hover:scale-125 transition-all'/>

                </Link>

            })}
        </div>




   </nav>
  )
}

export default Navbar