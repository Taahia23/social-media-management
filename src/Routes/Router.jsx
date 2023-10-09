import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Event from "../Pages/Event/Event";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../Pages/Gallery/Gallery";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/event/:id',
                element: <PrivateRoute><Event></Event></PrivateRoute>,
             
            },
            {
                path: '/blog',
                element:<PrivateRoute> <Blog></Blog></PrivateRoute>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/gallery',
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default Router;