import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderSearchBar from './search/HeaderSearchBar';

const HeaderLink = styled.div`
  text-align: right;
  & > * {
    margin-left: 10px;
  }
`;

const Links = styled(Link)`
  color: black;

  &:hover {
    text-decoration: none;
  }
`;

const Check = styled.div`
  min-width: 10px;
  min-height: 10px;
  width: 100%;
  height: 100%;
  background-color: grey;
`;

export default function Header(props) {
  return (
    <div style={{ width: '100%' }}>
      <HeaderLink>
        <Links to={'login'}>로그인</Links>
        <Links to={'register'}>회원가입</Links>
      </HeaderLink>
      <div className={'row'}>
        <div className={'col-3'}>
          <Check />
        </div>
        <div className={'col-6'}>
          <HeaderSearchBar />
        </div>
        <div className={'col-3'}>
          <Check />
        </div>
      </div>
    </div>
  );
}
