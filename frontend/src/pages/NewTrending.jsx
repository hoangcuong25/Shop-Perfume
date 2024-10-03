import banner from '../assets/banner.png'
import new_trending from '../assets/new_trending'
import Item from '../components/Item/Item'
import Recommend from '../components/Recommend/Recommend'

const NewTrending = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[53px] flex justify-center items-center">
                <h1 className="text-white flex text-[30px] pb-1">Discovery New Fragrances</h1>
            </div>
            <div className='mt-5 flex justify-center relative '>
                <img src={banner} alt="" />
            </div>
            <div className='ct-grid-item '>
                {new_trending.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image} brands={item.brands} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            <Recommend />
        </div>
    )
}

export default NewTrending