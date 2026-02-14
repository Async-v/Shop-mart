import axios from '../../api(Services)/AxiosConfig'
import { loadproduct } from '../reducers(Features)/ProductSlice';

export const asyncLoadProduct = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/products"); 
        dispatch(loadproduct(data));  
    } catch (error) {
        console.log(error);
    }
}

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product); 
        dispatch(asyncLoadProduct());
        console.log("product send");   
    } catch (error) {
        console.log(error);
    }
}

export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
    try {
        await axios.patch(`/products/${id}`, product); 
        dispatch(asyncLoadProduct());
        console.log("Update");   
    } catch (error) {
        console.log(error);
    }
}

export const asyncdeleteProduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/products/${id}`); 
        dispatch(asyncLoadProduct());
        console.log("delete");   
    } catch (error) {
        console.log(error);
    }
}