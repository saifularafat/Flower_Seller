import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import ThanksGiving from "../Pages/ThanksGiving/ThanksGiving";
import Birthday from "../Pages/Birthday/Birthday";
import IndependenceDay from "../Pages/IndependenceDay/IndependentDay";
import Disney from "../Pages/Disney/Disney";
import Valentines from "../Pages/Valentines/Valentines";
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
import Dashboard from "../Layouts/Dashboard";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AllPayment from "../Pages/Dashboard/Admin/AllPayment/AllPayment";
import CashOnDelivery from "../Pages/Dashboard/Admin/OrderInfo/CashOnDelivery/CashOnDelivery";
import SuccessOrder from "../Pages/Dashboard/Admin/OrderInfo/SuccessOrder/SuccessOrder";
import RetuneOrder from "../Pages/Dashboard/Admin/OrderInfo/RetuneOrder/RetuneOrder";
import OrderCancel from "../Pages/Dashboard/Admin/OrderInfo/OrderCancel/OrderCancel";
import UserHome from "../Pages/Dashboard/Users/UserHome/UserHome";
import AddItem from "../Pages/Dashboard/Admin/AddItems/AddItem";
import EmailLayout from "../Layouts/EmailLayout";
import ChatAdmin from "../Pages/Dashboard/Admin/ChatAdmin/ChatAdmin";
import Calender from "../Pages/Dashboard/Admin/Calender/Calender";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import BestOffer from "../Pages/Dashboard/Admin/OFFER/BestOffer/BestOffer";
import SliderChanges from "../Pages/Dashboard/Admin/OFFER/SliderChanges/SliderChanges";
import BannerChange from "../Pages/Dashboard/Admin/OFFER/BannerChange/BannerChange";
import LeftRightBanner from "../Pages/Dashboard/Admin/OFFER/LeftRightBanner/LeftRightBanner";
import FooterChange from "../Pages/Dashboard/Admin/OFFER/FooterChange/FooterChange";
import SelectItems from "../Pages/Dashboard/Users/SelectItems/SelectItems";
import PaymentHistory from "../Pages/Dashboard/Users/PaymentHistory/PaymentHistory";
import AddressAdd from "../Pages/Dashboard/Users/AddressAdd/AddressAdd";
import UserProfile from "../Pages/Dashboard/Users/UserProfile/UserProfile";
import UserEmail from "../Pages/Dashboard/Users/UserEmail/UserEmail";
import UserChat from "../Pages/Dashboard/Users/UserChat/UserChat";
import OrderHistory from "../Pages/Dashboard/Users/OrderHistory/OrderHistory";
import GiftList from "../Pages/GiftList/GiftList";
import TotalFlowerItems from "../Pages/Dashboard/Admin/TotalFlowerItems/TotalFlowerItems";
import SliderFirstPost from "../Pages/Dashboard/Admin/OFFER/SliderChanges/SliderFirstPost";
import SliderSecondPost from "../Pages/Dashboard/Admin/OFFER/SliderChanges/SliderSEcondPost";
import SliderThreePost from "../Pages/Dashboard/Admin/OFFER/SliderChanges/SliderThreePost";
import SliderFourPost from "../Pages/Dashboard/Admin/OFFER/SliderChanges/SliderFourPost";
import SliderFivePost from "../Pages/Dashboard/Admin/OFFER/SliderChanges/SliderFivePost";
import SliderSixPost from "../Pages/Dashboard/Admin/OFFER/SliderChanges/SliderSixPost";
import BannerOne from "../Pages/Dashboard/Admin/OFFER/BannerChange/BannerOne";
import BannerTwo from "../Pages/Dashboard/Admin/OFFER/BannerChange/BannerTwo";
import BannerThree from "../Pages/Dashboard/Admin/OFFER/BannerChange/BannerThree";
import LeftRightOne from "../Pages/Dashboard/Admin/OFFER/LeftRightBanner/LeftRightOne";
import LeftRightTwo from "../Pages/Dashboard/Admin/OFFER/LeftRightBanner/LeftRightTwo";
import LeftRightThree from "../Pages/Dashboard/Admin/OFFER/LeftRightBanner/LeftRightThree";
import LeftRightFour from "../Pages/Dashboard/Admin/OFFER/LeftRightBanner/LeftRightFour";
import FooterWayShop from "../Pages/Dashboard/Admin/OFFER/FooterChange/FooterWayShop";
import FooterCustomService from "../Pages/Dashboard/Admin/OFFER/FooterChange/FooterCustomService";
import FooterOurStores from "../Pages/Dashboard/Admin/OFFER/FooterChange/FooterOurStores";
import FooterCorporate from "../Pages/Dashboard/Admin/OFFER/FooterChange/FooterCorporate";
import BestOfferEdit from "../Pages/Dashboard/Admin/OFFER/BestOffer/BestOfferEdit";
import BannerEdit from "../Pages/Dashboard/Admin/OFFER/BannerChange/BannerEdit";
import LeftRightEdit from "../Pages/Dashboard/Admin/OFFER/LeftRightBanner/LeftRightEdit";
import FooterEdit from "../Pages/Dashboard/Admin/OFFER/FooterChange/FooterEdit";
import EditItemFlower from "../Pages/Dashboard/Admin/TotalFlowerItems/EditItemFlower";
import PaymentOption from "../Pages/Payment/PaymentOption";
import StripePayment from "../Pages/Payment/StripePament/StripePayment";
import SSLPayment from "../Pages/Payment/SSLPayment/SSLPayment";
import CashOnDeliveryPayment from "../Pages/Payment/CashOnDeliveryPayment/CashOnDeliveryPayment";
import FlowerDetails from "../Pages/FlowerDetails/FlowerDetails";
import PrivateRouter from "./PrivateRouter";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/Payment/PaymentFail/PaymentFail";
import SSLPaymentDelivery from "../Pages/Dashboard/Admin/OrderInfo/SSLPaymentDelivery/SSLPaymentDelivery";
import StripePay from "../Pages/Dashboard/Admin/OrderInfo/StripePay/StripePay";
import TotalPayment from "../Pages/Payment/TotalPayment/TotalPayment";
import OrderPending from "../Pages/Payment/OrderPending/OrderPending";
import OrderUseCancel from "../Pages/OrderUse/OrderUseCancel";
import OrderUserDetails from "../Pages/OrderUse/OrderUserDetails";
import IndexEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/IndexEmail/IndexEmail";
import SendEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/SendEmail/SendEmail";
import DraftEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/DraftEmail/DraftEmail";
import StarredEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/StarredEmail/StarredEmail";
import SpamEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/SpamEmail/SpamEmail";
import TrashEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/TrashEmail/TrashEmail";
import PersonalEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/PersonalEmail/ParsonalEmail";
import CompanyEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/CompanyEmail/CompanyEmail";
import ImportantEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/ImportantEmail/ImportanEmail";
import PrivateEmail from "../Pages/Dashboard/Admin/EmailAdmin/EmailPage/PrivateEmail/PrivateEmail";

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
                // loader: () => fetch(`${import.meta.VITE_API_URL}/flowersAll`),
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
                path: "valentineDay-flower",
                element: <Valentines />
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
            {
                path: "flowerDetails/:id",
                element: <FlowerDetails />
            },
            /* main page link */
            /* side page link */
            {
                path: "my-order",
                element:
                    <PrivateRouter>
                        <MyOrder />
                    </PrivateRouter>
            },
            {
                path: "myOrder/orderCancel/:id",
                element: <OrderUseCancel />
            },
            {
                path: "myOrder/orderDetails/:id",
                element: <OrderUserDetails />
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
                path: "gift-list",
                element: <GiftList />
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
                path: "/paymentOption/:id",
                element: <PrivateRouter><PaymentOption /></PrivateRouter>
            },
            {
                path: "/paymentOption/:id",
                element: <PaymentOption />
            },
            {
                path: "/stripePayment/:id",
                element: <StripePayment />
            },
            {
                path: "/sslPayment/:id",
                element: <SSLPayment />
            },
            {
                path: "/cashOnDeliveryPayment/:id",
                element: <CashOnDeliveryPayment />
            },
        ]
    },
    /* Payment success router */
    {
        path: "payment/success/:transition",
        element: <PaymentSuccess />
    },
    {
        path: "payment/fail/:transition",
        element: <PaymentFail />
    },
    /* user create */
    {
        path: "signIn",
        element: <SignIn />
    },
    {
        path: "signUp",
        element: <SignUp />
    },
    {
        path: "terms",
        element: <Terms />
    },

    /* // Dashboard  */
    {
        path: "dashboard",
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
        children: [
            /* Admin link  */
            {
                path: '/dashboard/adminHome',
                element: <AdminHome />
            },
            {
                path: '/dashboard/addItem',
                element: <AddItem />
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers />
            },
            {
                path: '/dashboard/totalFlowerItems',
                element: <TotalFlowerItems />
            },
            {
                path: '/dashboard/editByFlowers/:id',
                element: <EditItemFlower />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/flowersAll/${params.id}`)
            },
            {
                path: '/dashboard/allPayment',
                element: <AllPayment />
            },
            /* order information */
            {
                path: "/dashboard/totalPayment",
                element: <TotalPayment />
            },
            {
                path: "/dashboard/sslPayment",
                element: <SSLPaymentDelivery />
            },
            {
                path: "/dashboard/stripePayment",
                element: <StripePay />
            },
            {
                path: "/dashboard/cashOnDelivery",
                element: <CashOnDelivery />
            },
            {
                path: "/dashboard/orderPending",
                element: <OrderPending />
            },
            {
                path: "/dashboard/successOrder",
                element: <SuccessOrder />
            },
            {
                path: "/dashboard/retuneOrder",
                element: <RetuneOrder />
            },
            {
                path: "/dashboard/orderCancel",
                element: <OrderCancel />
            },
            /* offer and change section link */
            {
                path: "/dashboard/bestOffer",
                element: <BestOffer />
            },
            {
                path: "/dashboard/bestOfferEdit/:id",
                element: <BestOfferEdit />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/offerText/${params.id}`)
            },
            /* slider path */
            {
                path: "/dashboard/sliderChanges",
                element: <SliderChanges />
            },
            {
                path: "/dashboard/sliderChanges/sliderOne",
                element: <SliderFirstPost />
            },
            {
                path: "/dashboard/sliderChanges/sliderTwo",
                element: <SliderSecondPost />
            },
            {
                path: "/dashboard/sliderChanges/sliderThree",
                element: <SliderThreePost />
            },
            {
                path: "/dashboard/sliderChanges/sliderFour",
                element: <SliderFourPost />
            },
            {
                path: "/dashboard/sliderChanges/sliderFive",
                element: <SliderFivePost />
            },
            {
                path: "/dashboard/sliderChanges/sliderSix",
                element: <SliderSixPost />
            },
            /* banner path */
            {
                path: "/dashboard/bannerChanges",
                element: <BannerChange />
            },
            {
                path: "/dashboard/bannerChanges/bannerOne",
                element: <BannerOne />
            },
            {
                path: "/dashboard/bannerChanges/bannerTwo",
                element: <BannerTwo />
            },
            {
                path: "/dashboard/bannerChanges/bannerThree",
                element: <BannerThree />
            },
            {
                path: "/dashboard/bannerChanges/bannerEdit/:id",
                element: <BannerEdit />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/bannerImage/${params.id}`)
            },
            /* L>R> Banner path */
            {
                path: "/dashboard/leftRightBanner",
                element: <LeftRightBanner />
            },
            {
                path: "/dashboard/leftRightBanner/leftRightBannerOne",
                element: <LeftRightOne />
            },
            {
                path: "/dashboard/leftRightBanner/leftRightBannerEdit/:id",
                element: <LeftRightEdit />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/leftRightImage/${params.id}`)
            },
            {
                path: "/dashboard/leftRightBanner/leftRightBannerTwo",
                element: <LeftRightTwo />
            },
            {
                path: "/dashboard/leftRightBanner/leftRightBannerThree",
                element: <LeftRightThree />
            },
            {
                path: "/dashboard/leftRightBanner/leftRightBannerFour",
                element: <LeftRightFour />
            },
            /* footer api Path */
            {
                path: "/dashboard/footerChange",
                element: <FooterChange />
            },
            {
                path: "/dashboard/footerChange/footerWayToShop",
                element: <FooterWayShop />
            },
            {
                path: "/dashboard/footerChange/footerCustomService",
                element: <FooterCustomService />
            },
            {
                path: "/dashboard/footerChange/footerOurStores",
                element: <FooterOurStores />
            },
            {
                path: "/dashboard/footerChange/footerCorporate",
                element: <FooterCorporate />
            },
            {
                path: "/dashboard/footerChange/footerEdit/:id",
                element: <FooterEdit />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/footerChange/${params.id}`)
            },
            /* help section */
            /* Email Router */
            {
                path: "/dashboard/email",
                element: <EmailLayout />,
                children: [
                    {
                        path: "/dashboard/email",
                        element: <IndexEmail />
                    },
                    {
                        path: "/dashboard/email/index",
                        element: <IndexEmail />
                    },
                    {
                        path: "/dashboard/email/send",
                        element: <SendEmail />
                    },
                    {
                        path: "/dashboard/email/draft",
                        element: <DraftEmail />
                    },
                    {
                        path: "/dashboard/email/starred",
                        element: <StarredEmail />
                    },
                    {
                        path: "/dashboard/email/spam",
                        element: <SpamEmail />
                    },
                    {
                        path: "/dashboard/email/trash",
                        element: <TrashEmail />
                    },
                    {
                        path: "/dashboard/email/personal-email",
                        element: <PersonalEmail />
                    },
                    {
                        path: "/dashboard/email/company-email",
                        element: <CompanyEmail />
                    },
                    {
                        path: "/dashboard/email/important-email",
                        element: <ImportantEmail />
                    },
                    {
                        path: "/dashboard/email/private-email",
                        element: <PrivateEmail />
                    },
                ]
            },

            {
                path: "/dashboard/chat",
                element: <ChatAdmin />
            },
            {
                path: "/dashboard/calender",
                element: <Calender />
            },
            {
                path: "/dashboard/adminProfile",
                element: <AdminProfile />
            },
            /* user DASHBOARD link */
            {
                path: "/dashboard/userHome",
                element: <UserHome />
            },
            {
                path: "/dashboard/selectItems",
                element: <SelectItems />
            },
            {
                path: "/dashboard/orderHistory",
                element: <OrderHistory />
            },
            {
                path: "/dashboard/paymentHistory",
                element: <PaymentHistory />
            },
            {
                path: "/dashboard/addressAdd",
                element: <AddressAdd />
            },
            {
                path: "/dashboard/email",
                element: <UserEmail />
            },
            {
                path: "/dashboard/userChat",
                element: <UserChat />
            },
            {
                path: "/dashboard/userProfile",
                element: <UserProfile />
            },
        ]
    }
]);
export default router;