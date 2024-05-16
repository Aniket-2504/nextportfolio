import React from 'react'
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

function Projects() {

    const projects = [
        {
            title: "Eraser_tarde Web App",
            tech: [SiNextdotjs, SiTypescript,SiTailwindcss],
            link: "https://eraser-trade.vercel.app/",
            cover: "/erasertrade.png",
            background: "bg-indigo-500",
        },
        {
            title: "Ecommerce Shopping platform",
            tech: [SiReact,SiMongodb,SiNodedotjs,SiExpress],
            link: "https://eraser-trade.vercel.app/",
            cover: "/erasertrade.png",
            background: "bg-green-500",
        },
        {
            title: "Fitme",
            tech: [SiReact,SiMongodb,SiNodedotjs,SiExpress],
            link: "https://eraser-trade.vercel.app/",
            cover: "/erasertrade.png",
            background: "bg-sky-500",
        },
        {
            title: "Portfolio Website",
            tech: [SiReact,SiMongodb,SiNodedotjs,SiExpress],
            link: "https://eraser-trade.vercel.app/",
            cover: "/erasertrade.png",
            background: "bg-yellow-500",
        },
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        
        
        <Title
                text="Projects 🎨" 
                className="flex flex-col items-center justify-center rotate-6"
            />

            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
                {projects.map((project,index)=>{
                    return <Link href={project.link} key={index} >
                        <div className={cn("p-1 rounded-md",project.background)}>
                            <DirectionAwareHover
                                 imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'
                            >       <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon,index)=>{
                                            return <Icon className='w-8 h-8' key={index}/>
                                        })}
                                    </div>
                                    </div>

                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}


            </div>


    </div>
  )
}

export default Projects