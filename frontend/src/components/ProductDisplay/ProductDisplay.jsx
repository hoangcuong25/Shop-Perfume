import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";

const ProductDisplay = (props) => {

    const { product } = props
    const {addToCart} = useContext(ShopContext)
    return (
        <div className="flex">
            <div className="flex gap-5 ml-10">
                <div className="flex flex-col size-[73px]  gap-3">
                    <img src={product.image} alt="" className="flex border border-gray-300 rounded-md" />
                    <img src={product.image} alt="" className="flex border border-gray-300 rounded-md" />
                    <img src={product.image} alt="" className="flex border border-gray-300 rounded-md" />
                    <img src={product.image} alt="" className="flex border border-gray-300 rounded-md" />
                </div>

                <div>
                    <img src={product.image} alt="" className="size-[300px] mt-3" />
                </div>
            </div>

            <div>
                <h1 className="text-[40px]">{product.brands}</h1>
                <p className="italic text-[25px]">{product.name}</p>
                <div className="flex mt-3 ">
                    <FaStar /> <FaStar />  <FaStar />  <FaStar />
                    <FaStarHalfAlt />
                </div>
                <p className="text-[18px]">Highly rated by customers</p>
                <div className="flex gap-3 mt-3">
                    <p className="text-red-500 text-[25px] font-bold">${product.new_price}</p>
                    <p className="text-[25px] text-gray-400 line-through">${product.old_price}</p>
                </div>
                <div className="flex mt-8 mb-1 gap-1">
                    <Link to='/log-in'><p className="text-blue-700 underline">Log In</p></Link> <p>For Free Delivery</p>
                </div>
                <button onClick={() => addToCart(product.id)} className=" bg-red-500 w-52 h-12 rounded-md text-white text-[20px]">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductDisplay