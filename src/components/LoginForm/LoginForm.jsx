import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations.js';

import css from './LoginForm.module.scss';

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <div className={css.login}>
      <div className={css.login__wrap_ring}>
        <i className={css.ring_1}></i>
        <i className={css.ring_2}></i>
        <i className={css.ring_3}></i>

        <form onSubmit={handleSubmit} className={css.loginForm}>
          <label className={css.loginForm__label}>Email </label>
          <input type="email" name="email" className={css.loginForm__input} />

          <label className={css.loginForm__label}>Password </label>
          <input type="password" name="password" className={css.loginForm__input} />
          <button type="submit" className={css.loginForm__btn}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
