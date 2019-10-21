import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createStructuredSelector } from 'reselect';

import { LoginContainer, FieldsContainer, ButtonContainer } from './styled';
import { LOGIN_REQUEST_ACTION } from './actions';
import { isLoggedInSelector } from './selectors';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(
    createStructuredSelector({
      isLoggedIn: isLoggedInSelector()
    })
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 13) {
        handleSubmit();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/home');
    }
  }, [history, isLoggedIn]);

  const handleSubmit = () => {
    dispatch(LOGIN_REQUEST_ACTION({ username, password }));
  };

  return (
    <LoginContainer>
      <FieldsContainer>
        <TextField
          label='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin='normal'
          variant='outlined'
        />
      </FieldsContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          Submit
        </Button>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;
