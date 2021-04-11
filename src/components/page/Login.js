import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputBar from '../search/InputBar';
import send from '../images/send.jpg';

const Links = styled(Link)`
  color: dimgray;
  font-size: 13px;
  &:hover {
    text-decoration: none;
    color: dimgray;
  }
`;

export default function Login(props) {
  return (
    <div style={{ backgroundColor: 'rgb(246,218,66)', padding: '60px' }}>
      <div
        className={'container'}
        style={{
          backgroundColor: 'white',
          padding: '60px 40px 60px 40px',
          height: '50%',
          width: '30%',
          boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          style={{
            fontSize: '23px',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingBottom: '50px',
          }}
        >
          <img
            src={send}
            alt="welcome"
            style={{ width: '50%', height: '50%' }}
          />
          <br />
          달콤한 모임에 꿀빨러 오세요.
        </div>
        <InputBar />
        <div style={{ color: 'dimgray', fontSize: '13px', lineHeight: '30px' }}>
          <label for={'RememberID'}>
            <input
              id={'RememberID'}
              type={'checkbox'}
              style={{ marginLeft: '75px' }}
            />{' '}
            아이디 저장
          </label>
          <Links to={'home'} style={{ marginLeft: '100px' }}>
            아이디/비밀번호 찾기
          </Links>
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: 'orange',
              color: 'white',
              border: 'none',
              fontSize: '18px',
              padding: '10px 20px 10px 20px',
              borderRadius: '10px',
            }}
          >
            로그인
          </button>
        </div>
        <div style={{ textAlign: 'center', lineHeight: '35px' }}>
          <Links to={'register1'}>회원가입</Links>
        </div>
      </div>
    </div>
  );
}
