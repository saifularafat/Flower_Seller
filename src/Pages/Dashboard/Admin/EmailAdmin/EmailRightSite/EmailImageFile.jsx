
const EmailImageFile = ({ findEmail }) => {
    console.log("find email image,,,,, >",findEmail);
    return (
        <div className="py-4 px-5 ">
            <p className="text-sm font-medium text-slate-400">2 Attachments</p>
            <div className="space-y-3">
                <div className="flex items-center gap-2 mt-5">
                    <img src={findEmail?.emailImage} alt="" className="object-cover w-12 h-12" />
                    <h5 className="text-xs font-medium text-slate-700">{findEmail?.emailImage.slice(25)}</h5>
                </div>
                <div className="flex items-center gap-2">
                    <img src={''} alt="" className="object-cover w-7 h-8" />
                    <h5 className="text-xs font-medium text-slate-700">performance.xls</h5>
                </div>
            </div>
        </div>
    );
};

export default EmailImageFile;