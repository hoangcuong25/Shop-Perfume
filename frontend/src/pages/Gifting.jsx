import banner3 from '../assets/banner3.jpg'
import Item from '../components/Item/Item'
import Gift from "../assets/Gift"
import Recommend from '../components/Recommend/Recommend'

const Gifting = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[53px] flex justify-center items-center">
                <h1 className="text-white flex text-[30px] pb-1">Gifting For Her And For Him</h1>
            </div>

            <div className='flex justify-center'>
                <img src={banner3} alt="" className="mt-4" />
            </div>

            <div className='mt-5 text-center'>
                <span>{Gift.length} Results - Gifts</span>
            </div>

            <div className='ct-grid-item'>
                {Gift.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image} brands={item.brands} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            <Recommend />
        </div>
    )
}

export default Gifting