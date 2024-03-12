import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const activeLink = ({ isActive }) => {
  return clsx(css.nav__link, isActive && css.active);
};

export default function Navigation() {
  return (
    <div className={css.nav__wrap}>
      <NavLink to="/" className={activeLink}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={activeLink}>
        Contacts
      </NavLink>
    </div>
  );
}
