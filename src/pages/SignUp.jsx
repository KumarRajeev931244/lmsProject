import { useState } from "react"
import HomeLayout from "../Layout/HomeLayout"
import { BsPersonCircle } from "react-icons/bs"
function SignUp(){
    const [previewImage,setPreviewImage] = useState('')
    return(
        <HomeLayout>
            <div  className="flex items-center justify-center h-[90vh]">
                <form  className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>

                    <label htmlFor="image_upload" className="cursor-pointer">
                        {previewImage ? (<img className="w-24 h-24 rounded-full m-auto " src={previewImage} />) : (<BsPersonCircle className="w-24 h-24 rounded-full m-auto "></BsPersonCircle>)}

                    </label>
                    <input className="hidden" type="file" id="image_upload " accept=".jpg, .jpeg, .png, .svg" name="image_upload"/>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input type="email" required name="email" id="email" placeholder="Enter your email..." className="bg-transparent px-2 py-1 border">
                        
                        </input>
                    </div>
                    <div>
                        <label htmlFor="password" className="font-semibold">password</label>
                        <input type="password" required name="password" id="password" placeholder="Enter your password..." className="bg-transparent px-2 py-1 border">
                        
                        </input>
                    </div>   
                </form>

            </div>

        </HomeLayout>
    )

}
export default SignUp