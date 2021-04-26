import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  border-bottom: 1px solid black;
  padding: 10px 3px;
`;

// 자유게시판 글 하나의 컴포넌트
const FreeBoardItem = ({ freeBoard }) => {
  return (
    <ItemBox>
      <span
        className={'col-3'}
        style={{
          display: 'inline-block',
        }}
      >
        {freeBoard.date}
      </span>
      <span
        className={'col-9'}
        style={{
          display: 'inline-block',
        }}
      >
        {freeBoard.text}
      </span>
    </ItemBox>
  );
};

// 목록처럼 쭉 나열되게 뿌려주는 역할
// **문제점 : 현재 새로운 초기 데이터를 넣으면 새로고침해야지만 업데이트 내용이 보인다.
// **문제점 : 새로운 글이 맨 아래에 보인다.
const FreeBoard = ({ freeBoard }) => {
  return (
    <div
      style={{
        overflow: 'auto',
        height: '299px',
        marginBottom: '4%',
        backgroundColor: 'white',
      }}
    >
      <div>
        {freeBoard.map((prop) => (
          <FreeBoardItem freeBoard={prop} key={prop.id} />
        ))}
      </div>
    </div>
  );
};

export default FreeBoard;
