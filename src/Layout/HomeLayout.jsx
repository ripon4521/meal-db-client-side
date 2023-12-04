import { Outlet } from "react-router-dom";

import Header from "../Page/Home/Header";


const HomeLayout = () => {
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;