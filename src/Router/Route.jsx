import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Pages/Phone/Phone";


const myCreatedRoute = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=>fetch(`/public/Phones.json`)
        },
        {
            path:"/favourites",
            element:<Favourites></Favourites>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/phones/:id",
            element:<Phone></Phone>,
            loader: ()=>fetch(`/public/Phones.json`)
        }
      ]
    }
]) 

export default myCreatedRoute;