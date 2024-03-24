import { Link } from "react-router-dom";
import allUsers from "../../../../../../../api/useAllUser";

const SendEmailUserInfo = ({ email }) => {
    const [users] = allUsers();
    const emailFilter = users.filter(emailOne => emailOne?.email === email?.toEmail)
    const { _id, subject } = email;
    return (
        <>
            {
                emailFilter.length > 0 ?
                    <>
                        {
                            emailFilter.map(email =>
                                <Link to={`/dashboard/email/send/${_id}`} key={email?._id}
                                    className="text-slate-800 flex items-center pl-2"
                                >
                                    {
                                        email?.image ?
                                            <img src={email?.image} alt="user image" className="w-8 h-8 rounded-full" />
                                            :
                                            <img src="" alt="user image" className="w-8 h-8 rounded-full" />
                                    }
                                    <div className="md:flex items-center gap-3">
                                        <h3 className="text-base font-semibold pl-2">{email?.name}</h3>
                                        <p className="text-xs">{subject}</p>
                                    </div>
                                </Link>
                            )
                        }
                    </>
                    :
                    <>
                       <div className="text-red-500" >No matching users found</div>
                    </>
            }

        </>
    );
};

export default SendEmailUserInfo;