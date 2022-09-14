import Notiflix from 'notiflix';

import FormAddPhone from './FormAddPhone/FormAddPhone';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import s from './App.module.css';

import { useSelector, useDispatch } from 'react-redux';
import todosActions from 'redux/contacts/todos-actions';

import { filterStore, itemsStore } from 'redux/contacts/todos-selector';

function App() {
  const dispatch = useDispatch();
  const contactsArr = useSelector(itemsStore);
  const filterValue = useSelector(filterStore);

  const submitDataForm = data => {
    const { name, number } = data;
    if (contactsArr.find(el => el.name === name || el.number === number)) {
      Notiflix.Report.warning(
        `Warning`,
        `${name} or ${number} is already in cotacts`,
        'Okay'
      );
      return;
    }
    Notiflix.Notify.success('You have a new Contact');

    dispatch(todosActions.addContact(name, number));
  };

  const filterState = () => {
    return contactsArr.filter(el =>
      el.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  const renderFiterItem = filterState();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <FormAddPhone onSubmit={submitDataForm} />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      {contactsArr.length !== 0 && (
        <Contacts renderFilterContacts={renderFiterItem} />
      )}
    </div>
  );
}

export default App;
