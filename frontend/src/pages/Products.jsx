import { ShoppingCart } from "lucide-react";

const Products = () => {

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Page Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
                    <p className="text-gray-600 mt-2">
                        Browse our latest collection
                    </p>
                </div>
            </div>

            {/* Filters Section */}
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Search Bar */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {/* Category Buttons */}
                    <div className="flex gap-3 flex-wrap">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                            All
                        </button>
                        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                            Electronics
                        </button>
                        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                            Fashion
                        </button>
                        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                            Accessories
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div
                        className="bg-white shadow hover:shadow-lg transition duration-300 overflow-hidden group"
                    >
                        {/* Product Image */}
                        <div className="h-56 bg-gray-100 flex items-center justify-center">
                            <img
                                className="h-40 object-cover group-hover:scale-105 transition duration-300"
                                src="https://static.zara.net/assets/public/e162/5536/14094b80a1e7/a78a660660c7/07545515800-f1/07545515800-f1.jpg?ts=1769013969209&w=312"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="p-5">
                            <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                                Relaxed Fit Flowing Shirt
                            </h3>

                            <p className="text-indigo-600 font-bold text-xl mt-2">
                                ₹ 4,350.00
                            </p>

                            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 hover:bg-indigo-700 transition">
                                <ShoppingCart size={18} />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
