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
                <img src={nextarrow} alt="" />
            </div>
        ),
        prevArrow: (
            <div>
                <img src={nextarrow} alt="" className='rotate-180' />
            </div>
        ),
    };

    return (
        <div className='mx-10'>
            <h1 className='flex justify-center text-[40px] mt-12 font-semibold'>Recommend For You</h1>
            <div className="">
                <Slider {...settings}>
                    {recommend_item.map((item, index) => {
                        return (
                            <Link to={`/product/${item.id}`} onClick={() => window.scrollTo(0, 0)} key={index}>
                                <div className=' flex flex-col !important justify-center items-center hover:scale-105 transition-all duration-500' >
                                    <img src={item.image} alt="" className='size-[273px] ' />
                                    <h3 className="font-semibold text-[22px]">{item.brands}</h3>
                                    <h4 className="italic">{item.name}</h4>
                                    <h5 className="mt-3 text-[13px]">New Price: ${item.new_price}</h5>
                                    <h5 className="line-through text-[13px] text-slate-400 mb-7	color: rgb(71 85 105);">Old Price ${item.old_price}</h5>
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