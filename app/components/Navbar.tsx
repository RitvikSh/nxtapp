import Image from "next/image";
import Logo from "../../public/Logo.svg"
import User from "../../public/User.svg"
import Menu from "../../public/Menu.svg"
const navlinks = [
    {
        
        name: "Home",
        
    },{
        name: "About",
        
    },{
        name: "Services",
        
    },{
        name: "Contact",
    }
]

export default function Navbar (){
    return <>
    <div className="w-full flex items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
        
        <div className="flex items-center gap-[74px]">
        <Image alt="logo" src={Logo} />

            <div className='hidden lg:flex  gap-[74px] font-medium text-[#36485C]'>
               {navlinks.map((link, index) =>(
                <p key={index}>
                    {link.name}
                </p>
               ))}
               </div>  
            </div>
        <div className="flex  gap-[20px]">
            <Image alt="user" src={User} />
            <span className="hidden font-medium text-[#36485C] lg:block">Sign In</span>
            <Image className="lg:hidden" alt="menu" src={Menu} />
        </div>
    </div>
    </>
}