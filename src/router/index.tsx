import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Home from '@/views/home';
import Details from '@/views/detail';

const RoutesComponent: React.FC = () => {
  const routesElement = useRoutes([
    {
      path: '/',
      element: <Navigate to="/home" />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/detail',
      element: <Details />,
    }
  ]);

  return routesElement;
}

export default RoutesComponent;
