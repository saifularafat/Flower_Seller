import useAuth from "../../../../../../api/useAuth";
import { useEmailAll } from "../../../../../../api/useEmailAll";
import EmailRightSite from "../../EmailRightSite/EmailRightSite";

const IndexEmail = () => {
    const [email] = useEmailAll();
    const { user } = useAuth();
    const toEmailFilter = email.filter(email => email?.toEmail === user?.email)
    console.log(toEmailFilter);
    return (
        <div>
            <EmailRightSite allEmail={toEmailFilter} />
        </div>
    );
};

export default IndexEmail;