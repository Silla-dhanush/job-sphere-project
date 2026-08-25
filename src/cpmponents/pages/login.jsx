import { FaUser } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Login() {
    return (
        <div className="login-page flex flex-col h-screen border-gray-300 shadow-md rounded-lg  gap-4 p-4 w-1/3 mx-auto h-full">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 ">Join JobSphere</h1>
                <p className="text-gray-600">Start your professional journey today</p>
            </div>
            <div className="flex justify-center items-center login-form grid grid-cols-1 gap-4 w-3/4">
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                    <input className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                    <input className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <div className="mt-4">
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">Sign In</button>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                    <p className="text-sm text-gray-600">Don't have an account? <a href="/register" className="text-blue-600 hover:text-blue-800 font-semibold">Register</a></p>
                </div>
            </div>
        </div>
    )
}