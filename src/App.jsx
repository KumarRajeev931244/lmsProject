import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import CourseList from './pages/CourseList'
import Contact from './pages/Contact'
import Denied from './pages/Denied'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/signUp' element={<SignUp/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/denied' element={<Denied/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/courses' element={<CourseList/>}></Route>
    </Routes>
    </>
  )
}

export default App
