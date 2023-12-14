import { useRoutes } from "react-router-dom"
import "./App.css"
import "../src/asstes/main.css"
import Signin from "../src/pages/Sign-in";
import Signup from '../src/pages/Sign-up';
import Userprofile  from '../src/pages/Userprofile';
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
import Buytickets from "./pages/Buy-tickets";
import Eventdetails from "../src/pages/Eventdetails";
import Popularevents from '../src/pages/Popularevents';
import Freeevents from '../src/pages/Freeevents';
import Todaysevent from "./pages/Todaysevent";
import Tickets from "./pages/Tickets";
import App from "../src/components/container/App";
import Sellticket from "./pages/Sell-ticket";
import Createevent from "./pages/Createevent";
import Organizersignup from "./pages/Organizersign-up";
import Organizersignin from "./pages/Organizersign-in";
import Organizerforgetpassword from "./pages/Organizerforgetpassword";
import Organizerresetpassword from "./pages/Organizerresetpassword";
export default function Router() {
    return useRoutes([
        {
            path: "/", element: <App />
        },
        {
            path: "/Eventdetails", element: <Eventdetails />
        },
        {
            path: "/Buytickets", element: <Buytickets />
        },
        {
            path: "/Popularevents", element: <Popularevents />
        },
        {
            path: "/Freeevents", element: <Freeevents />
        },
        {
            path: "/Todaysevent", element: <Todaysevent />
        },
        {
            path: "/Signup", element: <Signup />
        },
        {
            path: "/Signin", element: <Signin />
        },
        {
            path: "/Userprofile", element: <Userprofile />
        },
        {
            path: "/Forgetpassword", element: <Forgetpassword />
        },
        {
            path: "/Resetpassword", element: <Resetpassword />
        },
        {
            path: "/Tickets", element: <Tickets />
        },
        {
            path: "/Sellticket", element: <Sellticket />
        },
        {
            path: "/Createevent", element: <Createevent />
        },
        {
            path: "/Organizersignup", element: <Organizersignup />
        },
        {
            path: "/Organizersignin", element: <Organizersignin />
        },
        {
            path: "/Organizerforgetpassword", element: <Organizerforgetpassword />
        },
        {
            path: "/Organizerresetpassword", element: <Organizerresetpassword />
        },
    ])
}
