import { useParams } from "react-router-dom";
// import { useEmailAll } from "../../../../../../../api/useEmailAll";
import MainSendEmail from "./MainSendEmail";
import ModalSendEmailContent from "./ModalSendEmailContent";
import EmailSendImageFile from "./EmailSendImageFile";
import { useEmailAll } from "../../../../../../../api/useEmailAll";

const ModalMainSendEmailShow = () => {
    const { id } = useParams();
    const [email, refetch, isLoading] = useEmailAll();
    const findEmail = email.find(email => email?._id === id);
    return (
        <>
            <ModalSendEmailContent findEmail={findEmail} />
            {/* main text */}
            <MainSendEmail findEmail={findEmail} />
            <EmailSendImageFile findEmail={findEmail} />
        </>
    );
};

export default ModalMainSendEmailShow;