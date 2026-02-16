import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/UserActions";
import { useState } from "react";

const Cart = () => {
    const dispatch = useDispatch();
    const [see, setsee] = useState(true);
    const users = useSelector(state => state.userReducer.users);

    const increaseQuantityHandler = (index, product) => {
        const copyuser = { ...users, cart: [...users.cart] };

        copyuser.cart[index] = {
            product,
            quantity: copyuser.cart[index].quantity + 1
        };
        setsee(true);
        dispatch(asyncUpdateUser(copyuser.id, copyuser));
    }

    const deccreaseQuantityHandler = (index) => {
        const copyuser = { ...users, cart: [...users.cart] };

        if (users.cart[index].quantity > 1) {

            copyuser.cart[index] = {
                ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity - 1
            };
            setsee(true);
        } else {
            setsee(false);
            copyuser.cart.splice(index, 1);
        }

        dispatch(asyncUpdateUser(copyuser.id, copyuser));
    }

    const deleteProductHandler = (index) => {
        const copyuser = { ...users, cart: [...users.cart] };
        copyuser.cart.splice(index, 1);
        setsee(false);
        dispatch(asyncUpdateUser(copyuser.id, copyuser));
    }

    const total = users.cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );



    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

            <div className="grid md:grid-cols-3 gap-8">

                {/* Cart Items */}
                <div className="md:col-span-2 space-y-6">
                    {users.cart.map((item, index) => (
                        <div
                            key={item.product.id}
                            className="flex gap-6 bg-white p-4 rounded-xl shadow"
                        >
                            <img
                                src={item.product.image}
                                alt={item.product.title}
                                className="w-28 h-28 object-cover rounded-lg"
                            />

                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{item.product.title}</h2>
                                <p className="text-gray-600 mt-1">${item.product.price}</p>

                                <div className="flex items-center gap-4 mt-3">
                                    <button
                                        onClick={() => deccreaseQuantityHandler(index)}
                                        className="px-3 py-1 border rounded"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantityHandler(index, item.product)}
                                        className="px-3 py-1 border rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => deleteProductHandler(index)}
                                className="text-red-500 hover:text-red-700">
                                <Trash2 />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                {see &&
                    <div className="bg-white p-6 rounded-xl shadow h-fit">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>$10.00</span>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${(total + 10).toFixed(2)}</span>
                        </div>

                        <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                            Proceed to Checkout
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;