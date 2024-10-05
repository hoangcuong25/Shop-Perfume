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
            <div className='flex justify-center'>
                <img src={banner4} alt="" className="mt-4 " />
            </div>

            <div className='mt-5 text-center'>
                <span>{FaceBodyItem.length} Results - Bath And Body</span>
            </div>

            <div className='ct-grid-item'>
                {FaceBodyItem.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image} brands={item.brands} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            <Recommend />
        </div>
    )
}

export default FaceBody