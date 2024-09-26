const Blog = (props) => {
    return (
        <div className="flex flex-col items-center">
            <img src={props.image} alt=""  className="h-[100px] w-[180px]"/>
            <h3 className="px-9 py-3 font-semibold text-center">{props.title}</h3>
            <h3 className="px-3 text-center text-[13px]">{props.intro}</h3>
        </div>
    )
}

export default Blog