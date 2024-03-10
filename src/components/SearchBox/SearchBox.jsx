import './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../redux/nameSlice.js';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.name.name);
  return (
    <div>
      <label>Find contacts by name</label>
      <input name="username" value={value} onChange={e => dispatch(changeValue(e.target.value))} />
    </div>
  );
}
