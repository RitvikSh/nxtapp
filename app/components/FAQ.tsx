import Arrow from "../../public/Arrow.png"
import Image from "next/image"


const FAQ = () => {
  return (
    <div>
    <div className="lg:px-[80px] lg:py-[120px] my-[16px] mx-[16px] text-[#36485C] lg:flex lg:pr-[56px]">
        <div>
        <p className=" font-500 text-[14px] text-[#86B9F3]">Frequently Asked Questions</p>
        <p className="my-[16px] text-[24px] font-500"> Let’s clarify some of your questions</p>
        <p className="my-[16px] font-400 text-[16px] lg:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>

       <div>
        <div className="bg-[#E3F1FF] my-[8px] text-[16px] p-[16px] rounded-lg">
            <div className="text-[#000000] flex justify-between ">
            <p className="font-500 ">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam?
            </p>
            <p className="font-500 text-[30px]">
            -
            </p>
                </div>
                <p className="font-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
        </div>
        <div className="bg-[#E3F1FF] my-[8px]  text-[16px] p-[16px] rounded-lg">
            <div className="text-[#000000] flex justify-between">
            <p className="font-500 ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit? </p>
            <p className="font-500 text-[30px]">
            +
            </p>
                </div>
                
        </div>
        <div className="bg-[#E3F1FF] my-[8px]  text-[16px] p-[16px] rounded-lg">
            <div className="text-[#000000] flex justify-between">
            <p className="font-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit? </p>
            <p className="font-500 text-[30px]">
            +
            </p>
                </div>
                
        </div>
        <div className="bg-[#E3F1FF] my-[8px]  text-[16px] p-[16px] rounded-lg">
            <div className="text-[#000000] flex justify-between">
            <p className="font-500 ">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam? </p>
            <p className="font-500 text-[30px]">
            +
            </p>
                </div>
                
        </div>

        
       </div>


    </div>
    
    <div className="flex justify-center">

    
    <div className="text-center py-[88px] rounded-lg container text-[#FFFFFF] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <p  className=" font-500 text-[56px] ">Monitor your website<br></br>like a pro</p>
    <p className="font-400 text-[18px]"> Join over 800+ happy site owners boosting productivity and efficiency!</p>
    <div className="flex justify-center items-center my-[16px] gap-[20px]">
        <button className="font-500 text-[18px] border border-blue-600 rounded-sm p-[10px] hover:border-white hover:scale-105 transition-all duration-300 ease-in-out">
            Try for free
        </button>
        <button className=" transition duration-500 font-500 text-[18px] flex items-end hover:scale-105 ">
            Contact Sales
            <Image alt='arrow icon' src={Arrow} className="w-[15px] m-1"/>
        </button>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default FAQ