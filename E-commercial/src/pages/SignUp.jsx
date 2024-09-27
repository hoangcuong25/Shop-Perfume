import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function SignUp() {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center">
            <div className="flex flex-col items-center my-20 bg-white relative">
                <h1 className="text-[40px] font-serif font-semibold mt-6">Sign Up</h1>
                <div className="relative border border-gray-400 w-[300px] h-10 flex items-center my-6 hover:border-primary">
                    <CgProfile className="absolute left-1 text-[25px]" />
                    <input type="email"
                        placeholder="Your Name"
                        className="focus:outline-none focus:border-primary px-10"
                    />
                </div>

                <div className="relative border border-gray-400 w-[300px] h-10 flex items-center mb-6 hover:border-primary">
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

                <button className="bg-red-600 w-[300px] h-10 text-white mt-8 mb-6">Submit</button>
                <div className="flex mx-5 gap-3 mb-3">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>

                <div className="flex gap-1 mb-8">
                    <p>Already have an account? </p>
                    <Link to='/log-in'><p className="underline underline-offset-6 text-red-500">Login here</p></Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp