import Home from "../pages/home";
import Admin from "../pages/admin"
import Error from "../pages/error";
export const ROUTES = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/admin',
        element: <Admin/>
    },
    {
        path: "*",
        element:<Error/>
    }
]