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


            <div className="hero min-h-min bg-pink-50 mb-40 relative">
                <div className="hero-content justify-between flex-col lg:flex-row">
                    <img src="https://i.ibb.co/khm00Dp/img5-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Email" />
                            <button className="btn join-item rounded-r-full bg-pink-600 text-white">Get in touch</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;