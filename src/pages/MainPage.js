import NavBar from "../components/navBar/NavBar";
import {Outlet} from "react-router-dom";
import Basket from "../components/basket/Basket";

const MainPage = () => {

    return (
        <div style={{position:'relative'}}>
            <NavBar />
            <Outlet />
            <Basket />
        </div>
    );
};

export default MainPage;