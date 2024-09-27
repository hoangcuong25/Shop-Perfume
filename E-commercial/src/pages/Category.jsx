import all_item from '../assets/all_item'
import Item from '../components/Item/Item'

const Category = (props) => {
    return (
        <div className='flex flex-col'>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[53px] flex justify-center items-center mb-5 uppercase">
                <h1 className="text-white flex text-[30px] pb-1">{props.category}'s</h1>
            </div>
            <img src={props.banner} alt="" />
            <div className='grid grid-cols-4 my-7 mx-3'>
                {all_item.map((item, index) => {
                    if (props.category === item.category) {
                        return <Item key={index} image={item.image} brands={item.brands}
                            name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    return null
                })}
            </div>
            <img src={props.banner1} alt="" />
        </div>
    )
}

export default Category