import Feature1 from '../../public/feature1.svg'
import Image from 'next/image'

export default function Features() {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col  lg:flex-row-reverse justify-center gap-[25px] lg:pt-[100px] lg:px-[50px] py-[50px] px-[25px]'>

            <div>
                <p className="font-medium text-[16px]"> Customer Support</p>
                <p className="font-medium text-[24px]"> Get in touch with your customers</p>

            </div>

            <Image alt='feature1' src={Feature1} className='w-[300px] lg:w-[400px] pt-5 hover:scale-110 duration-200 ' />

        </div>
    )
}