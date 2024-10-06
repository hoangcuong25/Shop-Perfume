import About from "../components/About/About"
import Hero from "../components/Hero/Hero"
import LastestBlog from "../components/LastestBlog/LastestBlog"
import NewsLetter from "../components/NewLetter/NewLetter"
import Offer from "../components/Offer/Offer"
import Recommend from "../components/Recommend/Recommend"

function Home() {
    return (
        <div>
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