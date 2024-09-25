import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/signUp' element={<SignUp/>}></Route>
    </Routes>
    </>
  )
}

export default App
