import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUP = () => {

    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const reEnterPassword = form.reEnterPassword.value;

        setRegisterError('');

        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters')
            return;
        }else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
            setRegisterError("Your password should have at least six Characters,One Upper Case, & Special character")
            return;
        }


        // verify password== re_enter Password & create User
        if(password === reEnterPassword){
            createUser(email,password)
            .then(() => {
                //signed up
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Account Create Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                form.reset()
            })
            .catch(()=>{
                setRegisterError('Email already in use')
            })
        }else{
            setRegisterError("Password must Match");
        }


    }

    


    return (
        <div>

        {/* sign in card */}
        <div className="card w-96 glass mx-auto mt-16 p-6 mb-16">
            <div>
                <form onSubmit={handleSignUp}>
                    <h1 className="text-3xl mb-3 font-bold">Create account</h1>
                    {/* your name */}
                    <p className="font-semibold">Your name</p>
                    <input className="input input-bordered input-sm border-black mt-2 w-full" name="name" placeholder="First and last name" type="text" required/> <br />
                    {/* Your Number or email */}
                    <p className="font-semibold">Mobile number or email</p>
                    <input className="input input-bordered input-sm border-black mt-2 w-full" name="email" type="email" required/> <br />
                    {/* password */}
                    <p className="font-semibold">Password</p>
                    <input className="input input-bordered input-sm border-black mt-2 w-full" name="password" placeholder="At least 6 characters" type="password" /> <br />
                    <p className="text-xs mb-2">*Passwords must be at least 6 characters.</p>
                    {/* Re-enter password */}
                    <p className="font-semibold">Re-enter password</p>
                    <input className="input input-bordered input-sm border-black mt-2 w-full" name="reEnterPassword" type="password" /> <br />
                    {
                        registerError && <p className="text-xs text-red-700">{registerError}</p>
                    }
                    <button type="submit" className="btn bg-yellow-400 btn-sm w-full mt-3">Continue</button>
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

            <div className="flex">
                <p>Already have an account? </p>
                <Link to={'/login'} className="hover:text-yellow-700 hover:underline text-blue-800 pl-1"> Sign in</Link>
            </div>
        </div>


        

    </div>
    );
};

export default SignUP;