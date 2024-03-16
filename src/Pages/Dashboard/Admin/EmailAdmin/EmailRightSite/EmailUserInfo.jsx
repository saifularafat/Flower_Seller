import { Link } from "react-router-dom";
import allUsers from "../../../../../api/useAllUser";

const EmailUserInfo = ({ email }) => {
    const [users] = allUsers()
    const emailFilter = users.filter(emailOne => emailOne?.email === email?.toEmail)
    const { _id, subject } = email;
    // console.log("======> serial 07 .", emailFilter);
    return (
        <>
            {
                emailFilter.map(email =>
                    <Link to={`/dashboard/email/${_id}`} key={email?._id}
                        // <button key={email?._id}
                        //     onClick={() => setEmailClick(!emailClick)}
                        className="text-slate-800 flex items-center pl-2"
                    >

                        <img src={email?.image} alt="user image" className="w-8 h-8 rounded-full" />
                        <div className="md:flex items-center gap-3">
                            <h3 className="text-base font-semibold pl-2">{email?.name}</h3>
                            <p className="text-xs">{subject}</p>
                        </div>
                        {/* </button> */}
                    </Link>
                )
            }

        </>
    );
};

export default EmailUserInfo;