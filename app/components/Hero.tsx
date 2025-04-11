'use client'

import Image from 'next/image';
import Robot from '../../public/download-removebg-preview.png'
export default function Hero(){
const test = () =>{
alert("work")

}
return <div className='pt-16'>
    
   <h1 className='text-center text-[32px] text-[#36485C] font-medium leading-[40px]'>
   Start monitoring your website like a pro
   </h1>
   <Image className='mx-auto pt-5' alt="hero" src={Robot} />
   <div className='text-center'>
    <button className='bg-[#36485C] text-white p-2 rounded mx-5'onClick={test}>Try For Free</button>
    <button className='bg-[#36485C] text-white p-2 rounded mx-5'>View Pricing</button>
   </div>
    </div>
}
