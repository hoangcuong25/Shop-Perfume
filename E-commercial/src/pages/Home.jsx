import Hero from "../components/Hero/Hero"
import LastestBlog from "../components/LastestBlog/LastestBlog"
import Offer from "../components/Offer/Offer"
import Recommend from "../components/Recommend/Recommend"



function Home() {
    return (
        <div>
            <Hero />
            <Offer />
            <Recommend />
            <LastestBlog />
        </div>
    )
}

export default Home