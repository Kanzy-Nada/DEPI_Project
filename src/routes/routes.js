import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import SignupPage from "../pages/Signup/SignupPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                Component: LandingPage
            },
            {
                path: "/login",
                Component: LoginPage
            },
            {
                path: "/signup",
                Component: SignupPage
            },
            {
                path: "/dashboard",
                children: [
                    {
                        index: true,
                        Component: DashboardPage
                    },
                    {
                        
                    }
                ]
            }
        ]
    },
   
    

]);