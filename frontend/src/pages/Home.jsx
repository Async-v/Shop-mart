import { Link } from "react-router-dom";
import { ShoppingBag, Truck, ShieldCheck } from "lucide-react";

const Home = () => {
    return (
        <div className="bg-gray-50">

            {/* Hero Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Discover the Best Products at
                            <span className="text-indigo-600"> ShopMart</span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg">
                            Shop the latest trends with the best prices.
                            Fast delivery, secure payments, and quality products.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <Link
                                to="/products"
                                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
                            alt="shopping"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Why Choose ShopMart?
                    </h2>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">

                        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                            <ShoppingBag className="mx-auto text-indigo-600 w-10 h-10" />
                            <h3 className="mt-4 font-semibold text-lg">Wide Collection</h3>
                            <p className="mt-2 text-gray-600">
                                Explore a variety of products across multiple categories.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                            <Truck className="mx-auto text-indigo-600 w-10 h-10" />
                            <h3 className="mt-4 font-semibold text-lg">Fast Delivery</h3>
                            <p className="mt-2 text-gray-600">
                                Quick and reliable shipping at your doorstep.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                            <ShieldCheck className="mx-auto text-indigo-600 w-10 h-10" />
                            <h3 className="mt-4 font-semibold text-lg">Secure Payments</h3>
                            <p className="mt-2 text-gray-600">
                                Safe and secure payment options for worry-free shopping.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="bg-indigo-600 py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold">
                        Ready to Start Shopping?
                    </h2>

                    <p className="mt-4 text-indigo-100">
                        Discover amazing deals and exclusive offers only at ShopMart.
                    </p>

                    <Link
                        to="/products"
                        className="mt-8 inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Browse Products
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
