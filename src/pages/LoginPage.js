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

/*class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };*/
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  /*handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });


  };*/ const handleChange = useCallback(
    ({ target: { name, value } }) => {
      switch (name) {
        case 'email':
          setEmail(value);
          break;

        case 'password':
          setPassword(value);
          break;

        default:
          console.warn(`Тип поля ${name} не обрабатывается`);
      }
    },
    [],
  );
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      const user = {
        email,
        password,
      };

      dispatch(authOperations.logIn(user));

      setEmail('');
      setPassword('');
    },
    [email, password, dispatch],
  );
  //render() {
  // const { email, password } = this.state;

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
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
          Acess{' '}
        </Button>
      </form>
    </div>
  );
}
//}

/*const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginPage);*/
