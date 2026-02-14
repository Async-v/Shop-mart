import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {

    const products = useSelector(state => state.productReducer.products);

    const renderProductCard = products.map((product) => {
        return <ProductCard key={product.id} product={product} />
    })

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
                    {products.length > 0 ?
                        <>{renderProductCard}</>
                        : <>
                            <p className="text-gray-600 text-lg font-semibold mt-2">
                                Loading...
                            </p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
