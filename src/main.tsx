import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';

import Error from './pages/404';
import UserDetails from './pages/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user-details/:id",
    element: <UserDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
