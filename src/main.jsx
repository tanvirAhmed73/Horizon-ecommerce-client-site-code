import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './AllComponents/layout/Layout';
import Login from './AllComponents/SignIN/Login';
import SignUP from './AllComponents/SignUp/SignUP';
import AuthProvider from './AllComponents/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signUP',
        element:<SignUP></SignUP>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
