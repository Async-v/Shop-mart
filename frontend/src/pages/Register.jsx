import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const registerHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        console.log(user);

        reset();
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Create Account 🚀
                </h2>
                <p className="text-center text-gray-500 mt-2">
                    Join ShopMart and start shopping today
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(registerHandler)} className="mt-8 space-y-5">

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Profile Image URL
                        </label>
                        <input
                            {...register("image")}
                            type="text"
                            placeholder="Paste your image URL"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            {...register("username")}
                            type="text"
                            placeholder="Enter your username"
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

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

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
                    >
                        Register
                    </button>

                </form>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
