import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/Context"
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const { menu, setMenu } = useContext(ShopContext)

    return (
        <div>
            <ul className="flex gap-7 px-10">
                <li onClick={() => setMenu('home')} className="hover:text-[#0e3f5c]"><Link to='/'>HOME</Link>{menu === 'home' ? <hr className="w-[100%]  border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('new')} className="hover:text-[#0e3f5c]"><Link to='/new-trending'>NEW & TRENDING</Link>{menu === 'new' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('men')} className="hover:text-[#0e3f5c]"><Link to='/men'>MEN'S</Link>{menu === 'men' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('women')} className="hover:text-[#0e3f5c]"><Link to='/women'>WOMEN'S</Link>{menu === 'women' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <div className="relative">
                    <li onClick={() => setMenu('brand')} className="peer">
                        <Link to='/brands' className="flex items-center gap-1 hover:text-[#0e3f5c]">BRANDS<IoIosArrowDown /></Link>
                        {menu === 'brand' ? <hr className="w-[100%] border-red-700" /> : <></>}
                    </li>
                    <div className="hidden peer-hover:flex hover:flex justify-evenly w-[210px] h-[290px] flex-col 
                    bg-white drop-shadow-lg absolute top-6 z-10 border border-gray-400 dark:bg-[#010910]">
                        <Link to='/CarolinaHerrera'>
                            <div className="ct-dropdown-menu" >Carolina Herrera</div>
                        </Link >
                        <Link to='/TOMFORD'>
                            <div className="ct-dropdown-menu" >TOM FORD</div>
                        </Link>
                        <Link to='/MarcJacobs'>
                            <div className="ct-dropdown-menu" >Marc Jacobs</div>
                        </Link>
                        <Link to='/Versace'>
                            <div className="ct-dropdown-menu" >Versace</div>
                        </Link>
                        <Link to='/Gucci'>
                            <div className="ct-dropdown-menu" >Gucci</div>
                        </Link>
                        <Link to='/Dolce&Gabbana'>
                            <div className="ct-dropdown-menu" >Dolce & Gabbana</div>
                        </Link>
                    </div>

                </div>

                <li onClick={() => setMenu('gifting')} className="hover:text-[#0e3f5c]"><Link to='gifting'>GIFTING</Link>{menu === 'gifting' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('bathandbody')} className="hover:text-[#0e3f5c]"><Link to='bathandbody'>BATH AND BODY</Link>{menu === 'bathandbody' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('discovery')} className="hover:text-[#0e3f5c]"><Link to='/discovery'>DISCOVERY</Link>{menu === 'discovery' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('blog')} className="hover:text-[#0e3f5c]"><Link>BLOG</Link>{menu === 'blog' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
            </ul>
            <hr className='my-3' />
        </div >
    )
}

export default Navbar