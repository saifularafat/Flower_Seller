import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../api/useAuth";
import Loading from "../Share/Loading/Loading";

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const {
        user,
        loading, } = useAuth();

    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }

    return <Navigate
        to="/signIn"
        state={{ from: location }}
        replace></Navigate>
};

export default PrivateRouter;