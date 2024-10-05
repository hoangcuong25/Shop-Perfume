import banner_offer from '../../assets/banner_offer.png';

const Offer = () => {

    return (
        <div className='flex justify-evenly items-center mt-7 mx-3'>
            <div>
                <h1 className="ct-text-header">Exclusive </h1>
                <h1 className="ct-text-header">Offers For You</h1>
                <button className='h-[25px] w-[100px] text-[13px] md:h-[30px] md:w-[120px] md:text-[15px] lg:h-[40px] lg:w-[135px] lg:text-[18px] xl:h-[45px] xl:w-[150px] xl:text-[20px] mt-3 bg-red-600 rounded-full'>Check Now</button>
            </div>

            <div>
                <img src={banner_offer} alt="" className='w-[380px] md:w-[500px] lg:w-[700px] xl:w-[850px] h-auto' />
            </div>
        </div>
    )
}

export default Offer