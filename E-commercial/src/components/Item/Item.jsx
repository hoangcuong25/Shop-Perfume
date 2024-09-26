const Item = (props) => {
    return (
        <div className="flex  flex-col justify-center items-center hover:scale-105 transition-all duration-500">
            <img src={props.image} alt="" className="w-[273px] h-[273px]" />
            <h3 className="font-semibold text-[22px]">{props.brands}</h3>
            <h4 className="italic">{props.name}</h4>
            <h5 className="mt-3 text-[13px]">New Price: ${props.new_price}</h5>
            <h5 className="line-through text-[13px] text-slate-400	color: rgb(71 85 105);">Old Price ${props.old_price}</h5>
        </div>
    )
}

export default Item