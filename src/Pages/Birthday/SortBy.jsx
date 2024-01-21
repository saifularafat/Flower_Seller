import axios from "axios";

const SortBy = ({ length,setCategory }) => {

    const handleDescendingPrice = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/descendingPrice`)
            .then(res => setCategory(console.log(res.data, "click the button ")))
            .catch(error => console.log(error))
    }
    return (
        <div className="flex items-center justify-between pb-2">
            <p className="font-medium text-lg">{length} Result</p>
            <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold">Sort by</h4>
                <div className="relative transition-all duration-300">
                    <div>
                        <select
                            id=""
                            name=""
                            onChange={() => { }}
                            className="px-2 py-1 text-base font-medium border border-slate-700 rounded-md placeholder:text-sm placeholder:capitalize text-slate-700 outline-none">
                            <option value="pricing" defaultValue="Thanksgiving">pricing</option>
                            {/* <option value="lowToHight"> */}
                                <button onClick={handleDescendingPrice}>
                                    Price: Low To Hight
                                </button>
                            {/* </option> */}
                            <option value="hightToLow" onClick="">Price: Hight To Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortBy;