
const FindGift = () => {
    const handleFindGift = e => {
        e.preventDefault();
        const form = e.target;
        const code = form.payCode.value;

        console.log(code);
    }
    return (
        <div className=" w-3/4 h-28 mx-auto relative -top-4 bg-slate-200 shadow-2xl rounded-md p-2 z-50">
            <div className="flex items-center gap-5 w-10/12 mx-auto ">
                <h1 className="text-xl font-bold text-center text-slate-500 pt-6">FIND THE PERFECT GIFT</h1>
                <form
                    onSubmit={handleFindGift}
                    className="flex items-center gap-3">
                    <div>
                        <label htmlFor="" className="">Where is it going?</label> <br />
                        <input 
                        type="text" 
                        name="payCode" 
                        id="" 
                        placeholder="Payment code!" 
                        className="px-2 py-1 border border-slate-700 rounded-md placeholder:text-sm placeholder:capitalize text-slate-800 outline-black mt-1" />
                    </div>
                    <div>
                        <label htmlFor="" className="">Occasion</label> <br />
                        <select 
                        id="my_select" 
                        className="px-2 py-1 border border-slate-700 rounded-md placeholder:text-sm placeholder:capitalize text-slate-700 outline-black mt-1">
                            <option value="1" selected>Thanksgiving</option>
                            <option value="2">Congratulation</option>
                            <option value="3">Birthday</option>
                            <option value="4">Anniversary</option>
                            <option value="5">Love</option>
                            <option value="6">I'm sorry</option>
                            <option value="7">Flower Gift</option>
                            <option value="8">New Baby</option>
                            <option value="9">Thank You</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit"
                            value="Find A Gift"
                            className="py-[7px] px-4 bg-blue-900 rounded-md text-sm font-semibold text-white cursor-pointer mt-6 uppercase" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FindGift;