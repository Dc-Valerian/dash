import { createBrowserRouter } from "react-router-dom"
import AdminLayout from "../components/block/admin/AdminLayout"
import Dashbord from "../pages/Dashbord"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashbord />
            }
        ]

    }
]) 