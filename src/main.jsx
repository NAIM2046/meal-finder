import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root/Root.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
import Home from './components/Home/Home.jsx';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.jsx';
import Searchitam from './components/Searchitam/Searchitam.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: "/:idMeal",
        element:<RecipeDetails></RecipeDetails>
      },
      {
        path: "/search/:input",
        element: <Searchitam></Searchitam>
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
