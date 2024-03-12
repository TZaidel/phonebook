import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations.js';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';

import css from './Contacts.module.scss';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.contactsPage}>
      <ContactForm />
      <div className={css.contactsPage__contacts}>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
