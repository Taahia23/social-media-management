
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between mt-5">
            <img src="https://i.ibb.co/MRn1KpY/avala-removebg-preview.png" alt="" />

            <div className="flex justify-between p-2 gap-3 md:gap-5">
                <div className= "">
                    <h2 className="text-2xl">LOCATION</h2>
                    <h2 className="text-lg font-light">270 Carrer de Mallorca</h2>
                </div>
                <div>
                    <h2 className="text-2xl">HOURS</h2>
                    <h2 className="text-lg font-light">Mon-Fri: 12AM - 7PM</h2>
                </div>
                <div>
                    <h2 className="text-2xl">PHONE</h2>
                    <h2 className="text-lg font-light">1-800-100-900</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;