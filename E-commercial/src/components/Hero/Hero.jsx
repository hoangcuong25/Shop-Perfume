import main_banner from '../../assets/main-banner.png'
import dolce_gabbana_logo from '../../assets/dolce_gabbana_logo.png'
import carolina_herrera_logo from '../../assets/Carolina_Herrera_Brand_Logo.png'
import gucci_logo from '../../assets/Gucci_Brand_Logo.png'
import marc_jacobs_logo from '../../assets/Marc_Jacobs_Logo.png'
import tom_ford_logo from '../../assets/Tom_Ford_logo.png'
import versace_logo from '../../assets/Versace_logo.png'
import for_her from '../../assets/for_her.png'
import for_him from '../../assets/for_him.png'
import new_in from '../../assets/new_in.png'
import sale from '../../assets/sale.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from "../../Context/Context"

const Hero = () => {

    const { setMenu } = useContext(ShopContext)

    return (
        <div className='flex flex-col items-center'>
            <img src={main_banner} alt="" />
            <h1 className='text-[40px] my-7 font-semibold'>OUR FRAGRANCE BRANDS</h1>
            <div className='flex gap-12'>
                <img src={dolce_gabbana_logo} alt="" className='w-[130px] h-[20px] hover:scale-110 transition-all duration-700' />
                <img src={carolina_herrera_logo} alt="" className='w-[130px] h-[20px] hover:scale-110 transition-all duration-700' />
                <img src={gucci_logo} alt="" className='w-[130px] h-[20px] hover:scale-110 transition-all duration-700' />
                <img src={marc_jacobs_logo} alt="" className='w-[110px] h-[20px] hover:scale-110 transition-all duration-700' />
                <img src={tom_ford_logo} alt="" className='w-[130px] h-[25px] hover:scale-110 transition-all duration-700' />
                <img src={versace_logo} alt="" className='w-[100px] h-[30px] hover:scale-110 transition-all duration-700' />
            </div>
            <div className='flex gap-12 my-7'>
                <div onClick={() => window.scrollTo(0, 0)}>
                    <Link to='/women' onClick={() => setMenu('women')}><div className='flex flex-col items-center hover:scale-105 transition-all duration-700'>
                        <img src={for_her} alt="" className='h-[200px] w-[200px]' />
                        <h1 className='pt-1'>For Her</h1>
                    </div>
                    </Link>
                </div>

                <div onClick={() => window.scrollTo(0, 0)}>
                    <Link to='/men' onClick={() => setMenu('men')}><div className='flex flex-col items-center hover:scale-105 transition-all duration-700'>
                        <img src={for_him} alt="" className='h-[200px] w-[200px]' />
                        <p className='pt-1'>For Him</p>
                    </div>
                    </Link>
                </div>

                <div onClick={() => window.scrollTo(0, 0)}>
                    <Link to='/new-trending' onClick={() => setMenu('new')}><div className='flex flex-col items-center hover:scale-105 transition-all duration-700'>
                        <img src={new_in} alt="" className='h-[200px] w-[200px]' />
                        <h1 className='pt-1'>New In</h1>
                    </div>
                    </Link>
                </div>

                <div onClick={() => window.scrollTo(0, 0)}>
                    <Link to='/women'><div className='flex flex-col items-center hover:scale-105 transition-all duration-700'>
                        <img src={sale} alt="" className='h-[200px] w-[200px]' />
                        <h1 className='pt-1'>Sale</h1>
                    </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Hero