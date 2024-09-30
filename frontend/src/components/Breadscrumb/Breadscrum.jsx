import { IoIosArrowForward } from "react-icons/io";

const Breadscrum = (props) => {

    const { product } = props

    return (
        <div className="flex ml-10 mb-7 text-[17px] items-center capitalize">
            Home <IoIosArrowForward /> {product.category} <IoIosArrowForward /> {product.brands}
            <IoIosArrowForward /> {product.name}
        </div>
    )
}

export default Breadscrum