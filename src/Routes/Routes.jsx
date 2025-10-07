import { createBrowserRouter } from "react-router";
import App from "../App";
import Rootlyout from "../Layouts/Rootlyout";
import Home from "../Pageses/Home";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Rootlyout></Rootlyout>,
    
    children:[
      {
        index: true,
        element: <Home></Home>,
      }
    ]

    
  },
  


]);

export default router