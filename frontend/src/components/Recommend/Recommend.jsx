import recommend_item from '../../assets/recommned_item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import nextarrow from '../../assets/nextarrow.png'

const Recommend = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: (
            <div>
                <img src={nextarrow} alt="" className='xl:flex hidden' />
            </div>
        ),
        prevArrow: (
            <div>
                <img src={nextarrow} alt="" className='rotate-180 xl:flex hidden' />
            </div>
        ),
    };

    return (
        <div
            data-aos="fade-up"
            className='mx-2 md:mx-5 lg:mx-8 xl:mx-10'>
            <h1 className='ct-text-header flex justify-center mt-12'>Recommend For You</h1>
            <div className="">
                <Slider {...settings}>
                    {recommend_item.map((item, index) => {
                        return (
                            <Link to={`/product/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={index}>
                                <div className=' flex flex-col !important justify-center items-center hover:scale-105 transition-all duration-500 mx-1' >
                                    <img src={item.image} alt="" className='w-[150px] md:w-[210px] lg:w-[250px] xl:w-[273px] h-auto' />
                                    <h3 className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-semibold">{item.brands}</h3>
                                    <h4 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] italic">{item.name}</h4>
                                    <h5 className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] mt-3">New Price: ${item.new_price}</h5>
                                    <h5 className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] line-through text-slate-400 mb-7 color: rgb(71 85 105);">Old Price ${item.old_price}</h5>
                                </div>
                            </Link>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Recommend