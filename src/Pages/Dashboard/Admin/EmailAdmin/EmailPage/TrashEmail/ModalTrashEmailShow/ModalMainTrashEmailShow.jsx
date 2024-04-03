import { useParams } from "react-router-dom";
import ModalTrashEmailContent from "./ModalTrashEmailContent";
import { useEmailAll } from "../../../../../../../api/useEmailAll";
import MainTrashEmail from "./MainTrashEmail";
import EmailTrashImageFile from "./EmailTrashImageFile";

const ModalMainTrashEmailShow = () => {
    const { id } = useParams();
    const [email, refetch, isLoading] = useEmailAll();
    const findEmail = email.find(email => email?._id === id);
    return (
        <>
            <ModalTrashEmailContent findEmail={findEmail} />
            {/* main text */}
            <MainTrashEmail findEmail={findEmail} />
            <EmailTrashImageFile findEmail={findEmail} />
        </>
    );
};

export default ModalMainTrashEmailShow;