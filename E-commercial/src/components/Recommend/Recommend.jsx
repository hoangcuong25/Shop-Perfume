import recommend_item from '../../assets/recommned_item'
import Item from '../Item/Item'

const Recommend = () => {
    return (
        <>
            <h1 className='flex justify-center text-[40px] mt-12 font-semibold'>Recommend For You</h1>
            <div className='grid grid-cols-4 mx-3'>
                {recommend_item.map((item, index) => {
                    return <Item key={index} image={item.image} brands={item.brands} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </>
    )
}

export default Recommend