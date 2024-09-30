import Item from "../components/Item/Item"
import Recommend from "../components/Recommend/Recommend"
import all_item from '../assets/all_item'
import banner1 from '../assets/banner1.jpg'

const Brands = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[53px] flex justify-center items-center">
                <h1 className="text-white flex text-[30px] pb-1">All Perfume Brands</h1>
            </div>
            <img src={banner1} alt="" className="my-3 px-10"/>
            <h1 className="text-[40px] font-bold text-center">Carolina Herrera</h1>
            <div className='grid grid-cols-4 my-7 mx-3 '>
                {all_item.map((item, index) => {
                    if (item.brands === `Carolina Herrera`) {
                        return <Item key={index} id={item.id} image={item.image} brands={item.brands}
                            name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    return null
                })}
            </div>

            <h1 className="text-[40px] font-bold text-center">Dolce & Gabbana</h1>
            <div className='grid grid-cols-4 my-7 mx-3 '>
                {all_item.map((item, index) => {
                    if (item.brands === `Dolce & Gabbana`) {
                        return <Item key={index} id={item.id} image={item.image} brands={item.brands}
                            name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    return null
                })}
            </div>

            <h1 className="text-[40px] font-bold text-center">Gucci</h1>
            <div className='grid grid-cols-4 my-7 mx-3'>
                {all_item.map((item, index) => {
                    if (item.brands === `Gucci`) {
                        return <Item key={index} id={item.id} image={item.image} brands={item.brands}
                            name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    return null
                })}
            </div>

            <h1 className="text-[40px] font-bold text-center">TOM FORD</h1>
            <div className='grid grid-cols-4 my-7 mx-3'>
                {all_item.map((item, index) => {
                    if (item.brands === `TOM FORD`) {
                        return <Item key={index} id={item.id} image={item.image} brands={item.brands}
                            name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    return null
                })}
            </div>

            <h1 className="text-[40px] font-bold text-center">Versace</h1>
            <div className='grid grid-cols-4 my-7 mx-3'>
                {all_item.map((item, index) => {
                    if (item.brands === `Versace`) {
                        return <Item key={index} id={item.id} image={item.image} brands={item.brands}
                            name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    return null
                })}
            </div>

            <h1 className="text-[40px] font-bold text-center">Marc Jacobs</h1>
            <div className='grid grid-cols-4 my-7 mx-3'>
                {all_item.map((item, index) => {
                    if (item.brands === `Marc Jacobs`) {
                        return <Item key={index} id={item.id} image={item.image} brands={item.brands}
                            name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    return null
                })}
            </div>
            <Recommend />
        </div>
    )
}

export default Brands