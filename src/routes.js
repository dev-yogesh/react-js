import { APP_ROUTES, SYSTEM_ROLES } from './utility/constants';

import Dashboard from './utility/components/Layout/components/Dashboard/Dashboard';
import Home from './utility/components/Home/components/Home/Home';

import Login from './modules/auth/components/Login/Login';
import ForgotPassword from './modules/auth/components/ForgotPassword/ForgotPassword';

import ApplicationList from './modules/applications/components/ApplicationList/ApplicationList';
import CourseList from './modules/courses/components/CourseList/CourseList';
import StudentList from './modules/students/components/StudentList/StudentList';
import StaffList from './modules/staffs/components/StaffList/StaffList';

import RedirectAuth from './utility/components/RedirectAuth/RedirectAuth';
import RequireAuth from './utility/components/RequireAuth/RequireAuth';
import RequireRoleAuth from './utility/components/RequireRoleAuth/RequireRoleAuth';

import Error from './utility/components/Error/Error';

export const routes = [
  {
    path: APP_ROUTES.LOGIN,
    element: (
      <RedirectAuth>
        <Login />
      </RedirectAuth>
    ),
  },
  {
    path: APP_ROUTES.FORGOT_PASSWORD,
    element: (
      <RedirectAuth>
        <ForgotPassword />
      </RedirectAuth>
    ),
  },
  {
    path: APP_ROUTES.HOME,
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: APP_ROUTES.HOME,
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: APP_ROUTES.APPLICATIONS,
        element: (
          <RequireAuth>
            <RequireRoleAuth
              roles={[SYSTEM_ROLES.SUPER_ADMIN, SYSTEM_ROLES.STAFF]}
            >
              <ApplicationList />
            </RequireRoleAuth>
          </RequireAuth>
        ),
      },
      {
        path: APP_ROUTES.COURSES,
        element: (
          <RequireAuth>
            <CourseList />
          </RequireAuth>
        ),
      },
      {
        path: APP_ROUTES.STUDENTS,
        element: (
          <RequireAuth>
            <RequireRoleAuth
              roles={[
                SYSTEM_ROLES.SUPER_ADMIN,
                SYSTEM_ROLES.STAFF,
                SYSTEM_ROLES.STUDENT,
              ]}
            >
              <StudentList />
            </RequireRoleAuth>
          </RequireAuth>
        ),
      },
      {
        path: APP_ROUTES.STAFFS,
        element: (
          <RequireAuth>
            <RequireRoleAuth
              roles={[SYSTEM_ROLES.SUPER_ADMIN, SYSTEM_ROLES.STAFF]}
            >
              <StaffList />
            </RequireRoleAuth>
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/unauthorized',
    element: <Error code={403} message='unauthorized' />,
  },
  {
    path: '*',
    element: <Error code={404} message='not found' />,
  },
];
