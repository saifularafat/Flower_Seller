import { Link } from "react-router-dom";

const PaymentSuccess = () => {
    return (
        <div className="text-center text-3xl">
            <h3> Payment DONE!</h3>
            <Link to="/dashboard/successOrder">Order</Link>
        </div>
    );
};

export default PaymentSuccess;