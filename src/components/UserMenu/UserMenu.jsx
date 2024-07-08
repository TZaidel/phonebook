import { useAuth } from '../../hooks/useAuth.js';
import { logOut } from '../../redux/auth/operations.js';
import { useDispatch } from 'react-redux';
import { IoIosLogOut } from 'react-icons/io';

import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userMenu__wrap}>
      <h2 className={css.userMenu__name}>Hi, {user.name} :)</h2>
      <button type="button" onClick={handleClick} className={css.userMenu__btn}>
        Log out <IoIosLogOut />
      </button>
    </div>
  );
}
