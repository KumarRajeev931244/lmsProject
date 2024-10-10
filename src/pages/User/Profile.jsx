import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layout/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { cancelCourseBundle } from "../../Redux/slices/RazorpaySlice";
import { getUserData } from "../../Redux/slices/AuthSlice";
import toast from "react-hot-toast";

function Profile(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    async function handleCancellation(){
        toast("initalising cancellation")
        await dispatch(cancelCourseBundle())
        await dispatch(getUserData());
        toast.success("cancellation completed")
        navigate('/')

    }
    const userData = useSelector((state) => state?.auth?.data)
    return(
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center w-full">
                <div className="my-10 flex flex-col gap-5 rounded-lg p-4 text-white   w-96 shadow-[0_0_10px_black]">
                    <img
                         src={userData?.avatar?.secure_url}
                         className="w-40 m-auto rounded-full border border-black"
                    />
                    <h3 className="text-xl font-semibold text-center capitalize">
                        {userData?.fullName}
                    </h3>
                    <div className="grid grid-cols-2"></div>
                    <p>Email: </p>
                    <p>{userData?.role}</p>
                    
                    <p>Subscription:</p>
                    <p>{userData?.subscription?.status === "active" ? "Active" : "Inactive"}</p>
                    <div className="flex items-center justify-between gap-2">
                    <Link 
                        to="/changepassword" 
                        className=" bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                        <button>
                            Change  password
                        </button>
                    </Link>
                    <Link 
                        to="/changeprofile" 
                        className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                        <button>
                            Edit  profile
                        </button>
                    </Link>
                    
                </div>
                {userData?.subscription?.status === 'active' && (
                    <button onClick={handleCancellation} className=" bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                        Cancel subscription
                    </button>
                )}
                    
            </div>
            </div>
                
                
        </HomeLayout>
    )
   

}
export default Profile;