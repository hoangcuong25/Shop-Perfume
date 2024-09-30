import Item from "../components/Item/Item"
import Recommend from "../components/Recommend/Recommend"
import all_item from '../assets/all_item'

const ParticularBrand = (props) => {
    return (
        <div>
            <p className="text-[40px] font-bold text-center">{props.brands}</p>
            <div className='grid grid-cols-4 my-7 mx-3'>
                {all_item.map((item, index) => {
                    if (props.brands === item.brands) {
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

export default ParticularBrand