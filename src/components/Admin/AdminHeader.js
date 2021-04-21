import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BellFill } from 'react-bootstrap-icons';
import logo from '../images/logo.PNG';

const Logo = styled.img`
  width: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const Right = styled.div`
  text-align: right;
  margin: auto;
`;

const Alaram = styled(BellFill)`
  color: goldenrod;
  font-size: x-large;
  margin-right: 1px;
`;

const LogOut = styled.button`
  border-radius: 15px;
  margin: 0 5px;
  background-color: orange;
  color: white;
  border: none;
  padding: 3px 10px;
`;

const NewAlaram = styled.button`
  border-radius: 15px;
  margin: 0 5px;
  background-color: brown;
  color: white;
  border: none;
  padding: 2px 8px;
`;

const Name = styled.div`
  font-weight: bold;
`;

export default function AdminHeader(props) {
  return (
    <div className={props.className} style={{ display: 'flex' }}>
      {/* 로고 (무조건 어드민 홈으로 이동 )시작 */}
      <div className={'col-3'}>
        <NavLink to={'/AdminHome'}>
          <Logo src={logo} alt={'Honey Bee'} />
        </NavLink>
      </div>

      {/* 로고 (무조건 어드민 홈으로 이동 )종료 */}
      <div className={'col-6'} />

      {/* 새알림, 이름 보이기, 로그아웃 버튼 영역 시작 */}
      <Right
        className={'col-3'}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Alaram />
        <NewAlaram>새알림</NewAlaram>
        <Name>남붕어</Name>
        님, 어서오세요.
        <NavLink to={'/AdminLogin'}>
          <LogOut>로그아웃</LogOut>
        </NavLink>
      </Right>
      {/* 새알림, 이름 보이기, 로그아웃 버튼 영역 종료 */}
    </div>
  );
}
