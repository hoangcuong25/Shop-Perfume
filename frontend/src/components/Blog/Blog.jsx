const Blog = (props) => {
    return (
        <div className="flex flex-col items-center hover:scale-105 transition-all duration-500">
            <img src={props.image} alt="" className="w-[135px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto px-1" />
            <h3 className=" text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] px-9 py-3 font-semibold text-center">{props.title}</h3>
            <h3 className="text-[0px] md:text-[11px] lg:text-[12px] xl:text-[13px] px-7 text-center ">{props.intro}</h3>
        </div>
    )
}

export default Blog