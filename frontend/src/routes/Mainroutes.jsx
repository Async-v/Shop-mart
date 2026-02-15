import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Products from '../pages/Products'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'
import UserProfile from '../pages/users/UserProfile'
import PageNotFound from '../pages/PageNotFound'
import AuthWrapper from './AuthWrapper'
import UnauthWrapper from './UnauthWrapper'

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/register' element={<UnauthWrapper><Register /></UnauthWrapper>}/>
            <Route path='/login' element={<UnauthWrapper><Login /></UnauthWrapper>}/>

            <Route path='/' element={<Products />}/>

            <Route path='/user-profile' element={<AuthWrapper><UserProfile /></AuthWrapper>}/>
            <Route path='/admin/create-product' element={<AuthWrapper><CreateProduct /></AuthWrapper>}/>
            <Route path='/product/:id' element={<AuthWrapper><ProductDetails /></AuthWrapper>}/>
            
            <Route path='*' element={<PageNotFound />}/>
        </Routes>
    )
}

export default Mainroutes