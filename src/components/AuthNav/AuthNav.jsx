import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <h1>auth nav(register, login)</h1>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}
