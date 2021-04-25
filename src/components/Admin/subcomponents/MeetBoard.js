import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  border-top: 1px solid black;
  padding: 10px 3px;
`;

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
