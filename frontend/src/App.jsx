import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { useEffect } from 'react'
import { asyncCurrentUser } from './store/actions/UserActions'
import { useDispatch } from 'react-redux'
import { asyncLoadProduct } from './store/actions/ProductActions'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asyncLoadProduct());
    dispatch(asyncCurrentUser());
  },[])

  return (
    <>
      <Nav />
      <Mainroutes />
    </>
  )
}

export default App