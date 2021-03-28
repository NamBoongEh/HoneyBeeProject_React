import React from 'react';
import styled from 'styled-components';

const InputBar = styled.input`
  width: 70%;
  height: 60px;
  &:focus {
    outline: none;
  }
`;

export default function ReLogin(props) {
  return (
    <p
      className={'container'}
      style={{
        padding: '100px 40px 250px 40px',
        height: '50%',
        width: '40%',
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
      <div style={{ textAlign: 'center' }}>
        <button
          style={{
            backgroundColor: 'rgb(250,176,24)',
            border: 'none',
            fontSize: '18px',
            width: '70%',
            padding: '10px 20px 10px 20px',
            fontWeight: 'bold',
            borderRadius: '10px',
          }}
        >
          확인
        </button>
      </div>
    </p>
  );
}
