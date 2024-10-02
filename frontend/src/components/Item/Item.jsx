import { Link } from "react-router-dom"

const Item = (props) => {
    return (
        <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-500 mx-3">
                <img src={props.image} alt="" className=" lg:size-[273px] md:size-[237px] size-[185px]" />
                <h3 className="font-semibold lg:text-[22px] ">{props.brands}</h3>
                <h4 className="italic w-[300px] text-center lg:text-[16px] lg:px-8 px-10">{props.name}</h4>
                <h5 className="mt-3 lg:text-[17px]  md:text-[13px]">New Price: ${props.new_price}</h5>
                <h5 className="line-through lg:text-[17px] md:text-[13px]  text-slate-400  color: rgb(71 85 105);">Old Price ${props.old_price}</h5>
            </div>
        </Link>
    )
}

export default Item