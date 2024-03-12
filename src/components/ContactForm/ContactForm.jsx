import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { addContact } from '../../redux/operations.js';
import { useDispatch } from 'react-redux';

import { IoMdPersonAdd } from 'react-icons/io';
import { IconContext } from 'react-icons';

import css from './ContactForm.module.scss';

const userSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(30, 'Too long!').required('Required'),
  number: Yup.string().min(3, 'Too short!').max(30, 'Too long!').required('Required'),
});

export default function ContactForm() {
  const userId = useId();
  const numId = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values }));
        actions.resetForm();
      }}
    >
      <Form className={css.contactForm}>
        <label htmlFor={userId} className={css.contactForm__label}>
          Name
        </label>
        <Field name="name" id={userId} required className={css.contactForm__input} />
        <ErrorMessage name="name" component="span" className={css.contactForm__input_error} />
        <label htmlFor={numId} className={css.contactForm__label}>
          Number
        </label>
        <Field name="number" id={numId} className={css.contactForm__input} />
        <ErrorMessage name="number" component="span" className={css.contactForm__input_error} />
        <button type="submit" className={css.contactForm__btn}>
          <IconContext.Provider
            value={{
              size: 25,
            }}
          >
            <IoMdPersonAdd />
            Add contact
          </IconContext.Provider>
        </button>
      </Form>
    </Formik>
  );
}
