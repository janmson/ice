import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Icon from '@components/Icon';
import styles from './index.module.scss';

const NavigationBar = ({ menuData }) => {
  return (
    <div className={styles.navBar}>
      {menuData.map((item) => {
        return (
          <NavLink
            to={item.path}
            key={item.path}
            className={styles.navItem}
            activeStyle={{ borderLeft: '3px solid #fff' }}
          >
            <Icon
              type={item.icon}
              size="large"
              className={styles.navItemIcon}
            />
            <span className={styles.navItemText}>
              <FormattedMessage id={item.name} />
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

NavigationBar.defaultProps = {
  menuData: [],
};

NavigationBar.propTypes = {
  menuData: PropTypes.array,
};

export default NavigationBar;