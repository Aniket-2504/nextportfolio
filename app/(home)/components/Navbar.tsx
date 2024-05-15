import Link from 'next/link';
import React from 'react';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiX } from "react-icons/si";

function Navbar() {

    const socials = [

        {
            link: "#",
            label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            link: "#",
            label: "Github",
            Icon: SiGithub,
        },
        {
            link: "#",
            label: "x",
            Icon: SiX,
        },
    ]

     
  return (
   <nav className='py-10 flex justify-between items-center'>

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