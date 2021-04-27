import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Register3 from '../Register1/Register3';
import Register2 from '../Register1/Register2';
import EsImformation from '../Register1/EsImformation';

const BtnRight = styled.button`
  background-color: orange;
  color: white;
  border: none;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  float: right;
`;

const BtnLeft = styled.button`
  background-color: orange;
  color: white;
  border: none;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
`;

export default function Register() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const toggleHandler = () => {
    setShow(!show);
  };

  const toggleHandler2 = () => {
    setShow2(!show2);
  };

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
        {!show && <EsImformation />}
        {!show && (
          <Link to="./LoginPage">
            <BtnLeft>취소</BtnLeft>
          </Link>
        )}
        {!show && (
          <BtnRight style={{}} onClick={() => toggleHandler()}>
            다음
          </BtnRight>
        )}
        {show && <Register2 /> && !show2 && <Register2 />}
        {show && <Register2 /> && !show2 && <Register2 /> && (
          <BtnLeft onClick={() => toggleHandler()}>뒤로가기</BtnLeft>
        )}
        {show && <Register2 /> && !show2 && <Register2 /> && (
          <BtnRight onClick={() => toggleHandler2()}>다음</BtnRight>
        )}
        {show2 && <Register3 />}
        {show2 && <BtnLeft onClick={() => toggleHandler2()}>뒤로가기</BtnLeft>}
      </div>
    </div>
  );
}
