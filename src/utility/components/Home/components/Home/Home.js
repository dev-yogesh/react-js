import React from 'react';
import { Navigate } from 'react-router-dom';
import { APP_ROUTES, SYSTEM_ROLES } from '../../../../constants';

const Home = () => {
  const USER_ROLE = 'Student';

  if (USER_ROLE === SYSTEM_ROLES.SUPER_ADMIN) {
    return <Navigate to={APP_ROUTES.APPLICATIONS} />;
  }

  if (USER_ROLE === SYSTEM_ROLES.STAFF) {
    return <Navigate to={APP_ROUTES.COURSES} />;
  }

  if (USER_ROLE === SYSTEM_ROLES.STUDENT) {
    return <Navigate to={APP_ROUTES.STUDENTS} />;
  }
};

export default Home;
