import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../api/useAuth";

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const {
        user,
        loading, } = useAuth();
        
    if (loading) {
        /* todo: lOADING PAGE  */
        return <h2>Loading ......</h2>
    }
    if (user) {
        return children
    }

    return <Navigate
        to="/login"
        state={{ from: location }}
        replace></Navigate>
};

export default PrivateRouter;