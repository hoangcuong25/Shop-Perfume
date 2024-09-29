import { useContext } from "react"
import { ShopContext } from "../../Context/Context"
import { TiDeleteOutline } from "react-icons/ti";

const CartItem = () => {

    const { cartItems, all_item, getTotalCartAmount, removeFromCart } = useContext(ShopContext)

    return (
        <div className="mt-8 mx-10">
            <p className="text-[35px] mb-7 font-bold">SHOPPING CART</p>
            <div className="grid grid-cols-6 text-center">
                <p>Prodcuts</p>
                <p>Tittle</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_item.map((item, index) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div>
                            <div className="grid grid-cols-6 text-center">
                                <div className="flex justify-center">
                                    <img src={item.image} alt="" className="size-[100px]" />
                                </div>
                                <p className="text-left">{item.name}</p>
                                <p>{item.new_price}</p>
                                <p>{cartItems[item.id]}</p>
                                <p>{item.new_price * cartItems[item.id]}</p>
                                <div className="flex justify-center">
                                    <TiDeleteOutline onClick={() => { removeFromCart(item.id) }} className="flex items-center justify-center text-[30px] cursor-pointer " />
                                </div>

                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="flex mt-12 mx-10">
                <div className="">
                    <h1 className="text-[28px] mb-3 font-semibold">Cart Totals</h1>
                    <div>
                        <div className="text-[17px]">
                            <p>Subtatal:</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="mt-3 text-[17px]">
                            <p>Shipping Fee:</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="mt-3 text-[17px]">
                            <h3>Total:</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="mt-5 text-[20px] font-semibold bg-red-600 w-96 h-16 text-white">PROCEED TO CHECKOUT</button>
                </div>
                <div className="mx-36">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="flex border border-gray-300 w-80 h-10 mt-3">
                        <input type="text" 
                        placeholder="Promo code" 
                        className="focus:outline-none px-2 w-64" />
                        <button className="bg-red-600 w-28 text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem