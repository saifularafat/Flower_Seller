
const SortBy = () => {
    return (
            <div className="flex items-center justify-between pb-2">
                <p className="font-medium text-lg">89 Result</p>
                <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold">Sort by</h4>
                    <div className="relative transition-all duration-300">
                        <div>
                            <select
                                id=""
                                name=""
                                onChange={() => { }}
                                className="px-2 py-1 text-base font-medium border border-slate-700 rounded-md placeholder:text-sm placeholder:capitalize text-slate-700 outline-none">
                                <option value="bestSeller" defaultValue="Thanksgiving">Best Seller</option>
                                <option value="lowToHight">Price: Low To Hight</option>
                                <option value="hightToLow">Price: Hight To Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SortBy;