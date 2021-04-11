import React from 'react';
import { Link } from 'react-router-dom';
import manager from '../images/manager.jpg';

export default function Register(props) {
  return (
    <div style={{ backgroundColor: 'rgb(246,218,66)', padding: '60px' }}>
      <p
        className={'container'}
        style={{
          backgroundColor: 'white',
          padding: '60px 40px 60px 40px',
          width: '40%',
          boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
        }}
      >
        <img
          src={manager}
          alt="welcome"
          style={{ width: '50%', height: '50%' }}
        />
        <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>
          회원가입 완료
          <br />
          꿀벌이 되신 것을 축하드립니다!
        </p>
        <Link to="./Home">
          <button
            style={{
              backgroundColor: 'rgb(250,176,24)',
              border: 'none',
              fontSize: '18px',
              width: '30%',
              padding: '10px 20px 10px 20px',
              fontWeight: 'bold',
              borderRadius: '10px',
              marginTop: '1rem',
            }}
          >
            홈으로
          </button>
        </Link>
      </p>
    </div>
  );
}
