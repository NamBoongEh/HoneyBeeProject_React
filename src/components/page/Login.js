import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import send from '../images/send.jpg';

const Text = styled.p`
  font-size: 23px;
  text-align: center;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Links = styled(Link)`
  color: dimgray;
  font-size: 13px;
  &:hover {
    text-decoration: none;
    color: dimgray;
  }
`;

const StyledInput = styled.input`
  width: 70%;
  display: block;
  border-radius: 15px;
  border: none;
  padding: 10px 15px 10px;
  background-color: lightgray;
  margin: 0 auto 3%;

  &:focus {
    outline: none;
  }
`;

const LoginBtn = styled.button`
  background-color: orange;
  color: white;
  border: none;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
`;

const Box = styled.div`
  background-color: white;
  padding: 60px 40px 60px 40px;
  height: 50%;
  width: 30%;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const LoginPage = ({ type, form, onChange, onSubmit }) => {
  return (
    <div style={{ backgroundColor: 'rgb(246,218,66)', padding: '60px' }}>
      <Box className={'container'}>
        <Text>
          <img
            src={send}
            alt="welcome"
            style={{ width: '50%', height: '50%' }}
          />
          <br />
          로그인하고 달콤한 모임에 꿀빨러 오세요.
        </Text>
        <form onSubmit={onsubmit}>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder={'아이디를 입력해주세요'}
            onChange={onChange}
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder={'비밀번호를 입력해주세요'}
            type="password"
            onChange={onChange}
          />
        </form>
        <div style={{ color: 'dimgray', fontSize: '13px', lineHeight: '30px' }}>
          <input
            id={'RememberID'}
            type={'checkbox'}
            style={{ margin: '0 10px' }}
          />
          아이디 저장
          <Links to={'home'} style={{ margin: '0 10px 0 100px' }}>
            아이디/비밀번호 찾기
          </Links>
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <LoginBtn>로그인</LoginBtn>
        </div>
        <Links to={'register'} style={{ lineHeight: '35px' }}>
          회원가입
        </Links>
      </Box>
    </div>
  );
};

export default LoginPage;
