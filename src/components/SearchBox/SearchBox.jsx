import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../../redux/nameSlice.js';
import { GoSearch } from 'react-icons/go';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.name.name);
  return (
    <div className={css.searchBox__wrap}>
      <GoSearch
        style={{
          position: 'absolute',
          top: '52px',
          left: '53px',
        }}
      />
      <input
        className={css.searchBox__input}
        name="username"
        value={value}
        placeholder="Search"
        onChange={e => dispatch(changeValue(e.target.value))}
      />
    </div>
  );
}
