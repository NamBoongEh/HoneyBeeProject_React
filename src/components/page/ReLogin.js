import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InputBar = styled.input`
  width: 70%;
  height: 60px;
  &:focus {
    outline: none;
  }
`;

export default function ReLogin(props) {
  return (
    <div style={{ backgroundColor: 'rgb(246,218,66)', padding: '60px' }}>
      <p
        className={'container'}
        style={{
          backgroundColor: 'white',
          padding: '60px 40px 60px 40px',
          width: '40%',
          boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          style={{
            fontSize: 'x-large',
            fontWeight: 'bold',
            color: 'rgb(178,114,30)',
            lineHeight: '60%',
          }}
        >
          비밀번호 재입력
        </div>
        <p
          style={{
            fontWeight: 'bold',
            paddingTop: '15px',
            paddingBottom: '20px',
          }}
        >
          본인확인을 위해{' '}
          <span style={{ color: 'rgb(178,114,7)' }}>비밀번호</span>를 한 번 더
          입력해주세요.
        </p>
        <div style={{ textAlign: 'center', paddingTop: '35px' }}>
          <InputBar
            type={'password'}
            placeholder={' 비밀번호를 입력 해 주세요'}
          />
          <br />
        </div>
        <p
          style={{
            color: '#B90000',
            paddingTop: '0.2%',
            fontSize: 'smaller',
            marginLeft: '110px',
          }}
        >
          비밀번호가 일치하지 않습니다. 다시 입력해 주세요
        </p>
        <Link to={'./MyPage'}>
          <div style={{ textAlign: 'center' }}>
            <button
              style={{
                backgroundColor: 'rgb(250,176,24)',
                border: 'none',
                fontSize: '18px',
                width: '30%',
                padding: '10px 20px 10px 20px',
                fontWeight: 'bold',
                borderRadius: '10px',
                marginTop: '3rem',
              }}
            >
              확인
            </button>
          </div>
        </Link>
      </p>
    </div>
  );
}
