import useAllFlowers from "../../../../api/useAllFlowers";
import allUsers from "../../../../api/useAllUser";
import useAuth from "../../../../api/useAuth";
import useBookMarlFlower from "../../../../api/useBookMarlFlower";
import userEmailToPayment from "../../../../api/useEmailPayment";
import useTotalPaymentData from "../../../../api/useTotalPaymentData";

const AdminProfile = () => {
    const { user } = useAuth();
    const [users] = allUsers();
    const [flowerAll] = useAllFlowers();
    const [totalPayment] = useTotalPaymentData();
    const checkSuccessPayment = totalPayment.filter(pay => pay.payStatus === "success")
    const admin = users.find(admin => admin.email === user.email)
    console.log("allllllllll 0 ==>", admin);

    const [bookMark,] = useBookMarlFlower();
    const [payments] = userEmailToPayment();
    const checkPayment = payments.filter(pay => pay.payStatus === "success")
    return (
        <>
            {
                admin?.role === "admin" ?
                    <div className="flex justify-between w-full py-2">
                        <div className="text-center space-y-1">
                            <p className="text-gray-500 font-medium">All Users</p>
                            <p className="text-xl font-mono text-gray-700">{users?.length}</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-gray-500 font-medium">All Flowers</p>
                            <p className="text-xl font-mono text-gray-700">{flowerAll?.length}</p>
                        </div>
                        <div className="text-center space-y-1 ">
                            <p className="text-gray-500 font-medium">All Pay</p>
                            <p className="text-xl font-mono text-gray-700">{checkSuccessPayment?.length}</p>
                        </div>
                    </div>
                    :
                    <div className="flex justify-between w-full py-2">
                        <div className="text-center space-y-1">
                            <p className="text-gray-500 font-medium">F. Select</p>
                            <p className="text-xl font-mono text-gray-700">{bookMark?.length}</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-gray-500 font-medium">Order History</p>
                            <p className="text-xl font-mono text-gray-700">{payments?.length}</p>
                        </div>
                        <div className="text-center space-y-1 ">
                            <p className="text-gray-500 font-medium">Pay History</p>
                            <p className="text-xl font-mono text-gray-700">{checkPayment?.length}</p>
                        </div>
                    </div>
            }
        </>
    );
};

export default AdminProfile;