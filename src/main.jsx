import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './home'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import File from "./Filenotfound"
import ContactUs from "./contacts"
import Login  from "./login"
import OurStory from './ourstory'
const router = createBrowserRouter([
    {
    path: "/career_connect/",
    element: <Home/>,
    errorElement: <File/>
    },
    {
        path:"/career_connect/contactUs",
        element:<ContactUs/>,
        errorElement:<File/>
    },
    {
        path:"/career_connect/login",
        element:<Login/>,
        errorElement:<File/>
    },
    {
      path:"/career_connect/ourStory",
      element:<OurStory/>,
      errorElement:<File/>
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
