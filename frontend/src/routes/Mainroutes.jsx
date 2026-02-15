import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Products from '../pages/Products'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'
import { useSelector } from 'react-redux'
import UserProfile from '../pages/users/UserProfile'

const Mainroutes = () => {
    const { users } = useSelector(state => state.userReducer);
    return (
        <Routes>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>

            <Route path='/' element={<Products />}/>
            <Route path='/user-profile' element={<UserProfile />}/>

            <Route path='/admin/create-product' element={<CreateProduct />}/>
            <Route path='/product/:id' element={<ProductDetails />}/>
        </Routes>
    )
}

export default Mainroutes