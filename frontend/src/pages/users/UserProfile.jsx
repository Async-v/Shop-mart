import { useState } from "react";
import { Edit } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from "../../store/actions/UserActions";

const UserProfile = () => {
    const [showEdit, setShowEdit] = useState(false);

    const { users } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            image: users?.image,
            username: users?.username,
            password: users?.password,
            email: users?.email,
        }
    });

    const updateUserHandler = (user) => {
        dispatch(asyncUpdateUser(users.id, user));
    }

    const deleteUserHandler = () => {
        dispatch(asyncDeleteUser(users.id));
        navigate("/register");
    }

    const logoutUserHandler = () => {
        dispatch(asyncLogoutUser());
        navigate("/")
    }


    return users ? (
        <div className="max-w-4xl mx-auto p-6">

            {/* Profile Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6">
                <div className="flex items-center gap-6">
                    <img
                        src={users?.image}
                        alt="profile"
                        className="w-32 h-32 rounded-full object-cover border"
                    />

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">{users?.username}</h2>
                        <p className="text-gray-600">{users?.email}</p>
                        <p className="text-sm mt-1">
                            Role: {users?.isAdmin ? "Admin" : "User"}
                        </p>
                    </div>

                    <button
                        onClick={() => setShowEdit(!showEdit)}
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                        <Edit size={18} />
                        Edit
                    </button>
                </div>
            </div>

            {/* Edit Form (Show on Click) */}
            {showEdit && (
                <div className="bg-gray-100 shadow-md rounded-2xl p-6 mt-6">
                    <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>

                    <form onSubmit={handleSubmit(updateUserHandler)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Profile Picture</label>
                            <input
                                {...register("image")}
                                type="text"
                                defaultValue={users.image}
                                className="w-full mt-1 p-2 border rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Username</label>
                            <input
                                {...register("username")}
                                type="text"
                                defaultValue={users.username}
                                className="w-full mt-1 p-2 border rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                defaultValue={users.email}
                                className="w-full mt-1 p-2 border rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Password</label>
                            <input
                                {...register("password")}
                                type="number"
                                defaultValue={users.password}
                                className="w-full mt-1 p-2 border rounded-lg"
                            />
                        </div>

                        <div className="flex gap-10">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Update User
                            </button>

                            <button
                                onClick={logoutUserHandler}
                                type="button"
                                className="bg-red-400 text-white px-5 py-2 rounded-lg hover:bg-red-500"
                            >
                                LogOut User
                            </button>

                            <button
                                onClick={deleteUserHandler}
                                type="button"
                                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                            >
                                Delete User
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    ) : <>
        <p className="text-gray-600 text-lg font-semibold mt-2">
            Loading...
        </p>
    </>
}

export default UserProfile;