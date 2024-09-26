import recommend_item from '../../assets/recommned_item'
import Item from '../Item/Item'

const Recommend = () => {
    return (
        <div className='grid grid-cols-4 mt-12'>
            {recommend_item.map((item, index) => {
                return <Item key={index} image={item.image} brands={item.brands} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    )
}

export default Recommend