import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import Catalogo from "./components/Catalogo";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "catalogo",
                element: <Catalogo />
            }
        ]
    }
]);

export default router; 