import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import AboutUs from './pages/AboutUsPage/AboutUs/AboutUs.jsx';
import Service from './pages/ServicePage/Service/Service.jsx';
import Temp from './pages/TempPage/Temp/Temp.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/aboutUs',
        element: <AboutUs />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: '/templates',
        element: <Temp />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
