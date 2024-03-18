import { Link } from "react-router-dom";
import allUsers from "../../../../../api/useAllUser";

const EmailUserInfo = ({ email }) => {
    const [users] = allUsers()
    const emailFilter = users.filter(emailOne => emailOne?.email === email?.sendEmail)
    const { _id, subject } = email;
    return (
        <>
            {
                emailFilter.map(email =>
                    <Link to={`/dashboard/email/${_id}`} key={email?._id}
                        className="text-slate-800 flex items-center pl-2"
                    >

                        <img src={email?.image} alt="user image" className="w-8 h-8 rounded-full" />
                        <div className="md:flex items-center gap-3">
                            <h3 className="text-base font-semibold pl-2">{email?.name}</h3>
                            <p className="text-xs">{subject}</p>
                        </div>
                    </Link>
                )
            }

        </>
    );
};

export default EmailUserInfo;