import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations.js';

import { IoMdPerson } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { MdDelete } from 'react-icons/md';

import css from './Contact.module.scss';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li id={id} className={css.contactItem}>
      <IconContext.Provider
        value={{
          color: 'var(--accent-color)',
          size: 35,
        }}
      >
        <IoMdPerson />
      </IconContext.Provider>

      <h2 className={css.contactItem__name}>{name}</h2>
      <p className={css.contactItem__number}>{number}</p>

      <button onClick={() => dispatch(deleteContact(id))} className={css.contactItem__btn}>
        <IconContext.Provider value={{ color: 'var(--white-color)', size: 20 }}>
          <MdDelete />
        </IconContext.Provider>
      </button>
    </li>
  );
}
