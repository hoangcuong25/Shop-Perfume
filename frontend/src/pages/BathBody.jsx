import FaceBodyItem from '../assets/FaceBodyItem'
import banner4 from '../assets/banner4.jpg'
import Item from '../components/Item/Item'
import Recommend from '../components/Recommend/Recommend'

const FaceBody = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[53px] flex justify-center items-center">
                <h1 className="text-white flex text-[30px] pb-1">Bath And Body</h1>
            </div>
            <img src={banner4} alt="" className="mt-4 px-10" />
            <div className='grid grid-cols-4 mt-7 mx-3'>
                {FaceBodyItem.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image} brands={item.brands} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            <Recommend />
        </div>
    )
}

export default FaceBody