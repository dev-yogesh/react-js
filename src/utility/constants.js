export const APP_ROUTES = {
  HOME: '/',

  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',

  APPLICATIONS: '/applications',
  COURSES: '/courses',
  STUDENTS: '/students',
  STAFFS: '/staffs',
};

export const SIDEBAR_MENU = [
  {
    label: 'Applications',
    path: APP_ROUTES.APPLICATIONS,
  },
  {
    label: 'Courses',
    path: APP_ROUTES.COURSES,
  },
  {
    label: 'Students',
    path: APP_ROUTES.STUDENTS,
  },
  {
    label: 'Staffs',
    path: APP_ROUTES.STAFFS,
  },
];

export const SYSTEM_ROLES = {
  SUPER_ADMIN: 'Super Admin',
  STAFF: 'Staff',
  STUDENT: 'Student',
};
