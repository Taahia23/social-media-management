
const About = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row mt-20">
                <div className="flex flex-col justify-center items-left space-y-4">
                    <h1 className="text-5xl font-bold mb-3 text-center lg:text-left">Vivienne Eastwood</h1>
                    <h2 className="text-2xl">WHAT WE DO</h2>
                    <p className="font-light">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>
                    <h2 className="text-2xl">WHAT WE DO</h2>
                    <p className="font-light">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>
                </div>
                <div>
                    <img className="w-[700px]" src="https://i.ibb.co/g6hHkbc/about-us-image-03.png" alt="" />
                </div>
            </div>

            <div className="space-y-7 mt-40 mb-40">
                <h1 className="text-5xl text-center font-semibold">Guest Safety Is Our Priority</h1>
                <p className="font-light text-center">Dear friends and family, due to pandemic, only immediate family can participate directly at the wedding. <br /> We will make sure that all safety measures against COVID-19 are respected.</p>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 mx-auto">
                        <div className="card w-96 bg-pink-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center font-semibold text-xl text-pink-700 mb-5">Keep a Safe Distance</h2>
                                <p className="font-light text-center">We kindly ask you to practice social distancing at the event.</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-pink-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center font-semibold text-xl text-pink-700 mb-5">Use Hand Sanitizer</h2>
                                <p className="font-light text-center">Hand santitizers will be conveniently placed at each table.</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-pink-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center font-semibold text-xl text-pink-700 mb-5">Wear Face Masks</h2>
                                <p className="font-light text-center">We kindly ask you to wear face masks that will be provided to you at the venue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;