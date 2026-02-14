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