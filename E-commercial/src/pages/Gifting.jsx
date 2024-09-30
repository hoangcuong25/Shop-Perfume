import banner3 from '../assets/banner3.jpg'
import Item from '../components/Item/Item'
import Gift from "../assets/Gift"

const Gifting = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[53px] flex justify-center items-center">
                <h1 className="text-white flex text-[30px] pb-1">Gifting For Her And For Him</h1>
            </div>
            <img src={banner3} alt="" className="mt-4 px-10" />
            <div className='grid grid-cols-4 mt-7 mx-3'>
                {Gift.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image} brands={item.brands} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Gifting