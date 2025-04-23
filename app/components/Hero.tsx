'use client'

import Image from 'next/image';
import Robot from '../../public/download-removebg-preview.png'
import HeroImage from '../../public/hero.svg'
import Gradient from '../../public/Gradient.svg'
import Marquee from 'react-fast-marquee';
import Company1 from '../../public/Vector (1).svg'
import Company2 from '../../public/Vector (2).svg'
import Company3 from '../../public/Vector (3).svg'
import Company4 from '../../public/Vector (4).svg'
import Company5 from '../../public/Vector.svg'

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
            <div className='absolute flex flex-col justify-center items-center'>
                <Image src={HeroImage} alt='hero' className='lg:w-[800px] mt-14 hover:scale-110 duration-500' />
                <h2 className='text-center text-[16px] font-small'>Trusted by these companies</h2>
                <Marquee className='flex justify-center items-center mt-5' speed={50} gradient={false} pauseOnHover={true} autoFill={true} loop={0}>
                    <Image alt='company' src={Company1} className='mx-5 lg
                    : w-[150px]' />
                    <Image alt='company' src={Company2} className='mx-5 lg
                    : w-[150px]' />
                    <Image alt='company' src={Company3} className='mx-5 lg
                    : w-[150px]' />
                    <Image alt='company' src={Company4} className='mx-5 lg
                    : w-[150px]' />
                    <Image alt='company' src={Company5} className='mx-5 lg
                    : w-[150px]' />
                </Marquee>
            </div>


        </div>




    </div>
}
