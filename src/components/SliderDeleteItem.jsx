// import axios from "axios";
// import useSliderGet from "../api/useSliderGet";
// import Swal from "sweetalert2";

// const SliderDeleteItem = ({ id, deleted }) => {
//     const [sliders, refetch] = useSliderGet();
//     const handlerDelete = (deleted) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be Select Slider delete!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 // axios.delete(`${import.meta.env.VITE_API_URL}/bookmarks/${select._id}`)
//                 axios.delete(`http://localhost:4000/sliderImage/${id}`)
//                     .then(data => {
//                         console.log(data);
//                         if (data.data.deletedCount > 0) {
//                             refetch();
//                             Swal.fire(
//                                 'Deleted!',
//                                 'Your Slider has been deleted.',
//                                 'success'
//                             )
//                         }
//                     })
//             }
//         })
//     }
//     return (
//         <div>
//             {
//                 sliders.map(deleted =>
//                     <button
//                         key={deleted?._id}
//                         onClick={() => handlerDelete(deleted)}
//                         className="text-sm font-medium tracking-wider bg-red-700 rounded-md  md:py-[6px] py-1 md:px-6 px-4 text-white hover:bg-red-400 hover:text-slate-900 transition-all duration-200">Delete</button>)
//             }
//         </div>
//     )
// };

// export default SliderDeleteItem;