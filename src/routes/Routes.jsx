import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import DhasdBord from "../pages/DhasdBord";
import CoffeeCads from "../components/CoffeeCads";
import CoffeeDetails from "../pages/CoffeeDetails";

const routs = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () =>fetch('../categories.json'),
                children:[{
                    path:'/category/:category',
                    element: <CoffeeCads/>,
                    loader: () =>fetch('../coffees.json'),
                },
                {
                    path:'/',
                    element: <CoffeeCads/>,
                    loader: () =>fetch('../coffees.json'),
                },
            ],
           
            },
            {
                path: '/coffees',
                element:<Coffee></Coffee>,
                loader: () =>fetch('../coffees.json')
            },
            {
                path: '/dashboard',
                element:<DhasdBord></DhasdBord>
            },
            {
                path: '/coffee/:id',
                element:<CoffeeDetails/>,
                loader: () =>fetch('../coffees.json')
            },
        ]
    }
])
export default routs