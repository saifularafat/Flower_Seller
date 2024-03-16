import { useParams } from "react-router-dom";
import EmailImageFile from "./EmailImageFile";
import MainEmail from "./MainEmail";
import ModalEmailContent from "./ModalEmailContent";

const ModalMainEmailShow = ({ startClick, setStartClick, allEmail }) => {
    const { id } = useParams();
    console.log(id);
    // const findEmail = allEmail.find(email => email?._id === id)
    console.log(allEmail);
    return (
        <>
            <ModalEmailContent startClick={startClick} setStartClick={setStartClick} />
            {/* main text */}
            <MainEmail allEmail={allEmail} />
            <EmailImageFile allEmail={allEmail} />
        </>
    );
};

export default ModalMainEmailShow;