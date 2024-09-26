import banner_offer from '../../assets/banner_offer.png';

const Offer = () => {
    return (
        <div className='flex justify-evenly items-center mt-7'>
            <div>
                <h1 className="text-[40px]">Exclusive </h1>
                <h1 className="text-[40px]">Offers For You</h1>
                <button className='mt-3 text-[20px] bg-red-600 h-[45px] w-[150px] rounded-full'>Check Now</button>
            </div>

            <div>
                <img src={banner_offer} alt="" className='h-[450px] w-[650px]' />
            </div>
        </div>
    )
}

export default Offer