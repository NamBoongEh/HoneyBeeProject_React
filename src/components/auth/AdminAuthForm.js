import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: black;
    margin-bottom: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

// input 창
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: #ff2079;
    border-bottom: 1px solid gray;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: gray;
    text-decoration: underline;
    &:hover {
      color: gray;
    }
  }
`;

const textMap = {
  login: 'Login',
  register: 'Register',
};

const AdminAuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="ID"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="PW"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="PW-Confirm"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/adminregister">회원가입</Link>
        ) : (
          <Link to="/adminlogin">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AdminAuthForm;
