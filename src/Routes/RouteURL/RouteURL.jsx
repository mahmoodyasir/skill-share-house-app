import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import Services from "../../Components/Services/Services";
import {domain} from "../../rootdomain";
import ServiceDetails from "../../Components/ServiceDetails/ServiceDetails";
import MyReviews from "../../Components/MyReviews/MyReviews";
import AddServices from "../../Components/AddServices/AddServices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AccordianItem from "../../Components/Blog/AccordianItem";
import Blog from "../../Components/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/signin",
                element: <SignIn/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/services",
                element: <Services/>,
                loader: () => fetch(`${domain}/services`)
            },
            {
                path: "/services/:id",
                element: <ServiceDetails/>,
                loader: ({params}) => fetch(`${domain}/services/${params?.id}`)
            },
            {
                path: "/myreviews",
                element: <PrivateRoute><MyReviews/></PrivateRoute>
            },
            {
                path: "/addservices",
                element: <PrivateRoute><AddServices/></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog/>,
                loader: () => fetch(`${domain}/blog`)
            }
        ]
    }
])