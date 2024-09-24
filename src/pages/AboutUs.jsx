import HomeLayout from "../Layout/HomeLayout"
import NelsonMandela from "../assets/NelsonMandela-2.jpg"
import apj from "../assets/apj.jpg"
import BillGates from "../assets/BillGates.jpg"
import albert from "../assets/albert.jpg"
import steveJobs from "../assets/steveJobs.jpg"
function AboutUs(){
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality eduction 
                        </h1>
                        <p className=" text-xl text-gray-200">
                            Our goal is to provide the affrodable and quality eduction to the world.
                            We are providing the platform for the aspiring teachers and students to share their skills, creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img src="" alt="aboutMainImage" className="drop-shadow-2xl" id="test1" style={{
                            filter: 'drop-shadow(0px 10px 10px(0,0,0))'
                        }} />
                    </div>
                </div>
                {/* crousel */}

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full mt-10">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            {/* Nelson mendla */}
                            <img
                            src={NelsonMandela}
                            className="w-40 rounded-full border-2 border-gray-400" />
                            <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                            <p className="text-xl text-gray-200">“Education is the most powerful weapon which you can use to change the world.”</p>
                            <div className="absolute w-[40%] top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        
                    </div>
                    

                    {/* slide-2  */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            {/* apj abdul kalam */}
                            <img
                            src={apj}
                            className="w-40  rounded-full  border-2 border-gray-400" />
                            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <p className="text-xl text-gray-200">“Dream is not the thing you see in sleep but is that thing that doesn't let you sleep.”</p>
                            <div className="absolute w-[40%] top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    {/* slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            {/* steveJobs */}
                            <img
                            src={steveJobs}
                            className="w-40 rounded-full  border-2 border-gray-400" />
                            <h3 className="text-2xl font-semibold"> Steve Jobs</h3>
                            <p className="text-xl text-gray-200">"Your time is limited, don't waste it living someone else's life."</p>
                            <div className="absolute w-[40%] top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    {/* slide 4 */}
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            {/* bill gates */}
                            <img
                            src={BillGates}
                            className="w-40 rounded-full  border-2 border-gray-400"/>
                            <h3 className="text-2xl font-semibold"> Bill Gates</h3>
                            <p className="text-xl text-gray-200">“Your most unhappy customers are your greatest source of learning.”</p>
                            <div className="absolute w-[40%] top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    {/* slide - 5 */}

                    <div id="slide5" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            {/* albert einstine */}
                            <img
                            src={albert}
                            className="w-40 h-40 rounded-full  border-2 border-gray-400"/>
                            <h3 className="text-2xl font-semibold"> Albert Einstine</h3>
                            <p className="text-xl text-gray-200">“If you can't explain it to a six year old, you don't understand it yourself.” </p>
                            <div className="absolute w-[40%] top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </HomeLayout>
    )

}
export default AboutUs