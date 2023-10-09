import { Outlet } from "react-router-dom";
import Header from "../Pages/shared/Header/Header";
import Navbar from "../Pages/shared/Navbar/Navbar";
import Footer from "../Pages/shared/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-poppins">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;