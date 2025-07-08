import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {
                index: true,
                Component:HomePage
            },
            {

            }
        ]
    }
])
export default router