import { useAuth } from '../../hooks/useAuth.js';
import { logOut } from '../../redux/auth/operations.js';
import { useDispatch } from 'react-redux';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = ()=> {
    dispatch(logOut());
  };
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
}
