
const MainStarredEmail = ({findEmail}) => {
    
    return (
        <div className="py-5 px-5 border-0 border-b border-solid border-slate-300 text-slate-700">
            <p className="text-justify">
              {findEmail?.message}
            </p>
            <div className="pt-8">
                <p className="text-base text-blue-800 capitalize">{findEmail?.userName}</p>
                <p className="mt-1 border-0 border-t border-solid border-slate-300 w-1/5 font-medium">
                    Your Signature
                </p>
            </div>
        </div>
    );
};

export default MainStarredEmail;