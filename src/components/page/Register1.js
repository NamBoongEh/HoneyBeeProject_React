import React from 'react';
import { Link } from 'react-router-dom';
import EsImformation from '../Register1/EsImformation';
import InterestArea from '../Register1/InterestArea';
import InterestHobby from '../Register1/InterestHobby';

export default function Register1() {
  return (
    <div style={{ backgroundColor: 'rgb(246,218,66)', padding: '60px' }}>
      <div
        className={'container'}
        style={{
          backgroundColor: 'white',
          padding: '40px 40px 60px 40px',
          height: '50%',
          width: '50%',
          boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.5)',
        }}
      >
        <EsImformation />

        <hr
          style={{
            borderColor: 'lightgray',
            borderWidth: '3px',
            width: '100%',
            paddingBottom: '30px',
          }}
        />

        <h3 style={{ fontWeight: 'bold' }}>관심정보</h3>

        <InterestArea />
        <InterestHobby />

        <Link to="./Login">
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
            뒤로가기
          </button>
        </Link>
        <Link to="./Register2">
          <button
            style={{
              backgroundColor: 'orange',
              color: 'white',
              border: 'none',
              fontSize: '18px',
              padding: '10px 20px 10px 20px',
              borderRadius: '10px',
              float: 'right',
            }}
          >
            다음
          </button>
        </Link>
      </div>
    </div>
  );
}
