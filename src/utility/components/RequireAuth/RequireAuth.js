import React from 'react';
import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '../../../utility/constants';

const RequireAuth = ({ children }) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to={APP_ROUTES.LOGIN} />;
  }
};

export default RequireAuth;
