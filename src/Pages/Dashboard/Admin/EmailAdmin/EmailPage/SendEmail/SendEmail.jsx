import useAuth from "../../../../../../api/useAuth";
import { useEmailAdmin } from "../../../../../../api/useEmailAll";
import EmailRightSite from "../../EmailRightSite/EmailRightSite";

const SendEmail = () => {
    const [email] = useEmailAdmin();
    const { user } = useAuth();
    const sendEmailFilter = email.filter(email => email?.sendEmail === user?.email)
    console.log(sendEmailFilter);
    return (
        <div>
           <EmailRightSite allEmail={sendEmailFilter} />
        </div>
    );
};

export default SendEmail;