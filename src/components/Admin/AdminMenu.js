import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Column = styled.div`
  font-size: 30px;
  line-height: 6.5rem;
  background: lemonchiffon;
  color: black;
  border: 1px solid black;
  &:hover {
    background: brown;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`;
const SubColumn = styled.div`
  font-size: 25px;
  line-height: 3rem;
  background: lemonchiffon;
  color: black;
  padding-left: 30px;
  border: 1px solid black;
  &:hover {
    background: brown;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default function AdminMenu(props) {
  const [show, setShow] = useState([{ id: '', toggle: false }]);

  const toggleHandler = (e) => {
    e.target.toggle === false
      ? setShow((p) => [...p, { id: e.target.id, toggle: true }])
      : setShow((p) => [...p, { id: e.target.id, toggle: false }]);
  };

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <>
      <div>
        <NavLink to={'/AdminCustom'}>
          <Column>회원관리</Column>
        </NavLink>
        <Column
          id={'board'}
          toggle={show.toggle}
          style={{ marginBottom: '-30px' }}
          onClick={(e) => toggleHandler(e)}
        >
          게시판 관리
        </Column>
        {show.id === 'board' && (
          <>
            <NavLink to={'/AdminCustom'}>
              <SubColumn>모임게시판 관리</SubColumn>
            </NavLink>
            <SubColumn>자유게시판 관리</SubColumn>
          </>
        )}
        <Column
          id={'qna'}
          style={{ marginBottom: '-30px' }}
          toggle={show.toggle}
          onClick={(e) => toggleHandler(e)}
        >
          고객센터
        </Column>
        <NavLink to={'/AdminCustom'}>
          <SubColumn>문의</SubColumn>
        </NavLink>
        <NavLink to={'/AdminCustom'}>
          <SubColumn>신고</SubColumn>
        </NavLink>
        <NavLink to={'/AdminCustom'}>
          <Column>통계분석</Column>
        </NavLink>
        <NavLink to={'/AdminCustom'}>
          <Column>공지사항</Column>
        </NavLink>
        <NavLink to={'/AdminCustom'}>
          <Column>관리자 권한 설정</Column>
        </NavLink>
      </div>
    </>
  );
}
