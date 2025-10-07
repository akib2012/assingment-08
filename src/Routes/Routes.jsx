import { createBrowserRouter } from "react-router";
import App from "../App";
import Rootlyout from "../Layouts/Rootlyout";
import Home from "../Pageses/Home";
import Appdetils from "../Pageses/Appdetils";
import Allapps from "../Pageses/Allapps";


const router = createBrowserRouter([
  {
    path:'/',
    element: <Rootlyout></Rootlyout>,
    
    children:[
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/appdetils/:id',
        element: <Appdetils></Appdetils>,
      },
      {
        path: '/allapps',
        element: <Allapps></Allapps>,
      }

    ]

    
  },
  


]);

export default router