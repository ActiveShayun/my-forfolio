import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../componets/layout/MainLayout";
import HomeLayout from "../componets/homeLayout/HomeLayout";
import AllProject from "../componets/homeLayout/Projects/AllProject";
import Design from "../componets/homeLayout/Projects/Design";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
                children: [
                    {
                        path: "/",
                        element: <AllProject />
                    },
                    {
                        path: "design",
                        element: <Design />
                    },
                  
                ]
            },

        ]
    },

])

export default router;