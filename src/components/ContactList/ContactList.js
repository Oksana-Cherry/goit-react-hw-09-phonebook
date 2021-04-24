//import { connect } from 'react-redux';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactList.module.css';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.List_item} key={id}>
      <p>{name + ': ' + number}</p>
      <button className={styles.List_button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

/*onst ContactList = ({ contacts, onDelete }) => {
  //console.log('contacts', contacts);*/

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContact);
  const dispatch = useDispatch();

  const onDelete = useCallback(
    id => dispatch(contactsOperations.deleteContact(id)),
    [dispatch],
  );

  if (contacts.length === 0) return null;

  return (
    <ul className={styles.List}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}

/*const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContact(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);*/
