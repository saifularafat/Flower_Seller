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
import GiftShop from "../Pages/GiftShop/GiftShop";
import FruitGiftShop from "../Pages/FruitGiftShop/FruitGiftShop";
import AlcoholWineBar from "../Pages/AlcoholWineBar/AlcoholWineBar";
import PersonalizedChristmasGifts from "../Pages/PersonalizedChristmasGifts/PersonalizedChristmasGifts";
import ArtisanCraftedBerries from "../Pages/ArtisanCraftedBerries/ArtisanCraftedBerries";
import MyOrder from "../Share/MyOrder/MyOrder";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Terms from "../Pages/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            /* main page link */
            {
                path: "/",
                element: <Home />,
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
                path: "gift-more-flower",
                element: <GiftsFlower />
            },
            {
                path: "flower-sale",
                element: <SaleFlower />
            },
            {
                path: "community",
                element: <Community />
            },
            /* main page link */
            /* side page link */
            {
                path: "my-order",
                element: <MyOrder />
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
                path: "gift-shops",
                element: <GiftShop />
            },
            {
                path: "fruit-gift-shop",
                element: <FruitGiftShop />
            },
            {
                path: "alcohol-wine-bar-shop",
                element: <AlcoholWineBar />
            },
            {
                path: "personalizedChristmasGifts",
                element: <PersonalizedChristmasGifts />
            },
            {
                path: "ArtisanCraftedBerries",
                element: <ArtisanCraftedBerries />
            },
            {
                path: "terms",
                element: <Terms />
            },
        ]
    },
    {
        path: "signIn",
        element:<SignIn />
    },
    {
        path: "signUp",
        element:<SignUp />
    },
]);
export default router;