import PropTypes from 'prop-types';
import s from './contacts.module.css';
import { useDispatch } from 'react-redux';
import todosActions from 'redux/contacts/todos-actions';

function Contacts({ renderFilterContacts }) {
  const dispatch = useDispatch();
  const renderContact = renderFilterContacts.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name} : {number}
      <button
        className={s.listBtn}
        type="button"
        onClick={e => dispatch(todosActions.deleteContact(e.target.id))}
        id={id}
      >
        X
      </button>
    </li>
  ));

  return <ul className={s.list}>{renderContact}</ul>;
}

export default Contacts;

Contacts.propTypes = {
  renderFilterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
