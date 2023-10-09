import swal from 'sweetalert';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')

    const { createUser } = useContext(AuthContext);

    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        if(password.length<6){
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if(!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password)){
            setRegisterError('Your password should have one uppercase character and have special character');
            return;
        }

        // reset user

        setRegisterError("");
        setSuccess('')

        // create user

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(swal("Good job!", "Your Registration has successful", "success"));

                
                navigate(location?.state ? location.state : '/')
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
                    <h1 className="text-5xl font-bold">Register Here!</h1>

                </div>
                <div className="w-2/3 shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="p-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className='text-center font-semibold  text-red-600'>{registerError}</p>
                    }
                    {
                        success && {success}
                    }

                    <p className='text-center p-5'>Already have any account? Please <Link className='text-blue-600 font-semibold' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;