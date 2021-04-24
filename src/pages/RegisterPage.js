//import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from '@material-ui/core/Button';
import styles from './Page.module.css';
/*const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};*/

/*class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };*/
export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  /*handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };*/
  const handleChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  /*handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state); //mapDispatchToProps

    this.setState({ name: '', email: '', password: '' });
  };*/

  //render() {
  //const { name, email, password } = this.state;
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      const user = {
        name,
        email,
        password,
      };
      dispatch(authOperations.register(user));

      setName('');
      setEmail('');
      setPassword('');
    },
    [name, email, password, dispatch],
  );

  return (
    <div>
      <h1>Authorization</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit" variant="contained" color="primary">
          Sign in
        </Button>
      </form>
    </div>
  );
}
//}

/*const mapDispatchToProps = {
  onRegister: authOperations.register,
};
export default connect(null, mapDispatchToProps)(RegisterPage);*/
