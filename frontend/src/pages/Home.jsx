import About from "../components/About/About"
import Hero from "../components/Hero/Hero"
import LastestBlog from "../components/LastestBlog/LastestBlog"
import NewsLetter from "../components/NewLetter/NewLetter"
import Offer from "../components/Offer/Offer"
import Recommend from "../components/Recommend/Recommend"
import { BsChatLeftText } from "react-icons/bs";



function Home() {
    return (
        <div>
            <div className="fixed z-50 right-3 bottom-5 cursor-pointer bg-pink-700 size-10 flex items-center justify-center rounded-full">
                <BsChatLeftText className="size-6" />
            </div>
            <Hero />
            <Offer />
            <Recommend />
            <LastestBlog />
            <NewsLetter />
            <About />
        </div>
    )
}

export default Home