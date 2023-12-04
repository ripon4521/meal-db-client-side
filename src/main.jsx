import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeLayout from './Layout/HomeLayout';

import RecipeDetails from './Page/Details/RecipeDetails';
import Home from './Page/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout>,
    children:[{
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('http://localhost:5000/receipe')

    },
    {
      path:'/recipe/:strCategory',
      element:<RecipeDetails></RecipeDetails>,
      loader:({params})=>fetch(`http://localhost:5000/receipe/${params.strCategory}`)
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>
    }
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
