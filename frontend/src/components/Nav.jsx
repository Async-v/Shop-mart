import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../store/actions/UserActions";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.userReducer.users);

    const activeHandler = ({ isActive }) => {
        return isActive ? "text-indigo-600" : "hover:text-indigo-600 transition";
    }

    const logoutHandler = () => {
        dispatch(asyncLogoutUser());
        navigate("/login");
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold text-indigo-600">
                        ShopMart
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 font-semibold items-center">
                        <NavLink to="/" className={activeHandler}>
                            Home
                        </NavLink>
                        <NavLink to="/products" className={activeHandler}>
                            Products
                        </NavLink>

                        {user ? 
                            <>
                                <NavLink to="/admin/create-product" className={activeHandler}>
                                    Create Product
                                </NavLink>
                                <button
                                    onClick={logoutHandler}
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                                >
                                    LogOut
                                </button>
                            </>
                            :
                            <>
                                <NavLink
                                    to="/login"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Login
                                </NavLink>
                            </>
                        }
                        
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
                    <NavLink to="/" className="block">
                        Home
                    </NavLink>
                    <NavLink to="/products" className="block">
                        Products
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
                    >
                        Login
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
