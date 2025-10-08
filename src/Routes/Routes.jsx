import { createBrowserRouter } from "react-router";
import App from "../App";
import Rootlyout from "../Layouts/Rootlyout";
import Home from "../Pageses/Home";
import Appdetils from "../Pageses/Appdetils";
import Allapps from "../Pageses/Allapps";
import Installedapp from "../Pageses/Installedapp";
import Errorpage from "../Pageses/Errorpage";
import Notfoundpage from "../Pageses/Notfoundpage";


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
        path: '/errorelemet',
        element: <Notfoundpage></Notfoundpage>,
      },

      {
        path: '/allapps',
        element: <Allapps></Allapps>,
      },
      {
        path: '/installation',
        element: <Installedapp></Installedapp>,
      },
      {
        path: '*',
        element: <Errorpage></Errorpage>,
      },
      
    ]

    
  },
  


]);

export default router