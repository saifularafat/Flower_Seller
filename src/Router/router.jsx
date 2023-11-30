import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import ThanksGiving from "../Pages/ThanksGiving/ThanksGiving";
import Birthday from "../Pages/Birthday/Birthday";
import IndependenceDay from "../Pages/IndependenceDay/IndependentDay";
import Disney from "../Pages/Disney/Disney";
import Occasions from "../Pages/Occasions/Occasions";
import Sympathy from "../Pages/Sympathy/Sympathy";
import Flowers from "../Pages/Flowers/Flowers";
import Plants from "../Pages/Plants/Plants";
import GiftsFlower from "../Pages/GiftsFlower/GiftsFlower";
import SaleFlower from "../Pages/SaleFlower/SaleFlower";
import Community from "../Pages/Community/Community";
import Chocolate from "../Pages/Chocolate/Chocolate";
import LoveAndRomance from "../Pages/LoveAndRomance/LoveAndRomance";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/", 
                element:<Home />,
            },
            {
                path: "thanksgiving-flower",
                element: <ThanksGiving />
            },
            {
                path: "birthday-flower",
                element: <Birthday />
            },
            {
                path: "independenceday-flower",
                element: <IndependenceDay />
            },
            {
                path: "disney-flower",
                element: <Disney />
            },
            {
                path: "occasions-flower",
                element: <Occasions />
            },
            {
                path: "sympathy-flower",
                element: <Sympathy />
            },
            {
                path: "flowers-6t9",
                element: <Flowers />
            },
            {
                path: "flower-plants",
                element: <Plants />
            },
            {
                path: "gift-flower",
                element: <GiftsFlower />
            },
            {
                path: "chocolate-gift",
                element: <Chocolate />
            },
            {
                path: "loveAndRomance",
                element: <LoveAndRomance />
            },
            {
                path: "flower-sale",
                element: <SaleFlower />
            },
            {
                path: "community",
                element: <Community />
            },
        ]
    },
]);
export default router;