import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './RegisterForm.module.scss';

const userSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(30, 'Too long!').required('Required'),
  email: Yup.string().email().min(3, 'Too short!').max(30, 'Too long!').required('Required'),
  password: Yup.string().min(8, 'Too short!').max(30, 'Too long!').required('Required'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  return (
    <div className={css.register}>
      <div className={css.register__wrap_ring}>
        <i className={css.ring_1}></i>
        <i className={css.ring_2}></i>
        <i className={css.ring_3}></i>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={userSchema}
          onSubmit={(values, actions) => {
            dispatch(register({ ...values }));
            actions.resetForm();
          }}
        >
          <Form className={css.registerForm}>
            <label htmlFor="name" className={css.registerForm__label}>
              Username
            </label>
            <Field type="text" name="name" className={css.registerForm__input} autoComplete="new" />
            <ErrorMessage name="name" component="span" className={css.registerForm__input_error} />

            <label className={css.registerForm__label} htmlFor="email">
              Email
            </label>
            <Field type="email" name="email" className={css.registerForm__input} />
            <ErrorMessage name="email" component="span" className={css.registerForm__input_error} />

            <label className={css.registerForm__label} htmlFor="password">
              Password
            </label>
            <Field type="password" name="password" className={css.registerForm__input} />
            <ErrorMessage
              name="password"
              component="span"
              className={css.registerForm__input_error}
            />
            <button type="submit" className={css.registerForm__btn}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
