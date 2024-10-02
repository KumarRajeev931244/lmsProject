import { useState } from "react"
import HomeLayout from "../Layout/HomeLayout"
import { BsPersonCircle } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { createAccount } from "../Redux/slices/AuthSlice"
import { isEmail, isValidPassword } from "../Helpers/regexMatcher"
function SignUp(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage,setPreviewImage] = useState('')

    const [SignUpData , setSignUpData] = useState ({
        fullName: "",
        email: "",
        password: "",
        avatar: ""
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setSignUpData({
            ...SignUpData,
            [name]: value
        })
    }

    function getImage(event){
        event.preventDefault()
        const uploadedImage = event.target.files[0]
        if(uploadedImage){
            setSignUpData({
                ...SignUpData,
                avatar: uploadedImage
            })
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function(){
                setPreviewImage(this.result)
            })
        }
    }

    async function createNewAccount(event){
        event.preventDefault()
        if(!SignUpData.email || !SignUpData.password || !SignUpData.fullName || !SignUpData.fullName){
            toast.error("please fill the details")
            return
        }

        // checking name field length
        if(SignUpData.fullName.length < 5){
            toast.error("name should be atleast 5 chararcter")
        }
        
        if(!isEmail(SignUpData.email)){
            toast.error("invalid email")
            return

        }

        if(!isValidPassword(SignUpData.password)){
            toast.error("password should be 8-16 character long with atleast one special character")
            return
        }
        const formData = new FormData()
        formData.append('fullName',SignUpData.fullName)
        formData.append("email",SignUpData.email)
        formData.append("password",SignUpData.password)
        formData.append("avatar",SignUpData.avatar)

        // dispatch create account action
        const response = await dispatch(createAccount(formData))
        
        if(response?.payload?.success){
            navigate("/")

        }
        
        setSignUpData({
            fullName:'',
            email:"",
            password:"",
            avatar:""
        })
    }

    
    return(
        <HomeLayout>
            <div  className="flex items-center justify-center h-[90vh]">
                <form  noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>

                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto "
                             src={previewImage} />
                             ) : (<BsPersonCircle className="w-24 h-24 rounded-full m-auto "></BsPersonCircle>)}

                    </label>
                    <input 
                        onChange={getImage}
                        // className="hidden" 
                        type="file" 
                        id="image_upload" 
                        accept=".jpg, .jpeg, .png, .svg" 
                        name="image_upload"
                        />
                    
                    {/* full name */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input 
                            type="text"
                            required name="fullName" 
                            id="fullName" 
                            placeholder="Enter your name..."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={SignUpData.fullName}
                        
                            >
                            
                        
                        </input>
                    </div>

                    {/* email  */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input 
                            type="email"
                            required name="email" 
                            id="email" 
                            placeholder="Enter your email..."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={SignUpData.email}
                            >
                            
                        
                        </input>
                    </div>

                    {/* password */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input
                            type="password" 
                            required name="password"
                            id="password" 
                            placeholder="Enter your password..." className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={SignUpData.password}>                        
                        </input>
                    </div> 

                    {/* create account button */}
                    <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all  ease-in-out px-2 py-2">
                        Create account
                    </button>
                    <p className="text-center">
                        Already have an account? <Link to='/login' className="line text-accent cursor-pointer">Login</Link>
                    </p>
                </form>

            </div>

        </HomeLayout>
    )
}

export default SignUp