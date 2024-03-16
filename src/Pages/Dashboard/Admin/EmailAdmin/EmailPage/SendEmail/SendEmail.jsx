import useAuth from "../../../../../../api/useAuth";
import { useEmailAll } from "../../../../../../api/useEmailAll";
import EmailRightSite from "../../EmailRightSite/EmailRightSite";

const SendEmail = () => {
    const [email] = useEmailAll();
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