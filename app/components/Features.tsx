import Feature1 from '../../public/feature1.svg'
import Image from 'next/image'

export default function Features() {
    return (
        <div className='flex-col ml-[10px] lg:flex-row-reverse justify-center   gap-[20px] lg:mt-[100px] mt-[50px] lg:mx-[50px] py-[50px]'>

            <div>
                <p className="font-medium text-[16px]"> Customer Support</p>
                <p className="font-medium text-[24px]"> Get in touch with your customers</p>

            </div>

            <Image alt='feature1' src={Feature1} className='w-[300px] lg:w-[400px] mt-5 hover:scale-110 duration-200 lg:mr-[24px] sm:ml-[10px]' />

        </div>
    )
}