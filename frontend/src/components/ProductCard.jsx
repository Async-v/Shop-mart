import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateProduct } from "../store/actions/ProductActions";
import { asyncUpdateUser } from "../store/actions/UserActions";

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users);
    const product = props.product;

    const AddtoCartHandler = (product) => {
        const copyuser = { ...users, cart: [...users.cart] };
        const index = copyuser.cart.findIndex(c => c?.product?.id == product.id);

        if (index == -1) {
            copyuser.cart.push({ product, quantity: 1});
        } else {
            copyuser.cart[index] = { product, quantity: copyuser.cart[index].quantity + 1 };
        }
        dispatch(asyncUpdateUser(copyuser.id, copyuser));
    }

    return (
        <div id={product.id} className="bg-white shadow hover:shadow-lg transition duration-300 overflow-hidden group rounded-xl">

            {/* Product Image */}
            <div className="h-56 bg-gray-100 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Product Info */}
            <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                    {product.title}
                </h3>
                <Link to={`/product/${product.id}`}>Product details...</Link>

                <p className="text-indigo-600 font-bold text-xl mt-2">
                    ₹ {product.price}
                </p>

                <button
                    onClick={() => AddtoCartHandler(product)}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
