import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addCourseLecture } from "../../Redux/slices/LectureSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";



function AddLecture(){
    const courseDetails = useLocation().state;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userInput, setUserInput]= useState({
        id:courseDetails._id,
        lecture: undefined,
        title:'',
        discription:'',
        videoSrc:''
    })

    function handleInputChange(e){
        const {name, value} = e.target
        setUserInput({
            [name]: value
        })
    }

    function handleVideo(e){
        const video = e.target.files[0]
        const  source = window.URL.createObjectURL(video)
        setUserInput({
            ...userInput,
            lecture: video,
            videoSrc: source
        })
    }

    async function onFormSubmit(e){
        e.preventDefault()
        if(!userInput.lecture || !userInput.title || !userInput.discription){
            toast.error("All field are mandatory")
            return
        }
        const response = await dispatch(addCourseLecture(userInput))
        if(response?.payload?.success){
            navigate(-1)
            setUserInput({
                id:courseDetails._id,
                lecture: undefined,
                title:'',
                discription:'',
                videoSrc:''
            })
        }
    }
    useEffect(() => {
        if(!courseDetails){
            navigate('/courses')
        }
    },[])
    return(
        <HomeLayout>
            <div className="min-h-[90vh] text-white flex flex-col items-center justify-center gap-10 mx-16">
                <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-96 rounded-lg">
                    <header className="flex items-center justify-center relative">
                        <button
                            className="absolute left-2 text-xl text-green-500"
                            onClick={() => navigate(-1)}
                            >
                            <AiOutlineArrowLeft/>
                        </button>
                        <h1 className="text-xl text-yellow-500 font-semibold"  >
                            add new lecture
                        </h1>
                    </header>
                    <form 
                        onSubmit={onFormSubmit}
                        className="flex flex-col gap-3"
                    >
                        <input 
                            type="text"
                            name="title"
                            placeholder="enter the title of the lecture"
                            onChange={handleInputChange}
                            className="bg-transparent px-3 py-1 border"
                            value={userInput.title} />
                        <textarea
                             type="text"
                             name="description"
                             placeholder="enter the description of the lecture"
                             onChange={handleInputChange}
                             className="bg-transparent px-3 py-1 border resize-none overflow-y-scroll h-3"
                             value={userInput.discription} 
                        >
                        </textarea>
                        {userInput.videoSrc ? (
                            <video 
                                muted
                                src={userInput.videoSrc}
                                controlsList="nodownload nofullscreen"
                                disablePictureInPicture 
                                className="object-fill rounded-tl-lg rounded-tr-lg w-full"   
                            ></video>
                        ):(
                            <div className="h-48 boder flex items-center justify-center cursor-pointer" >
                                <label htmlFor="lecture" className="font-semibold text-cl cursor-pointer" >choose your video</label>
                                <input type="file" className="hidden" id="lecture" name="lecture" onChange={handleVideo} accept="video/mp4 video/x-mp4" />
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary py-1 font-semibold text-lg">
                            Add new Lecuture
                        </button>
                    </form>
                </div>
            </div>

        </HomeLayout>
    )

}
export default AddLecture;