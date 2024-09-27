import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function LogInSite() {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center">
            <div className="flex flex-col items-center my-20 bg-white relative">
                <h1 className="text-[40px] font-serif font-semibold mt-6">Log In</h1>
                <div className="relative border border-gray-400 w-[300px] h-10 flex items-center mx-12 my-6 hover:border-primary">
                    <MdOutlineEmail className="absolute left-1 text-[25px]" />
                    <input type="email"
                        placeholder="Your Emaill Address"
                        className="focus:outline-none focus:border-primary px-10"
                    />
                </div>
                <div className="relative border border-gray-400 w-[300px] h-10 flex items-center hover:border-primary">
                    <MdLockOutline className="absolute left-1 text-[25px]" />
                    <input type="password"
                        placeholder="Your Password"
                        className="focus:outline-none focus:border-primary px-10"
                    />
                </div>
                <div className="flex gap-3 absolute bottom-[140px] left-12">
                    <input type="checkbox" />
                    <p>Remember Me</p>
                </div>
                <button className="bg-red-600 w-[300px] h-10 text-white mt-12 mb-6">Log In</button>
                <div className="flex gap-2 mb-8">
                    <p>Not A Member?</p>
                    <Link to='/sign-up'><p className="underline underline-offset-6 text-red-500">Sign Up Now</p></Link>
                </div>
            </div>
        </div>
    )
}

export default LogInSite