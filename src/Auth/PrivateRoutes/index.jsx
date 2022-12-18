import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ACCESS_TOKEN, ROUTES } from '../../constants';

const PrivateRoutes = () => {
  let accessToken = localStorage.getItem(ACCESS_TOKEN);
  return accessToken ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoutes;
