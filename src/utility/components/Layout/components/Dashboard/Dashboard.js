import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
