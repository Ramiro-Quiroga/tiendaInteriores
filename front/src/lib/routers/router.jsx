import { createBrowserRouter } from "react-router";
import Layout from "../../Layout";
import Home from "../../pages/Home";



import { Catalogo} from "../../pages/Catalogo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout principal
    children: [
      { path: "/", element: <Home /> }, 
      { path: "/catalogo", element: <Catalogo /> }, 
      
      
    ],
  },
]);

export default router;