const NewsLetter = () => {
    return (
        <div className="flex flex-col items-center newletter mt-12">
            <h1 className="text-[40px] text-gray-500">Get Exclusive Offers On Your Email ?</h1>
            <p className="py-6">Subcirbe to our newletter and stay updated</p>
            <div className="border-solid border-[1px]
            outline-none border-gray-300 rounded-full w-[500px] h-[50px]
            relative hover:border-primary">
                <input type="email"
                    placeholder="Your Email Address"
                    className="w-72 absolute top-3 left-4 border-none outline-none focus:border-primary" />
                <button className="absolute top-0 right-0 bg-black text-white w-[113px] h-[50px] rounded-full">Subcribe</button>
            </div>

        </div>
    )

}

export default NewsLetter