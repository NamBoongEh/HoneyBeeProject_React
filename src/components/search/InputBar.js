import React from 'react';
import styled from 'styled-components';

const SearchBarBody = styled.input`
  width: 70%;
  display: block;
  border-radius: 15px;
  border: none;
  padding: 10px 15px 10px;
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;

  &:focus {
    outline: none;
  }
`;

export default function HeaderSearchBar() {
  return (
    <div>
      <SearchBarBody placeholder={'아이디를 입력해주세요'} />
      <br />
      <SearchBarBody placeholder={'비밀번호를 입력해주세요'} />
    </div>
  );
}
