import { useParams } from "react-router-dom";
import MainSendEmail from "./MainStarredEmail";
import EmailSendImageFile from "./EmailStarredImageFile";
import { useEmailAll } from "../../../../../../../api/useEmailAll";
import ModalStarredEmailContent from "./ModalStarredEmailContent";
import MainStarredEmail from "./MainStarredEmail";
import EmailStarredImageFile from "./EmailStarredImageFile";

const ModalMainStarredEmailShow = () => {
    const { id } = useParams();
    const [email, refetch, isLoading] = useEmailAll();
    const findEmail = email.find(email => email?._id === id);
    return (
        <>
            <ModalStarredEmailContent findEmail={findEmail} />
            {/* main text */}
            <MainStarredEmail findEmail={findEmail} />
            <EmailStarredImageFile findEmail={findEmail} />
        </>
    );
};

export default ModalMainStarredEmailShow;