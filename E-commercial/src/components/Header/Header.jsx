import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCartSimple } from "react-icons/pi";

const Header = () => {
    return (
        <>
            <div className='flex justify-between py-3 px-10'>
                {/* left side */}
                <div className='flex gap-6 group items-center'>
                    <img src={logo} alt="" className='w-[217px] h-[37px]' />
                    <div className='group relative'>
                        <input type="text"
                            placeholder="Search"
                            className='w-[300px] h-[35px] group-hover:w-[385px] transition-all duration-300 rounded-md border border-gray-300 px-6 focus:outline-none focus:border-primary'
                        />
                        <IoMdSearch className='absolute top-[10px] left-1 group-hover:text-primary' />
                    </div>

                </div>

                {/* right side */}
                <div className="flex items-center gap-10 px-10 relative">
                    <IoLocationOutline className='text-[30px] cursor-pointer hover:text-primary' />
                    <CiDeliveryTruck className='text-[37px] cursor-pointer hover:text-primary' />
                    <MdOutlineFavoriteBorder className='text-[30px] cursor-pointer hover:text-primary' />
                    <VscAccount className='text-[28px] cursor-pointer hover:text-primary' />
                    <PiShoppingCartSimple className='text-[37px] cursor-pointer hover:text-primary' />
                    <p className='bg-red-600 py-0 px-[5px] rounded-full absolute right-9 top-0 text-[13px]'>0</p>
                </div>
            </div>
            <hr className='mb-2'/>
        </>
    )
}

export default Header