import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App';
import About from './component/link/About';
import Contract from './component/link/contract';
import Home from './component/Home/Home';
import ErrorPage from './ErrorPage';
import Users from './component/User/Users';
import UserDetails from './component/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children: [
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>,
        errorElement:<ErrorPage></ErrorPage>,
      },
      {
        path:'/users/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>,
        errorElement:<ErrorPage></ErrorPage>,
      },
      {
        path: "/contract",
        element:<Contract></Contract>,
        errorElement:<ErrorPage></ErrorPage>,
      },
    {
      path:"/about",
      element:<About/>,
      errorElement:<ErrorPage></ErrorPage>,
    }]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
