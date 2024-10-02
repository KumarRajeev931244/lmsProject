import { useState } from "react"
import HomeLayout from "../Layout/HomeLayout"
import toast from "react-hot-toast";
import { isEmail } from "../Helpers/regexMatcher";
import axiosInstance from "../Helpers/axiosInstance";

function Contact(){
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    })

    function handleInputChange(e) {
        const {name, value} = e.target;
        console.log(name, value);
        setUserInput({
            ...userInput,
            [name]: value,

        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.email || !userInput.message || !userInput.name){
            toast.error("All filed are mandatory ")
            return 
        }
        if(!isEmail(userInput.email)){
            toast.error("invalid email")
        }
        try {
            const response = axiosInstance.post('/contact', userInput)
            toast.promise(response, {
                loading: "submitting your message",
                success: "form submitting successfully",
                error: "failed to submit the form"
            })
            const contactResponse = await response;
            if(contactResponse?.data?.success){
                setUserInput({
                    name: "",
                    email: "",
                    message: "",
                })
            }
        } catch (error) {
            toast.error("operation failed")
            
        }
    }

    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
            <form 
            noValidate
            onSubmit={onFormSubmit}
            className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white  shadow-[0_0_10px_black] w-[22rem]">
                <h1 className="text-3xl font-semibold">
                    Contact Form
                </h1>
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="name" className="text-xl font-semibold">
                        Name
                    </label>
                    <input 
                        type="text" 
                        className="bg-transparent border px-2 py-1 roounded-sm"
                        id="name"
                        name="name"
                        placeholder="enter your name"
                        onChange={handleInputChange}
                        value={userInput.name}
                         />

                </div>
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="email" className="text-xl font-semibold">
                        Email
                    </label>
                    <input 
                        type="email"
                        name="email" 
                        className="bg-transparent border px-2 py-1 roounded-sm"
                        id="email"
                        placeholder="enter your email"
                        onChange={handleInputChange}
                        value={userInput.email}
                         />

                </div>
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor="message" className="text-xl font-semibold">
                        Message
                    </label>
                    <textarea 
                        className="bg-transparent border px-2 py-1 roounded-sm"
                        id="message"
                        name="message"
                        placeholder="enter your message"
                        onChange={handleInputChange}
                        value={userInput.message}
                         />

                </div>
                <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">Submit</button>
            
            </form>
            </div>
        </HomeLayout>
    )
}
export default Contact