import React, { useState } from 'react';
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
  background-color: crimson;
  color: white;
  border: none;
  padding: 2px 8px;
`;

const Name = styled.div`
  font-weight: bold;
`;

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const TextModal = styled.div`
  width: 250px;
  height: 170px;
  background: white;
  padding: 0.5rem;
  border-radius: 4px;
  border: 3px solid darkblue;
`;

const Cancle = styled.button`
  background: #dddddd;
  border: none;
  border-radius: 5px;
  font-size: smaller;
  padding: 3px 0px;
  width: 35px;
`;

const AdminHeader = ({ props }) => {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(!show);
  };

  return (
    <div className={'container-fluid'} style={{ display: 'flex' }}>
      {/* 로고 (무조건 어드민 홈으로 이동 )시작 */}
      <div className={'col-3'}>
        <NavLink to={'/admin'}>
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
        {/* 새알림 기능 일단은 넣을 내용이 없어서 보류
        <Alaram />
        <NewAlaram onClick={onShow}>새알림</NewAlaram>
        {/* 모달 시작 */}
        {/* 모달 폼 수정 필요 (모달 안에 내용을 뭘 보여줘야할지 고민중)*/}
        {show && (
          <FullScreen>
            <TextModal>
              <Cancle onClick={onShow}>닫기</Cancle>
            </TextModal>
          </FullScreen>
        )}
        {/* 모달 종료 */}
        <Name>남붕어</Name>
        님, 어서오세요.
        <NavLink to={'/AdminLogin'}>
          <LogOut>로그아웃</LogOut>
        </NavLink>
      </Right>
      {/* 새알림, 이름 보이기, 로그아웃 버튼 영역 종료 */}
    </div>
  );
};

export default AdminHeader;
