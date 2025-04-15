'use client'

import Image from 'next/image';
import Robot from '../../public/download-removebg-preview.png'
import HeroImage from '../../public/hero.svg'
import Gradient from '../../public/Gradient.svg'
export default function Hero() {
    const test = () => {
        alert("working")

    }
    return <div className='pt-16'>

        <h1 className='text-center text-[32px] text-[#36485C] font-medium leading-[40px]'>
            Start monitoring your website like a pro
        </h1>
        <Image className='mx-auto pt-5 opacity-50 hover:opacity-100' alt="hero" src={Robot} />
        <div className='text-center'>
            <button className='bg-[#36485C] text-white p-3 rounded mx-10 hover:scale-125 duration-300' onClick={test}>Try For Free</button>
            <button className='bg-[#36485C] text-white p-3 rounded mx-10 hover:scale-125 duration-300' onClick={test}>View Pricing</button>
        </div>
        <div className='relative h-full w-full flex justify-center'>
            <Image src={Gradient} alt='gradient' className='w-full min-h-[200px]' />
            <div className='absolute'>
                <Image src={HeroImage} alt='hero' className='lg:w-[800px] mr-2 mt-14 hover:scale-110 duration-500' />
                <h2 className='text-center text-[16px] font-small'>Trusted by these companies</h2>
            </div>


        </div>




    </div>
}
