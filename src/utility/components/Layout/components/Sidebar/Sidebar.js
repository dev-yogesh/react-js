import React from 'react';
import { NavLink } from 'react-router-dom';

import { SIDEBAR_MENU } from '../../../../../utility/constants';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        {SIDEBAR_MENU.map((menuItem, index) => (
          <NavLink key={menuItem.label.concat(index)} to={menuItem.path}>
            <li>{menuItem.label}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
