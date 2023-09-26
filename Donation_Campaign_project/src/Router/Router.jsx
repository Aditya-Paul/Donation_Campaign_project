import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../MainLayout/Main_layout";
import Home from "../Pages/Home/Home";
import Error_page from "../Component/Error_page";
import Single_card from "../Pages/Single card/Single_card";
import Donation from "../Pages/Donation/Donation";

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
            }
        ]
    }
])

export default myCreatedRoute;