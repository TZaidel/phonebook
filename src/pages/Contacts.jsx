import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations.js';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';

export default function Contacts() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch])
  return (
    <div>
      <h1>Contacts</h1>
      {/* <ContactForm />
      <SearchBox />
      <ContactList /> */}
    </div>
  );
}
