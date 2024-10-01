import Item from "../components/Item/Item"
import all_item from "../assets/all_item"
import banner2 from '../assets/banner2.jpg'
import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";

const Discovery = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(12)

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = all_item.slice(firstPostIndex, lastPostIndex)

    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] h-[53px] flex justify-center items-center">
                <h1 className="text-white flex text-[30px] pb-1">Discovery All Product</h1>
            </div>

            <div className="flex justify-center">
                <img src={banner2} alt="" className="mt-4 px-10" />
            </div>

            <div className='grid grid-cols-4 mt-7 mx-3'>
                {currentPosts.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image} brands={item.brands} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>

            <Pagination
                totalPosts={all_item.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}
                setPostPerPage={setPostPerPage} currentPage={currentPage}
            />
        </div>
    )
}

export default Discovery