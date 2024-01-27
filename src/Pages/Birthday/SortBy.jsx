import axios from "axios";

const SortBy = ({ length, category }) => {
    // const flowers = useLoaderData();
    // console.log(flowers);

    /* Ascending Descending handler */
    const handleDescendingPrice = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/descendingPrice`)
            .then(res => category(console.log(res.data, "click the button ")))
            .catch(error => console.log(error))
    }
    const handlerAscending = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/ascendingPrice`)
            .then(res => category(console.log(res.data, "click the button ascending ")))
            .catch(error => console.log(error))
    }
    return (
        <div className="flex items-center justify-between pb-2">
            <p className="md:font-medium text-sm md:text-lg">{length} Result</p>
            <div className="flex items-center gap-2">
                <h4 className="md:text-lg md:font-bold font-medium">Sort by</h4>
                <div className="relative transition-all duration-300">
                    <div>
                        <button onClick={handlerAscending}>ascend</button>
                        <button onClick={handleDescendingPrice}>Descend</button>
                        {/* <select
                            id=""
                            name=""
                            onChange={() => { }}
                            className="px-2 py-1 text-base font-medium border border-slate-700 rounded-md placeholder:text-sm placeholder:capitalize text-slate-700 outline-none">
                            <option value="pricing" defaultValue="pricing" onClick={console.log("this pricing button")}>pricing</option>
                            <option value="lowToHight" onClick={
                                console.log("this Descending Price")
                                // handleDescendingPrice
                                }>
                                Price: Low To Hight
                            </option>
                            <option value="hightToLow" onClick={handlerAscending}>Price: Hight To Low</option>
                        </select> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortBy;