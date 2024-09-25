import { FiMenu } from "react-icons/fi"
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
function HomeLayout({children}){

    const dispatch = useDispatch();
    const navigate  = useNavigate();

    // for checking if user sign in
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    //  for displaying the option acc to the role
    const role = useSelector((state) => state?.auth?.role)
    
    function changeWidth(){
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = 'auto';
    }
    function hideDrawer(){
        const element = document.getElementsByClassName("drawer-toggle")
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = '0';
    }
    function handleLogout(e) {
        e.preventDefault();
        // const res = await dispatch(logout())
        // if(res? payLoad : sucess)
        navigate("/")

    }
    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            <label htmlFor="my-drawer" className="cursor-pointer relative">
                <FiMenu 
                    onClick = {changeWidth}
                    size = {"32px"}
                    className = "font-bold text-white m-4"
                    />
            </label>
            </div>
            <div className="drawer-side w-0">
                <label htmlFor="my-drawer" className="drawer-overlay">

                </label>
                <ul className="menu h-[100%] p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
                    <li className="w-fit absolute right-2 z-50">
                        <button onClick={hideDrawer}>
                            <AiFillCloseCircle size={24}></AiFillCloseCircle>
                        </button>
                        
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {isLoggedIn && role === 'ADMIN' && (
                        <li>
                            <Link to="/admin/dashboard">Admin Dashboard</Link>
                        </li>
                    )}
                    <li>
                        <Link to='/courses'>Courses</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    
                    {/* if user not logged in */}
                    {!isLoggedIn && (
                        <li className="absolute bottom-4 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                            <button className="btn btn-primary px-4 py-1 font-semibold roundec-md w-1/2">
                                <Link to='/login'>Login</Link>
                            </button>
                            <button className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-1/2 ">
                                <Link to='/signUp'>Sign Up</Link>
                            </button>


                            </div>
                        </li>
                    )}
                        
                    {isLoggedIn && (
                        <li className="absolute bottom-4 w-[90%]">
                        <div className="w-full flex items-center justify-center">
                            <button className="btn btn-primary px-4 py-1 font-semibold roundec-md w-1/2">
                                <Link to='/user/profile'>Profile</Link>
                            </button>
                            <button className="btn btn-secondary  font-semibold rounded-md w-1/2 ">
                                <Link onClick={handleLogout}>Logout</Link>
                            </button>

                        </div>
                        </li>
                    )}
                    
                    
                </ul>
            </div>
                
            </div> 
            {children}
            <Footer/>

        </div>
    )

}
export default HomeLayout;