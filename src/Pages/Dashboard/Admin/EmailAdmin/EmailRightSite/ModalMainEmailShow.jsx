import { useParams } from "react-router-dom";
import EmailImageFile from "./EmailImageFile";
import MainEmail from "./MainEmail";
import ModalEmailContent from "./ModalEmailContent";
import { useEmailAll } from "../../../../../api/useEmailAll";

const ModalMainEmailShow = ({toEmailFilter}) => {
    const { id } = useParams();
    const [email, refetch, isLoading] = useEmailAll()
    const findEmail = email.find(email => email?._id === id)
    return (
        <>
            <ModalEmailContent findEmail={findEmail} />
            {/* main text */}
            <MainEmail findEmail={findEmail} />
            <EmailImageFile findEmail={findEmail} />
        </>
    );
};

export default ModalMainEmailShow;