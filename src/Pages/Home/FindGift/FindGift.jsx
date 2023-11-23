
const FindGift = () => {
    const handleFindGift = e => {
        e.preventDefault();
        const form = e.target;
        const code = form.payCode.value;
        const occasionValue = form.my_select.value;

        console.log(code, "occasionValue => ", occasionValue);
    }
    return (
        <div className=" w-3/4 h-28 mx-auto relative -top-4 bg-slate-200 shadow-2xl rounded-md p-2 z-50">
            <div className="flex items-center gap-5 w-10/12 mx-auto ">
                <h1 className="text-xl font-bold text-center text-slate-500 pt-6">FIND THE PERFECT GIFT</h1>
                <form
                    onSubmit={handleFindGift}
                    className="flex items-center gap-3">
                    <div>
                        <label htmlFor="payCode" className="">Where is it going?</label> <br />
                        <input 
                        type="text" 
                        name="payCode" 
                        id="" 
                        placeholder="Payment code!" 
                        className="px-2 py-1 border border-slate-700 rounded-md placeholder:text-sm placeholder:capitalize text-slate-800 outline-black mt-1" />
                    </div>
                    <div>
                        <label htmlFor="my_select" className="">Occasion</label> <br />
                        <select 
                        id="my_select" 
                        name="my_select"
                        onChange={() =>{}}
                        className="px-2 py-1 border border-slate-700 rounded-md placeholder:text-sm placeholder:capitalize text-slate-700 outline-black mt-1">
                            <option value="thanksgiving" defaultValue="Thanksgiving">Thanksgiving</option>
                            <option value="congratulation">Congratulation</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="love">Love</option>
                            <option value="imsorry">I'm sorry</option>
                            <option value="flowergift">Flower Gift</option>
                            <option value="newbaby">New Baby</option>
                            <option value="thankyou">Thank You</option>
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