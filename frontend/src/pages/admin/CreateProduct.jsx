import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { nanoid } from "nanoid";
import { useNavigate } from 'react-router-dom'
import { asyncCreateProduct } from "../../store/actions/ProductActions";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const submitHandler = (product) => {
        product.id = nanoid();
        product.price = Number(product.price);

        dispatch(asyncCreateProduct(product));
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Create New Product
                </h2>

                <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">

                    {/* Title */}
                    <div>
                        <label className="block font-medium text-gray-700">
                            Product Title
                        </label>
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            placeholder="Enter product title"
                            className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="text"
                            placeholder="Paste image URL"
                            className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            {...register("price", { required: true })}
                            type="number"
                            step="0.01"
                            placeholder="Enter price"
                            className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            {...register("category", { required: true })}
                            className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                            <option value="">Select category</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                            <option value="electronics">Electronics</option>
                            <option value="jewelery">Jewelery</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            {...register("description", { required: true })}
                            rows="4"
                            placeholder="Enter product description"
                            className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        // type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
                    >
                        Create Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
