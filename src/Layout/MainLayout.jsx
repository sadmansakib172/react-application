import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";


const MainLayout = () => {
    const loc = useLocation()
    useEffect(()=>{
              
        if(loc.pathname === '/')
        {
            document.title='phone-home'
        }
        else{
            document.title = `phone ${loc.pathname.replace('/', '-')}`
        }
    }, [loc.pathname])
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;