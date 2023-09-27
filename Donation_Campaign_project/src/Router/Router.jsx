import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../MainLayout/Main_layout";
import Home from "../Pages/Home/Home";
import Error_page from "../Component/Error_page";
import Single_card from "../Pages/Single card/Single_card";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Banner from "../Pages/Home/Banner";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<Main_layout></Main_layout>,
        errorElement:<Error_page></Error_page>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('/campaign.json')
            },
            {
                path:"/Single_card/:id",
                element:<Single_card></Single_card>,
                loader: ()=> fetch('/campaign.json')
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>,
                loader: ()=> fetch('/campaign.json')
            },
            {
                path:"/",
                element:<Banner></Banner>,
                loader: ()=> fetch('/campaign.json')
            }
        ]
    }
])

export default myCreatedRoute;