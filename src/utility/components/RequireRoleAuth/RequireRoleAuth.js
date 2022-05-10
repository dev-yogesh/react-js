import React from 'react';
// import { Navigate } from 'react-router-dom';

import Error from '../../../utility/components/Error/Error';

const RequireExtraAuth = ({ children, roles }) => {
  const USER_ROLE = 'Student';
  const isAuthorized = roles.includes(USER_ROLE);

  if (isAuthorized) {
    return <>{children}</>;
  } else {
    return <Error code={403} message='Unauthorized' />;
    // return <Navigate to='/unauthorized' />;
  }
};

export default RequireExtraAuth;
