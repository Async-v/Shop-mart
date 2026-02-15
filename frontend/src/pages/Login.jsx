import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { asyncLoginUser } from "../store/actions/UserActions";
import { useDispatch } from "react-redux";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit, 
        reset, 
        formState:{errors} 
    } = useForm();

    const loginHandler = (user) => {
        dispatch(asyncLoginUser(user));
        navigate("/");
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mt-2">
                    Login to your ShopMart account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(loginHandler)} className="mt-8 space-y-6">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="#" className="text-indigo-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
                    >
                        Login
                    </button>

                </form>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-indigo-600 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
