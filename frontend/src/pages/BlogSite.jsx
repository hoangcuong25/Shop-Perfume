import all_blog from "../assets/all_blog"
import Blog from "../components/Blog/Blog"

const BlogSite = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-7 mx-5">
            {all_blog.map((blog, index) => {
                return <Blog key={index} image={blog.image} title={blog.title} intro={blog.intro} />
            })}
        </div>
    )
}

export default BlogSite