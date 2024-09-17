// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/Navbar';
import Features from './components/features';
import Home from './components/Home';
import Team from './components/team';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/components/features.jsx",
      element: <><NavBar/><Features/></>
    },
    {
      path: "/components/team.jsx",
      element: <><NavBar/><Team/></>
    },
  ])

  return (
    <>
    
<RouterProvider router={router}/>
{/* <Home/> */}







    </>
  )
}

export default App
