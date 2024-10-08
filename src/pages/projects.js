import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/3434.png'
import project2 from '../../public/images/4567.png'
import project3 from '../../public/images/4646.png'
import project4 from '../../public/images/4545.png'
import { GithubIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) =>{
    return (
        <article className='w-full flex items-center justify-between relative 
        rounded-br-2xl rounded-3xl
        border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p- xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
'/>
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{ scale: 1.05}}
                transition={{ duration: 0.2}}
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px 50vw),
                50vw
                '
                
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} 
                target="_blank"
                 className='hover:underline underline-offset-2'
                 >
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light
                sm:text-sm
                '>
                    {title}
                </h2>
            </Link>
            <p className='my-2 fornt-medium text-dark dark:text-light sm:text-sm'>
                {summary}
            </p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark 
                sm:px-4 sm:text-base
                '
                >Visit My Project</Link>
            </div>
            </div>

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4 
        ">
             <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
             rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs-h[102%] xs:rounded--[1.5rem]' 
             />
            <Link 
            href={link} 
            target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage    src={img} alt={title} className='w-full h-auto'/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='ml-4 w-full text-left text-3xl font-bold lg:text-2xl'>
                    {title}
                </h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={github} target='_blank' className='w-8 md:w-6'>
                    {" "}
                    <GithubIcon/>{" "}</Link>
            <Link
             href={link} 
             target='_blank'
             className='text-lg font-semibold underline md:text-base'
                >Visit</Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
return (
    <>
            <Head>
                <title>Hadi Ramadhan | Projects Page</title>
                <meta name='description' content='any description'/>
            </Head>
            
            <TransitionEffect/>
        
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout classname='pt-16'>
                <AnimatedText text="My Project" 
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                       <FeaturedProject
                       title="Cloning Anime use Next Js"
                       img={project1}
                       link= 
                       'https://nadi-animelist.vercel.app/'
                       github="https://github.com/HadiRamadhan"
                       type="Project 1"
                       />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                       title="Landing Page Web Sevice Use React Js"
                       img={project2}
                       link= 
                       'https://website-service-kappa.vercel.app/'
                       github="https://github.com/HadiRamadhan"
                       type="Project 2"
                       />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                       title="Portofolio Marketing Landing Page"
                       img={project3}
                       link= 
                       'https://ptksn.vercel.app/'
                       github="https://github.com/HadiRamadhan"
                       type="Project 2"
                       />
                    </div>
                    <div className='col-span-12 p-2'>
                       <FeaturedProject
                       title="Cloning Zoom use Next Js"
                       img={project4}
                       link= 
                       'https://hadi-zoom.vercel.app/'
                       github="https://github.com/HadiRamadhan"
                       type="Project 4"
                       />
                    </div>
                </div>
            </Layout>
        </main>
    </>
)
}

export default projects
