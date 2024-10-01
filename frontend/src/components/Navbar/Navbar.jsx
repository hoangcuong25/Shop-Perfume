import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/Context"
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const { menu, setMenu } = useContext(ShopContext)

    return (
        <div>
            <ul className="flex gap-7 px-10">
                <li onClick={() => setMenu('home')}><Link to='/'>HOME</Link>{menu === 'home' ? <hr className="w-[100%]  border-red-700 " /> : <></>}</li>
                <li onClick={() => setMenu('new')}><Link to='/new-trending'>NEW & TRENDING</Link>{menu === 'new' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('men')}><Link to='/men'>MEN'S</Link>{menu === 'men' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('women')}><Link to='/women'>WOMEN'S</Link>{menu === 'women' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <div className="relative">
                    <li onClick={() => setMenu('brand')} className="peer">
                        <Link to='/brands' className="flex items-center gap-1">BRANDS<IoIosArrowDown /></Link>
                        {menu === 'brand' ? <hr className="w-[100%] border-red-700" /> : <></>}
                    </li>
                    <div className="hidden peer-hover:flex hover:flex justify-evenly w-[200px] h-[290px] flex-col 
                    bg-white drop-shadow-lg absolute top-6 z-10 border border-gray-400 dark:bg-[#010910]">
                        <Link to='/CarolinaHerrera'>
                            <div className="px-5 py-3 w-[200px] hover:bg-gray-200 dark:hover:bg-gray-800" >Carolina Herrera</div>
                        </Link >
                        <Link to='/TOMFORD'>
                            <div className="px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-800" >TOM FORD</div>
                        </Link>
                        <Link to='/MarcJacobs'>
                            <div className="px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-800" >Marc Jacobs</div>
                        </Link>
                        <Link to='/Versace'>
                            <div className="px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-800" >Versace</div>
                        </Link>
                        <Link to='/Gucci'>
                            <div className="px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-800" >Gucci</div>
                        </Link>
                        <Link to='/Dolce&Gabbana'>
                            <div className="px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-800" >Dolce & Gabbana</div>
                        </Link>
                    </div>

                </div>

                <li onClick={() => setMenu('gifting')}><Link to='gifting'>GIFTING</Link>{menu === 'gifting' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('bathandbody')}><Link to='bathandbody'>BATH AND BODY</Link>{menu === 'bathandbody' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('discovery')}><Link to='/discovery'>DISCOVERY</Link>{menu === 'discovery' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('blog')}><Link>BLOG</Link>{menu === 'blog' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
            </ul>
            <hr className='my-3' />
        </div >
    )
}

export default Navbar