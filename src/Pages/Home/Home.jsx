import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import EventCard from "./EventCard";

const Home = () => {
    const events = useLoaderData();
    console.log(events);
    return (
        <div>
            <Banner></Banner>
            <div className="mt-20 border-b-2 pb-6 text-center space-y-6">
                <h1 className="text-6xl font-semibold">Our Services</h1>
                <p className="text-sm font-extralight">Iterative approaches to strategy foster collaborative thinking to further the overall value proposition. <br /> Podcasting operational change inside ofworkflows to establish</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                {
                    events.map(event => <EventCard key={event.id} event={event}></EventCard>)
                }
            </div>

            <div className="grid grid-cols-3 w-[1250px] h-[150px] bg-pink-100 mb-40 relative mt-20">
                <div className="col-span-1 -mt-8 ml-7">
                    <img className="w-[270px] absolute " src="https://i.ibb.co/khm00Dp/img5-removebg-preview.png" alt="" />
                </div>
                <div className="col-span-2 mx-auto flex flex-row justify-center items-center">
                    <div className="join">
                        <input className="input input-bordered join-item" placeholder="Email" />
                        <button className="btn join-item rounded-r-full bg-pink-600 text-white">Get in touch</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;