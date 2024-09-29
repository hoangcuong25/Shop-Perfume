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
                <li onClick={() => setMenu('brand')} ><Link className="flex items-center gap-1">BRANDS<IoIosArrowDown /></Link>{menu === 'brand' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('offer')}><Link>OFFER</Link>{menu === 'offer' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('gifting')}><Link>GIFTING</Link>{menu === 'gifting' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('face')}><Link>FACE AND BODY</Link>{menu === 'face' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('discovery')}><Link>DISCOVERY</Link>{menu === 'discovery' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
                <li onClick={() => setMenu('blog')}><Link>BLOG</Link>{menu === 'blog' ? <hr className="w-[100%] border-red-700" /> : <></>}</li>
            </ul>
            <hr className='my-3' />
        </div >
    )
}

export default Navbar