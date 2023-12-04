import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    };
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            // if (currentUser) {

            // }
        })
        return unsubscribe();
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        updateUserProfile,
        createUser,
        login,
        googleLogin,
        githubLogin,
        logOut

    };
    return (
        <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>
    )
};
export default AuthProvider;
