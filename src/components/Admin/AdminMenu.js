import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Column = styled.div`
  font-size: 30px;
  background: lemonchiffon;
  color: black;
  padding: 1% 0;
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
    toggleHandler()
  }
`;
const SubColumn = styled.div`
  font-size: 25px;
  line-height: 3rem;
  background: lemonchiffon;
  color: black;
  padding-left: 30px;
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

const Navlink = styled(NavLink)`
  &:hover {
    text-decoration-line: none;
  }
`;

const Bar = styled.div`
  width: 100px;
  transition: width 1s;
  &:hover {
    width: 1500px;
  }
`;

const AdminMenu = (props) => {
  // 메뉴 클릭 시 서브 메뉴 보여주는 이벤트 시작
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const toggleHandler = (e) => {
    setShow(e);
  };
  const toggleHandler2 = (e) => {
    setShow2(e);
  };
  const closeHandler = () => {
    setShow(true);
    setShow2(true);
  };
  // 메뉴 클릭 시 서브 메뉴 보여주는 이벤트 종료

  // zindex를 상위 컴포넌트에서 받아왔지만 소용없다.
  return (
    <>
      <Bar
        id={'bar'}
        style={{ zIndex: props.zIndex }}
        onMouseLeave={closeHandler}
      >
        <Navlink to={'/AdminCustom'}>
          <Column>회원관리</Column>
        </Navlink>
        {/* 큰 페이지 이동 아래 서브 페이지 이동이 있다. 게시판 관리 서브 페이지 이동 이벤트 시작 */}
        <Column onMouseEnter={() => toggleHandler(false)}>게시판 관리</Column>
        {!show && (
          <>
            <Navlink to={'/AdminCustom'}>
              <SubColumn>모임게시판 관리</SubColumn>
            </Navlink>
            <SubColumn>자유게시판 관리</SubColumn>
          </>
        )}
        {/* 게시판 관리 서브 페이지 이동 이벤트 종료 */}
        {/* 고객센터 관리 서브 페이지 이동 이벤트 시작 */}
        <Column onMouseEnter={() => toggleHandler2(false)}>고객센터</Column>
        {!show2 && (
          <>
            <Navlink to={'/AdminCustom'}>
              <SubColumn>문의</SubColumn>
            </Navlink>
            <Navlink to={'/AdminCustom'}>
              <SubColumn>신고</SubColumn>
            </Navlink>
          </>
        )}
        {/* 고객센터 관리 서브 페이지 이동 이벤트 종료 */}
        <Navlink to={'/AdminCustom'}>
          <Column>통계분석</Column>
        </Navlink>
        <Navlink to={'/AdminCustom'}>
          <Column>공지사항</Column>
        </Navlink>
        <Navlink to={'/AdminCustom'}>
          <Column>관리자 권한 설정</Column>
        </Navlink>
      </Bar>
    </>
  );
};

export default AdminMenu;
