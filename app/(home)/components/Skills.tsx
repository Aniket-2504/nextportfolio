"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiCplusplus, SiCss3, SiFigma, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';

function Skills() {

    const  skills = [

       {
        text: "React.js",
        Icon: SiReact,
       },
       {
        text: "Next.js",
        Icon: SiNextdotjs,
       },
       {
        text: "Tailwind",
        Icon: SiTailwindcss,
       },
       {
        text: "Python",
        Icon: SiPython,
       },
       {
        text: "Node.js",
        Icon: SiNodedotjs,
       },
       {
        text: "Javascript",
        Icon: SiJavascript,
       },
       {
        text: "Html",
        Icon: SiHtml5,
       },
       {
        text: "CSS",
        Icon: SiCss3,
       },
       {
        text: "Git",
        Icon: SiGit,
       },
       {
        text: "Mongodb",
        Icon: SiMongodb,
       },
       {
        text: "C++",
        Icon: SiCplusplus,
       },
       {
        text: "Figma",
        Icon: SiFigma,
       },
    ]


  return (

    
    
    <div className='max-w-5xl mx-auto px-8 animate-move-down'>
            <Title
                text="Skills 🌟" 
                className="flex flex-col items-center justify-center -rotate-6"
            />

         <HoverEffect items={skills} />
    </div>
  );
}

export default Skills