import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './form-add-phone.module.css';

function FormAddPhone({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const textWrite = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onClickSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      number,
    };
    onSubmit(data);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onClickSubmit} className={s.form}>
      <div className={s.formGroup}>
        <label className={s.label}>Name</label>
        <br></br>
        <input
          onChange={textWrite}
          value={name}
          className={s.input}
          type="text"
          name="name"
          placeholder="Введите имя и фамилию"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={s.formGroup}>
        <label className={s.label}>Number</label>
        <br></br>
        <input
          onChange={textWrite}
          value={number}
          className={s.input}
          type="tel"
          name="number"
          placeholder="Введите номер телефона"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <div className={s.formGroup}>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormAddPhone;

FormAddPhone.defaultProps = {
  onSubmit: () => {},
};

FormAddPhone.propTypes = {
  onSubmit: PropTypes.func,
};
