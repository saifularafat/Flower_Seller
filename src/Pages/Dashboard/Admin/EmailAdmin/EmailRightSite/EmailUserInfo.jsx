
const EmailUserInfo = ({setEmailClick, emailClick}) => {
    return (
        <button
            onClick={() => setEmailClick(!emailClick)}
            className="text-slate-800 flex items-center pl-2">
            <img src={''} alt="user image" className="w-8 h-8 rounded-full" />
            <div className="md:flex items-center gap-3">
                <h3 className="text-base font-semibold pl-2">Katie Brandt</h3>
                <p className="text-xs">Bring discussion same boy include care.</p>
            </div>
        </button>
    );
};

export default EmailUserInfo;