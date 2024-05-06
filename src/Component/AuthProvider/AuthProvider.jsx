import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebaseConfig";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {createUser, loginUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;