import React from 'react';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from '../../../../utility/constants';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to={APP_ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
    </div>
  );
};

export default Login;
