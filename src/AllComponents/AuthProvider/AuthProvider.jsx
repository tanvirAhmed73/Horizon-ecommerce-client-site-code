import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    // create user
    const createUser = (emailOrNumber, password)=>{
        return createUserWithEmailAndPassword(auth, emailOrNumber, password)
    }

    // user Login
    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    // userLogOut
    const logOut = ()=>{
        return signOut(auth);
    }


    const authInfo = {createUser,userLogin, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;