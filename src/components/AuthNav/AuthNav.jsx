import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css'

import clsx from 'clsx';

const activeLink = ({ isActive }) => {
  return clsx(css.nav__link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.authNav__wrap}>
      <NavLink to="/register" className={activeLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={activeLink}>
        Log in
      </NavLink>
    </div>
  );
}
