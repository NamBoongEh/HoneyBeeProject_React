import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  border-bottom: 1px solid black;
  padding: 10px 3px;
`;

// FreeBoard 컴포넌트와 동일하다.
// 모임게시판 글만 보여줘야하며, 똑같은 문제점으로 새로고침을 해야지만 새 글이 보인다.
const MeetBoardItem = ({ meetBoard }) => {
  return (
    <ItemBox>
      <span
        className={'col-3'}
        style={{
          display: 'inline-block',
        }}
      >
        {meetBoard.date}
      </span>
      <span
        className={'col-9'}
        style={{
          display: 'inline-block',
        }}
      >
        {meetBoard.text}
      </span>
    </ItemBox>
  );
};

const MeetBoard = ({ meetBoard }) => {
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
        {meetBoard.map((prop) => (
          <MeetBoardItem meetBoard={prop} key={prop.id} />
        ))}
      </div>
    </div>
  );
};

export default MeetBoard;
