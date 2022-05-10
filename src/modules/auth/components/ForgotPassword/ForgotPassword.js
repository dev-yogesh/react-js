import React from 'react';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from '../../../../utility/constants';

const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <Link to={APP_ROUTES.LOGIN}>Login</Link>
    </div>
  );
};

export default ForgotPassword;
