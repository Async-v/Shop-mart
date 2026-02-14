import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Products from '../pages/Products'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>

            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Products />}/>

            <Route path='/admin/create-product' element={<CreateProduct />}/>
            <Route path='/product/:id' element={<ProductDetails />}/>
        </Routes>
    )
}

export default Mainroutes