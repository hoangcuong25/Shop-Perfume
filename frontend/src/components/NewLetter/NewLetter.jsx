const NewsLetter = () => {
    return (
        <div className="flex flex-col items-center newletter mt-12 mx-3">
            <h1 className="ct-text-header text-gray-500">Get Exclusive Offers On Your Email ?</h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] py:py-3 md:py-4 lg:py-5 xl:py-6 ">Subcirbe to our newletter and stay updated</p>
            <div className="w-[337px] h-[40px] md:w-[450px] md:h-[45px] lg:w-[480px] lg-h[48px] xl:w-[500px] xl:h-[50px] 
                            border-solid border-[1px]
                            outline-none border-gray-300 rounded-full 
                            relative hover:border-primary">
                <input type="email"
                    placeholder="Your Email Address"
                    className="top-[5px] md:top-2 left-3 lg:top-2 lg:left-3 xl:top-3 xl:left-4 w-72 absolute border-none outline-none focus:border-primary" />
                <button className="w-[70px] h-[40px] text-[12px] 
                md:w-[80px] md:h-[45px] md:text-[14px] md:top-[-1px]
                lg:w-[100px] lg:h-[48px] lg:text-[16px] lg:top-[-2.5px]
                xl:w-[113px] xl:h-[50px] xl:text-[18px] xl:top-[-1px] right-[-3px] 
                absolute  bg-black text-white rounded-full">Subcribe</button>
            </div>

        </div>
    )

}

export default NewsLetter