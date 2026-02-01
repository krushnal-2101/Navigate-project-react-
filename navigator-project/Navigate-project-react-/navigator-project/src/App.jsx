import React from 'react'
import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import MainLayout from './layout/MainLayout';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index:true,
          element:<Home/>
        },
        {
          path:"About",
          element:<About/>
        },{
          path:"Services",
          element:<Services/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>

  )
}

export default App
