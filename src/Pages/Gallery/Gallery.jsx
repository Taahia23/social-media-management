
const Gallery = () => {
    return (
        <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-20">
            <div className="w-[300px]  ">
                <img  className="w-[300px] rounded-lg" src="https://i.ibb.co/XVhySZG/anniver.jpg" alt="" />
                <h1 className="text-xl text-center">Mediterranean Wedding on Rhodes Island </h1>
            </div>
            <div className="w-[300px] ">
                <img  className="w-[300px] rounded-lg" src="https://i.ibb.co/Qmn0wV3/wedding.jpg" alt="" />
                <h1 className="text-xl text-center">Mediterranean Anniversary on Thako Island </h1>
            </div>
            <div className="w-[300px]">
                <img  className="w-[300px] h-[225px] rounded-lg" src="https://i.ibb.co/WVbs1qy/retairement.jpg" alt="" />
                <h1 className="text-xl text-center">Retairement retreat</h1>
            </div>
            <div className="w-[300px]">
                <img  className="w-[300px] rounded-lg h-[225px]" src="https://i.ibb.co/7bww8fB/img3.jpg" alt="" />
                <h1 className="text-xl text-center">Engagement parties</h1>
            </div>
            <div className="w-[300px] ">
                <img  className="w-[300px] h-[225px] rounded-lg" src="https://i.ibb.co/T8YyBL5/birthday.jpg" alt="" />
                <h1 className="text-xl text-center">Birthday Parties</h1>
            </div>
            <div className="w-[300px]">
                <img  className="w-[300px] rounded-lg" src="https://i.ibb.co/XVhySZG/anniver.jpg" alt="" />
                <h1 className="text-xl text-center">Mediterranean Wedding on Rhodes Island </h1>
            </div>
        </div>
    );
};

export default Gallery;