import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = (product) => {
    const {id, image, title, price } = product.product;

    return (
        <div id={id} className="bg-white shadow hover:shadow-lg transition duration-300 overflow-hidden group rounded-xl">

            {/* Product Image */}
            <div className="h-56 bg-gray-100 flex items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="h-40 object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Product Info */}
            <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                    {title}
                </h3>
                <Link to={`/product/${id}`}>Product details...</Link>

                <p className="text-indigo-600 font-bold text-xl mt-2">
                    ₹ {price}
                </p>

                <button
                    
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
