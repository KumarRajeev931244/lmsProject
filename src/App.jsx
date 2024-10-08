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
import CourseDescription from './pages/CourseDescription'
import RequireAuth from './components/Auth/RequireAuth'
import CreateCourse from './pages/CreateCourse'
import Profile from './pages/User/Profile'
import EditProfile from './pages/User/EditProfile'
import CheckOut from './pages/payment/Checkout'
import CheckoutSuccess from './pages/payment/CheckoutSuccess'
import CheckoutDenied from './pages/payment/CheckoutDenied'
import DisplayLectures from './pages/Dashboard/DisplayLectures'
import AddLecture from './pages/Dashboard/AddLecture'
import AdminDashboard from './pages/Dashboard/AdminDashboard'

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
      {/* <Route element={<RequireAuth allowedRoles={['ADMIN']}/>}>
        <Route path='/course/create' element={<CreateCourse/>}></Route>
      </Route> */}
      <Route path='/course/create' element={<CreateCourse/>}></Route>
      <Route path='/user/editprofile' element={<EditProfile/>}></Route>
      <Route path='/user/checkout' element={<CheckOut/>}></Route>
      <Route path='/user/checkout/success' element={<CheckoutSuccess/>}></Route>
      <Route path='/user/checkout/denied' element={<CheckoutDenied/>}></Route>
      <Route path='/course/displayLectures' element={<DisplayLectures/>}></Route>
      <Route path='/addlecture' element={<AddLecture/>}></Route>
      <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>


      {/* <Route path='/course/description' element={<CourseDescription/>}></Route> */}
    </Routes>
    </>
  )
}

export default App
