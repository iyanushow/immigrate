import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './routes/404';
import PathFinder from './routes/PathFinder';
import CRSScore from './routes/Crs';
import Hero from './components/Hero';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: 'path',
        element: <PathFinder />
      },
      {
        path: 'crs-score',
        element: <CRSScore />
      }
    ]
  }
  // {
  //   path: 'contacts/:contactId',
  //   element: <Contact />
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
