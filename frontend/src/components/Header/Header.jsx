import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/Context';
import { LuMenu } from "react-icons/lu";

const Header = () => {

    const { setMenu, getTotalCartItems } = useContext(ShopContext)

    return (
        <>
            <div className='flex justify-between py-3 px-10'>
                {/* left side */}
                <div className='flex gap-6 group items-center'>
                    <Link to='/' onClick={() => setMenu('home')}><img src={logo} alt="" className='w-[217px] h-[37px]' />{ }</Link>
                    <div className='group relative'>
                        <input type="text"
                            placeholder="Search"
                            className='xl:w-[300px] h-[35px] xl:group-hover:w-[385px]
                            lg:w-[230px] lg:group-hover:w-[300px]
                            md:w-[230px] md:hover:border-primary md:block
                            hidden  transition-all duration-300 rounded-md border
                            border-gray-300 px-6 focus:outline-none focus:border-primary'
                        />
                        <IoMdSearch className='absolute md:top-[10px] md:left-1 md:text-[17px] top-[-15px] text-[28px]  group-hover:text-primary ' />
                    </div>

                </div>

                {/* right side */}
                <div className="flex items-center gap-10 px-10">
                    <div className='relative group lg:flex hidden'>
                        <IoLocationOutline className='text-[30px] cursor-pointer hover:text-primary' />
                        <span className='hidden absolute bg-blue-300 w-20 group-hover:flex justify-center items-center rounded-full left-[-20px] bottom-[-37px]'>
                            Location
                        </span>
                    </div>

                    <div className='relative group lg:flex hidden'>
                        <CiDeliveryTruck className='text-[37px] cursor-pointer hover:text-primary' />
                        <span className='hidden absolute bg-blue-300 w-20 group-hover:flex justify-center items-center rounded-full left-[-20px] bottom-[-37px]'>
                            Delivery
                        </span>
                    </div>

                    <div className='relative group lg:flex hidden'>
                        <MdOutlineFavoriteBorder className='text-[30px] cursor-pointer hover:text-primary' />
                        <span className='hidden absolute bg-blue-300 w-20 group-hover:flex justify-center items-center rounded-full left-[-20px] bottom-[-37px]'>
                            Whistlist
                        </span>
                    </div>

                    <div className='relative group lg:flex hidden'>
                        <Link to='/log-in'><VscAccount className='text-[28px] cursor-pointer hover:text-primary' /></Link>
                        <span className='hidden absolute bg-blue-300 w-20 group-hover:flex justify-center items-center rounded-full left-[-20px] bottom-[-37px]'>
                            Login
                        </span>
                    </div>

                    <Link to='/cart' onClick={() => window.scrollTo(0, 0)}>
                        <div className='relative group'>
                            <PiShoppingCartSimple className='text-[37px] cursor-pointer hover:text-primary' />
                            <p className='bg-red-600 py-0 px-[5px] rounded-full absolute right-[-3px] top-0 text-[13px]'>{getTotalCartItems()}</p>
                            <span className='hidden absolute bg-blue-300 w-20 group-hover:flex justify-center items-center rounded-full left-[-20px] bottom-[-37px]'>
                                Cart
                            </span>
                        </div>
                    </Link>

                    <div className='relative'>
                        <LuMenu className='text-[28px] flex lg:hidden cursor-pointer peer' />

                        <div className="hidden peer-hover:flex hover:flex justify-evenly w-[210px] h-[223px] flex-col 
                            bg-white drop-shadow-lg absolute top-7 right-[-30px] z-10 border border-gray-400 dark:bg-[#010910]">

                            <div className='flex items-center ct-dropdown-menu gap-3'>
                                <IoLocationOutline className='text-[30px] cursor-pointer hover:text-primary' />
                                <div className="" >Location</div>
                            </div>

                            <div className='flex items-center ct-dropdown-menu gap-3'>
                                <CiDeliveryTruck className='text-[37px] cursor-pointer hover:text-primary' />
                                <div className="" > Delivery</div>
                            </div>

                            <div className='flex items-center ct-dropdown-menu gap-3'>
                                <MdOutlineFavoriteBorder className='text-[30px] cursor-pointer hover:text-primary' />
                                <div className="" >Whistlist</div>
                            </div>

                            <Link to='/log-in' className='flex items-center ct-dropdown-menu gap-3'>
                                <VscAccount className='text-[28px] cursor-pointer hover:text-primary' />
                                <div className="" >Login</div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='mb-2' />
        </>
    )
}

export default Header