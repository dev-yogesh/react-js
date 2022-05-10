import React from 'react';
import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '../../../utility/constants';

const RedirectAuth = ({ children }) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <Navigate to={APP_ROUTES.HOME} />;
  } else {
    return <>{children}</>;
  }
};

export default RedirectAuth;
