import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage";
import FoodPage from "../pages/FoodPage";
import ClothesPage from "../pages/ClothesPage";
import ElectronicsPage from "../pages/ElectronicsPage";
import FirstPage from "../pages/FirstPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        errorElement: <div>Error</div>,
        children: [
            { index: true, element: <FirstPage/> },
            {
                path: '/food',
                element: <FoodPage />
            },
            {
                path: '/clothes',
                element: <ClothesPage />
            },
            {
                path: '/electronics',
                element: <ElectronicsPage />
            },
        ]
    }
]);
