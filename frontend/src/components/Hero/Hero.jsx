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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from '../../assets/HeroBanner'

const Hero = () => {

    const { setMenu } = useContext(ShopContext)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };

    console.log(HeroBanner)
    return (
        <>
            <div className=''>
                <Slider {...settings}>
                    {HeroBanner.map((banner, index) => {
                        return (
                            <div key={index} className='!important flex justify-center'>
                                <img src={banner} alt="" />
                            </div>
                        )
                    })}
                </Slider>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='ct-text-header my-7'>OUR FRAGRANCE BRANDS</h1>
                <div className='gap-4 md:gap-6 lg:gap-8 xl:gap-12  flex cursor-pointer items-center'>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/Dolce&Gabbana' onClick={() => setMenu('brand')}>
                            <img src={dolce_gabbana_logo} alt="" className='w-[85px] md:w-[120px] lg:w-[150px] xl:w-[170px] ct-hero-brand' />
                        </Link>
                    </div>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/CarolinaHerrera' onClick={() => setMenu('brand')}>
                            <img src={carolina_herrera_logo} alt="" className='w-[85px] md:w-[120px] lg:w-[150px] xl:w-[170px] ct-hero-brand' />
                        </Link>
                    </div>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/Gucci' onClick={() => setMenu('brand')}>
                            <img src={gucci_logo} alt="" className='w-[85px] md:w-[120px] lg:w-[150px] xl:w-[170px] ct-hero-brand' />
                        </Link>
                    </div>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/MarcJacobs' onClick={() => setMenu('brand')}>
                            <img src={marc_jacobs_logo} alt="" className='w-[85px] md:w-[120px] lg:w-[150px] xl:w-[170px] ct-hero-brand' />
                        </Link>
                    </div>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/TOMFORD' onClick={() => setMenu('brand')}>
                            <img src={tom_ford_logo} alt="" className='w-[85px] md:w-[120px] lg:w-[150px] xl:w-[170px] ct-hero-brand' />
                        </Link>
                    </div>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/Versace' onClick={() => setMenu('brand')}>
                            <img src={versace_logo} alt="" className='w-[68px] md:w-[80px] lg:w-[95px] xl:w-[105px] ct-hero-brand' />
                        </Link>
                    </div>
                </div>
                <div className='gap-5 md:gap-8 lg:gap-10 xl:gap-12 flex my-7 items-center'>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/women' onClick={() => setMenu('women')}><div className='ct-hero-img'>
                            <img src={for_her} alt="" className='ct-hero-end' />
                            <h1 className='pt-1'>For Her</h1>
                        </div>
                        </Link>
                    </div>

                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/men' onClick={() => setMenu('men')}><div className='ct-hero-img'>
                            <img src={for_him} alt="" className='ct-hero-end' />
                            <p className='pt-1'>For Him</p>
                        </div>
                        </Link>
                    </div>

                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/new-trending' onClick={() => setMenu('new')}><div className='ct-hero-img'>
                            <img src={new_in} alt="" className='ct-hero-end' />
                            <h1 className='pt-1'>New In</h1>
                        </div>
                        </Link>
                    </div>

                    <div onClick={() => window.scrollTo(0, 0)}>
                        <Link to='/discovery' onClick={() => setMenu('discovery')}><div className='ct-hero-img'>
                            <img src={sale} alt="" className='ct-hero-end' />
                            <h1 className='pt-1'>Sale</h1>
                        </div>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero