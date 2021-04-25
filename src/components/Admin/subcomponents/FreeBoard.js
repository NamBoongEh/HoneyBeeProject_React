import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  border-top: 1px solid black;
  padding: 10px 3px;
`;

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
