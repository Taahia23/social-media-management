import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
    const auth = getAuth(app)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
    const provider = new GoogleAuthProvider()
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);



        setSuccess('')

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate after login
                navigate(location?.state ? location.state : '/')
                setSuccess(swal("Good job!", "Your Login has successful", "success"));
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })

    }


    return (
        <div className=" min-h-screen mt-10">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="w-2/3 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="p-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <div className="text-center">
                        Sign in with   <button className="bg-blue-500 text-white ml-3 px-3 py-2 rounded-lg" onClick={handleGoogleSignIn}>Google</button>
                    </div>
                  
                    {
                        success && { success }
                    }
                    {
                        registerError && <p className='text-center font-semibold  text-red-600'>{registerError}</p>
                    }
                    <p className='text-center p-5'>Already have any account? Please <Link className='text-blue-600 font-semibold' to={'/register'}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;