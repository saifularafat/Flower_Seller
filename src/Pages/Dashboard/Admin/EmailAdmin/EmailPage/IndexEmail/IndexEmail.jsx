import { useEmailAdmin } from "../../../../../../api/useEmailAll";
import EmailRightSite from "../../EmailRightSite/EmailRightSite";

const IndexEmail = () => {
    const [email] = useEmailAdmin();
    console.log(email);
    return (
        <div>
            <EmailRightSite allEmail={email} />

        </div>
    );
};

export default IndexEmail;