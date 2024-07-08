import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

export default function AuthNav() {
  const activeLink = ({ isActive }) => {
    return clsx(css.nav__link, isActive && css.active);
  };

  return (
    <div className={css.nav__wrap}>
      <NavLink to="/register" className={activeLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={activeLink}>
        Log in
      </NavLink>
    </div>
  );
}
