function CrauselSlide(image, title, description, slideNumber, totalSlide){
    return(
    <div>
        <div id={`slide${slideNumber}`} className="carousel-item relative w-full mt-10">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
            {/* Nelson mendla */}
            <img
            src={image}
            className="w-40 rounded-full border-2 border-gray-400" />
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-xl text-gray-200">{description}</p>
            <div className="absolute w-[40%] top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${(slideNumber == 1 ? totalSlide: (slideNumber - 1))% totalSlide + 1}`} className="btn btn-circle">❮</a>
            <a href={`#slide${(slideNumber)% totalSlide + 1}`} className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>
    </div>

    );

}

export default CrauselSlide;