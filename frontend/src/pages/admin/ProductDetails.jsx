import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncdeleteProduct, asyncUpdateProduct } from "../../store/actions/ProductActions";

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(state => state.productReducer.products);
    const user = useSelector(state => state.userReducer.users);
    const product = products.find(f => f.id === id);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            image: product?.image,
            title: product?.title,
            price: product?.price,
            description: product?.description,
            category: product?.category,
        }
    });

    const updateProductHandler = (product) => {
        product.price = Number(product.price)
        dispatch(asyncUpdateProduct(id, product));
    }

    const deleteProductHandler = () => {
        dispatch(asyncdeleteProduct(id));
        navigate('/products')
    }


    return product ? (
        <>
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

                    {/* Top Section */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Left - Image */}
                        <div className="bg-gray-100 rounded-xl flex items-center justify-center p-6">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-h-96 object-contain"
                            />
                        </div>

                        {/* Right - Details */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">
                                {product.title}
                            </h2>

                            <p className="text-indigo-600 text-2xl font-semibold mt-4">
                                ₹ {product.price}
                            </p>

                            <p className="mt-6 text-gray-600 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="mt-6">
                                <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg text-sm">
                                    {product.category}
                                </span>
                            </div>
                        </div>

                    </div>

                    {user && user.isAdmin && <>

                        {/* Divider Line */}
                        <hr className="my-12 border-gray-300" />

                        {/* Update Form Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Update Product Details
                            </h3>

                            <form
                                onSubmit={handleSubmit(updateProductHandler)}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                {/* Title */}
                                <div>
                                    <label className="block font-medium text-gray-700">
                                        Title
                                    </label>
                                    <input
                                        {...register("title")}
                                        defaultValue={product.title}
                                        className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                </div>

                                {/* Price */}
                                <div>
                                    <label className="block font-medium text-gray-700">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        {...register("price")}
                                        defaultValue={product.price}
                                        className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                </div>

                                {/* Image */}
                                <div>
                                    <label className="block font-medium text-gray-700">
                                        Image URL
                                    </label>
                                    <input
                                        {...register("image")}
                                        defaultValue={product.image}
                                        className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block font-medium text-gray-700">
                                        Category
                                    </label>
                                    <input
                                        {...register("category")}
                                        defaultValue={product.category}
                                        className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                </div>

                                {/* Description Full Width */}
                                <div className="md:col-span-2">
                                    <label className="block font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        rows="4"
                                        {...register("description")}
                                        defaultValue={product.description}
                                        className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    ></textarea>
                                </div>

                                {/* Button Full Width */}
                                <div className="flex gap-10 md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
                                    >
                                        Update Product
                                    </button>
                                    <button
                                        onClick={deleteProductHandler}
                                        type="button"
                                        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                                    >
                                        Delete Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>}
                </div>
            </div>
        </>
    ) : <>
        <p className="text-gray-600 text-lg font-semibold mt-2">
            Loading...
        </p>
    </>
};

export default ProductDetails;
