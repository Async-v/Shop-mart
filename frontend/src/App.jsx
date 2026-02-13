import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { useEffect } from 'react'
import { asyncCurrentUser } from './store/actions/UserActions'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
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