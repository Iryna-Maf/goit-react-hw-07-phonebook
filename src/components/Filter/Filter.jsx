import s from './Filter.module.css';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import todosActions from 'redux/contacts/todos-actions';

import { filterStore } from 'redux/contacts/todos-selector';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterStore);
  return (
    <input
      type="text"
      className={s.input}
      name="filter"
      placeholder="Serch Contacts"
      value={filterValue}
      onChange={e => dispatch(todosActions.changeFilter(e.target.value))}
    />
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
};
export default Filter;
