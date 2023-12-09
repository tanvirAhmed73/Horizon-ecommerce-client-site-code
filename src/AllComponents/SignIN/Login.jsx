import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()
    const {userLogin} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        setLoginError('');
        
        userLogin(email,password)
        .then(()=>{
            navigate('/')
        })
        .catch(()=>{
            setLoginError('Email or password does not exist.')
        })
    }


  return (
    <div className="mb-16">

        {/* sign in card */}
        <div className="card w-96 glass mx-auto mt-16  p-6">
            <div>
                <form onSubmit={handleLogin}>

                    <h1 className="text-3xl mb-3 font-bold">Sign in</h1>
                    
                    {/* email or mobile phone number */}
                    <p className="font-semibold">Email or mobile phone number</p>
                    <input  className="input input-bordered required: input-sm border-black mt-2 w-full" name="email" type="email" required/> <br />
                    
                    {/* password */}
                    <div className="flex justify-between mt-4">
                        <p className="font-semibold">Password</p>
                        <Link className="text-blue-800 hover:text-yellow-700 hover:underline">Forget your Password?</Link>
                    </div>

                    <input className="input input-bordered required: input-sm border-black mt-2 w-full" name="password" type="password" id="" required/>
                    {
                        loginError && <p className="text-red-700 text-xs">{setLoginError}</p>
                    }
                    <button type="submit" className="btn bg-yellow-400 btn-sm w-full mt-3">Sign in</button>
                    
                </form>
                
                <p className="mt-2 text-xs font-semibold mb-8">
                    By continuing, you agree to Horizon's  
                    <Link className="text-blue-700 hover:underline"> Conditions of <br /> use </Link>
                    and <Link className="text-blue-700 hover:underline">Privacy Notice</Link>
                </p>
            </div>

            {/* todo: add drop down menu */}
            <div>
            </div>

            <hr className="border-black"/>

            <h1 className="mt-6 font-bold">Buying for work?</h1>
            <Link className="mt-1 text-blue-700 hover:underline">Shop on Amazon Business</Link>
        </div>

        <div className=" text-center mt-7">
            New to Horizon? <br />
            <Link to={'/signUP'}>
                <button className="btn btn-sm px-24 mt-1 border-black">Create your Horizon account</button>
            </Link>
        </div>

        

    </div>
  );
};

export default Login;
