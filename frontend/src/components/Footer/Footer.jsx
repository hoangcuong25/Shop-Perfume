import ins_logo from '../../assets/instagram_icon.png'
import pin_logo from '../../assets/pintester_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from "../../Context/Context"

const Footer = () => {
    const { setMenu } = useContext(ShopContext)

    return (
        <div className="flex flex-col mt-20 mb-12 items-center gap-10 ">
            <div onClick={() => window.scrollTo(0, 0)}>
                <Link to='/' onClick={() => setMenu('home')}><img src={logo} alt="" className='w-[217px] h-[37px]' /></Link>
            </div>
            <ul className="gap-5 text-[12px] md:gap-12 md:text-[14px] lg:gap-20 lg:text-[16px] xl:gap-28 xl:text-[18px] flex ">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div>
                <div className="flex xl:gap-28 md:gap-16 gap-8">
                    <img src={ins_logo} alt="" className="w-[25px] h-[25px]" />
                    <img src={pin_logo} alt="" className="w-[25px] h-[25px]" />
                    <img src={whatsapp} alt="" className="w-[25px] h-[25px]" />
                </div>
            </div>
            <hr className="w-[80%] place-self-center" />
            <div className="place-self-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                <p>COPYRIGHT @ 2024 -ALL RIGHT RESERVED.</p>
            </div>
        </div>
    )
}

export default Footer