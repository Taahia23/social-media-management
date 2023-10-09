import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li><NavLink to={'/'}>HOME</NavLink></li>
        <li><NavLink to={'/about'}>ABOUT US</NavLink></li>
        <li><NavLink to={'/blog'}>BLOG</NavLink></li>
        <li><NavLink to={'/gallery'}>GALLERY</NavLink></li>
    </>



    return (
        <div>
            <div className="navbar rounded-full bg-pink-500 mt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                           {/* <img className="rounded-full" src="https://i.ibb.co/hf6z4s9/user.png" alt="" /> */}
                           {
                            user ? <img src={user.photoURL} alt="" />
                            : 
                            <img className="rounded-full" src="https://i.ibb.co/hf6z4s9/user.png" alt="" />
                           }
                        </div>
                    </label>
                 {
                    user && <span>{user.email}</span>
                    
                 }
                    {
                        user ? 
                        <button onClick={handleSignOut} className="btn ml-5 mr-5">Signout</button>
                        :
                         <Link to={'/login'}>
                        <button className="btn ml-5 mr-5">Login</button>
                    </Link>
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;