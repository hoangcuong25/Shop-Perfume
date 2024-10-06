import all_item from '../assets/all_item'
import Item from '../components/Item/Item'
import Recommend from '../components/Recommend/Recommend'


const Category = (props) => {

    const categoryLength = () => {
        let length = 0;
        for (let item of all_item) { // Use "for...of" to iterate over array elements
            if (props.category === item.category) {
                length += 1; // Increment length by 1
            }
        }
        return length; // Return the length after the loop
    }


    return (
        <div className='flex flex-col'>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[53px] flex justify-center items-center mb-5 uppercase">
                <h1 className="text-white flex text-[30px] pb-1">{props.category}'s</h1>
            </div>
            <img src={props.banner} alt="" className='' />
            <div className='mt-5 text-center'>
                <span className='capitalize'>{categoryLength()} Results - {props.category}'s</span>
            </div>
            <div className='ct-grid-item'>
                {all_item.map((item, index) => {
                    if (props.category === item.category) {
                        return <Item key={index} id={item.id} image={item.image} brands={item.brands}
                            name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    return null
                })}
            </div>
            <img src={props.banner1} alt="" className='' />
            <Recommend />
        </div>
    )
}

export default Category