import EmailLeftSite from "../../EmailLeftSite/EmailLeftSite";
import EmailRightSite from "../../EmailRightSite/EmailRightSite";

const IndexEmail = () => {
    return (
        <div>
            <EmailRightSite />
            {/* <div className="grid grid-cols-3 md:grid-cols-8 gap-1 w-full py-2">
                <div className={`col-span-1 md:col-span-2`}>
                    <EmailLeftSite />
                </div>
                <div className={`col-span-2 md:col-span-6`}>
                    <EmailRightSite />
                </div>
            </div> */}
        </div>
    );
};

export default IndexEmail;