import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";


const myCreatedRoute = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/favourites",
            element:<Favourites></Favourites>
        }
      ]
    }
]) 

export default myCreatedRoute;