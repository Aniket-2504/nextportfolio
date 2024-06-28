import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'> 
         

        <div className='space-y-10 text-center lg:text-left'>

                <h1 className='text-4xl lg:text-7xl font-bold'> Nice to meet you!  
                    <br />{" "}
                  <span className='underline underline-offset-8 decoration-green-500 hover:text-orange-300 cursor-pointer'> 
                      {"I'm Aniket."}
                  </span> 
                </h1>

            
                <p className='md:w-96 text-lg text-gray-300'>
                    {
                    " a 20 year cs graduate passionate about developement and design, And I love to make things, Apart from that I do freelancing."
                    }
                    </p>
            
            <Link href={"mailto:aniketdhaygude@gmail.com"} className='inline-block group'>
                {/* <div>
                    <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all'>Contact me 📬</h1>
                    <div className='w-40 h-2 bg-green-500 rounded-full'></div>
                    <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
                </div> */}
                <Title text='Contact me 📬'/>
            </Link>
        </div>

        <div className='relative'>  

            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                    <div className='flex gap-3 translate-x-8'>
                        <div className='w-32 h-32 rounded-2xl bg-indigo-500 hover:bg-orange-500'></div>
                        <div className='w-32 h-32 rounded-full bg-green-500 hover:bg-red-500'></div>
                    </div>
                    <div className='flex gap-3 -translate-x-8'>
                        <div className='w-32 h-32 rounded-2xl bg-gray-300 hover:bg-green-500'></div>
                        <div className='w-32 h-32 rounded-full bg-indigo-500 hover:bg-yellow-500'></div>
                    </div>
                    <div className=' glow absolute top-[40%] right-1/2 -z-10'> </div>
            </div> 

            <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
              <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'> 
                <p>See my resume</p>
                </MovingBorderBtn>
                </div>
        </div> 

    </div>
  )
}

export default HeroSection