//import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList/';
import Filter from '../components/Filter';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { contactsSelectors, contactsOperations } from '../redux/contacts';
import styles from './Page.module.css';

/*const styles = {
  container_contact: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
};*/
//}
export default function ContactsPage() {
  const isLoading = useSelector(contactsSelectors.getLoding);
  const Error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContact());
  }, [dispatch]);

  /*class ContactsPage extends Component {
    componentDidMount() {
      this.props.fetchContact();
    }*/

  //render() {

  return (
    <Container className={styles.container_contact}>
      <div>
        <h1>Phonebook</h1>

        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>

        <Filter />

        <ContactList />
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#303f9f"
            height={80}
            width={80}
            className="Loader"
          />
        )}
      </div>
      {Error && <h1>No result found!</h1>}
    </Container>
  );
}

/*const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoding(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
});*/

//export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)
