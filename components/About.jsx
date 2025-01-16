import { assets, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { infoList } from '@/assets/assets'
import { motion } from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div
    
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1, delay: 1}} >
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}  
      className='text-center mb-2 text-lg font-Montserrat'>Introduction</motion.h4>
      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}} 
      className='text-center text-5xl font-Montserrat'>About me</motion.h2>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}  
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div
            initial={{scale: 0.9, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{duration: 0.6}} 
             className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}} 
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Montserrat'>Hey there! I'm a data scientist and web developer fresh out 
                of my Master's program. I love diving into data to uncover 
                interesting patterns and building web apps that bring those 
                insights to life. When I'm not geeking out over machine learning algorithms 
                or playing with new visualization tools, you'll find me coding full-stack 
                applications. My sweet spot? Taking complex data problems and turning 
                them into solutions that actually make sense to people.</p>

                <motion.ul 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}} 
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li 
                        
                        whileHover={{scale:1.05}}
                         className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                         hover:bg-darkHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white 
                         dark:hover:shadow-white dark:hover:bg-lightHover' key={index}>
                            <Image src={isDarkMode? iconDark : icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4  text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm font-Montserrat font-semibold dark:text-white/70'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 1.3, delay: 0.5}}  
                className='my-6 text-gray-700 font-Montserrat dark:text-white/70' >Tools I use</motion.h4>
                <motion.ul 
                initial={{opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 1.5, delay: 0.6}} 
                className='flex items-center gap-3 sm:gap-5'> 
                
                    {toolsData.map((tool, index) => (
                        <motion.li 
                        whileHover={{scale:1.1}}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer 
                         hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default About
