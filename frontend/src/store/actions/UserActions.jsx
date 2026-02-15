import axios from '../../api(Services)/AxiosConfig'
import { loaduser } from '../reducers(Features)/UserSlice'

export const asyncCurrentUser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) dispatch(loaduser(user));
        else console.log("User not Logged In");
    } catch (error) {
        console.log(error);
    }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        localStorage.setItem("user", JSON.stringify(data[0]));
        console.log("User Logged In");
    } catch (error) {
        console.log(error);
    }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        console.log("User LogOut!!!")
    } catch (error) {
        console.log(error);
    }
};


export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        await axios.post("/users", user);
        console.log("User Register");
    } catch (error) {
        console.log(error);
    }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch(`/users/${id}`, user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asyncCurrentUser());
        console.log("Update User");
    } catch (error) {
        console.log(error);
    }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/users/${id}`);
        dispatch(asyncLogoutUser());
        console.log("Delete User");
    } catch (error) {
        console.log(error);
    }
};