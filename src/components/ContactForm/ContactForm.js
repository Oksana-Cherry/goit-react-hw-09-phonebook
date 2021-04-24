//import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  /*class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };*/

  /*handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };*/

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  /*handleSubmit = event => {
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;

    event.preventDefault();*/
  /*onSubmit(name, number);
    if (!name || !number) {
      alert(`Some field is empty`);

      return false;
    }
    this.setState({ name: '', number: '' });
  };*/
  const onSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert(`Some field is empty`);
      setName('');
      setNumber('');
      return false;
    }
    /*const isExistContact = contacts.find(contact => contact.name === name);

    if (isExistContact !== undefined) {
      alert(`${name}is already in the Phonebook`);
      return;
    }*/
    const isExistContact = contacts.find(contact => contact.name === name);
    if (!isExistContact) {
      dispatch(contactsOperations(name, number));
    } else {
      alert(`${name}is already in the Phonebook`);
    }
    setName('');
    setNumber('');
  };

  //resetForm = () => this.setState(this.state);

  /*render() {
    const { name, number } = this.state;*/
  return (
    <form className={styles.Forms} onSubmit={onSubmit}>
      <label className={styles.Form_label}>
        Name
        <input
          className={styles.Form_input}
          ref={inputRef}
          type="text"
          name="name"
          placeholder=""
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={styles.Form_label}>
        Number
        <input
          className={styles.Form_input}
          type="tel"
          name="number"
          placeholder=""
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={styles.Form_button} type="submit">
        Add contact
      </button>
    </form>
  );
}

/*const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);*/
