import { useParams } from "react-router-dom";
import EmailImageFile from "./EmailImageFile";
import MainEmail from "./MainEmail";
import ModalEmailContent from "./ModalEmailContent";
import { useEmailAll } from "../../../../../api/useEmailAll";

const ModalMainEmailShow = () => {
    const { id } = useParams();
    const [email, refetch, isLoading] = useEmailAll()
    console.log(id);
    const findEmail = email.find(email => email?._id === id)
    console.log("........... >10 number serial", findEmail);
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