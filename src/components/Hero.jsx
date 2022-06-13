import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div >
        <div className="grid grid-cols-3 max-w-[1240px] mx-auto h-auto justify-items-start">

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5,ease:"easeInOut",delay:1.3}}
            className='absolute top-[32%] right-[19%]'>
                <img src={require('../assets/dots.png')} width={25} alt="dots" />
            </motion.div>

            <motion.img 
            initial={{x:-50,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.8,ease:"easeInOut",delay:0.5}}
            src={require('../assets/banner.png')}  className="col-span-2 w-[90%]" alt="Banner" />

            <motion.div 
            initial={{x:50,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.8,ease:"easeInOut",delay:0.5}}
            className="col-span-1 mt-[40%] flex gap-5 flex-col w-full justify-items-start">
                
                <h1 className="text-7xl text-primarydark font-extrabold font-sans">Puffed</h1>
                <h1 className="text-7xl text-primary font-extrabold font-sans drop-shadow-md">Rice</h1>


                <p className="font-Archivo text-lg font-medium">
                Everyone loves muri. Starting from a doctor, engineer, teacher, businessman, entrepreneur, daily wage workers, musician, farmer, builder, reporter, soldier and many more
                </p>

                <button className="btn px-2 w-[50%] py-3 flex justify-center">Choose flavour <img src={require('../assets/right_arrow.png')} width={7} height={7} className="ml-2 mt-1" alt="" /> </button>

                <div className='relative bottom-0 right-[-100px] top-[50px]'>
                    <img src={require('../assets/follow_us.png')} width={200} alt="Follow Us" />
                </div>

            </motion.div>

        </div>
    </div>
  )
}

export default Hero