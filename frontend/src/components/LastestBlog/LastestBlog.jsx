import lastest_blogs from '../../assets/lastest_blogs'
import Blog from '../Blog/Blog'

const LastestBlog = () => {
    return (
        <div className='mt-12 flex flex-col items-center mx-7 cursor-pointer'>
            <h1 className='ct-text-header mb-3'>The Latest From The Fragrance Direct Blog</h1>
            <div className='grid grid-cols-3'>
                {lastest_blogs.map((blog, index) => {
                    return <Blog key={index} image={blog.image} title={blog.title} intro={blog.intro} />
                })}
            </div>

        </div>
    )
}

export default LastestBlog