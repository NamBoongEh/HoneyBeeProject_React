import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Column = styled.div`
  font-size: 30px;
  background: lemonchiffon;
  color: black;
  padding: 1% 0;
  &:hover {
    background: brown;
    color: white;
    cursor: pointer;
  }
`;
const SubColumn = styled.div`
  font-size: 25px;
  line-height: 3rem;
  background: lemonchiffon;
  color: black;
  padding-left: 30px;
  &:hover {
    background: brown;
    color: white;
    cursor: pointer;
  }
`;

const Navlink = styled(NavLink)`
  &:hover {
    text-decoration-line: none;
  }
`;

export default function AdminMenu(props) {
  // 메뉴 클릭 시 서브 메뉴 보여주는 이벤트 시작
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const toggleHandler = (e) => {
    setShow(!show);
  };
  const toggleHandler2 = (e) => {
    setShow2(!show2);
  };
  // 메뉴 클릭 시 서브 메뉴 보여주는 이벤트 종료

  return (
    <>
      <div>
        <Navlink to={'/AdminCustom'}>
          <Column>회원관리</Column>
        </Navlink>
        <Column onClick={() => toggleHandler()}>게시판 관리</Column>
        {!show && (
          <>
            <Navlink to={'/AdminCustom'}>
              <SubColumn>모임게시판 관리</SubColumn>
            </Navlink>
            <SubColumn>자유게시판 관리</SubColumn>
          </>
        )}
        <Column onClick={() => toggleHandler2()}>고객센터</Column>
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
        <Navlink to={'/AdminCustom'}>
          <Column>통계분석</Column>
        </Navlink>
        <Navlink to={'/AdminCustom'}>
          <Column>공지사항</Column>
        </Navlink>
        <Navlink to={'/AdminCustom'}>
          <Column>관리자 권한 설정</Column>
        </Navlink>
      </div>
    </>
  );
}
