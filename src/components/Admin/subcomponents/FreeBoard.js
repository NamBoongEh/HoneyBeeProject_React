import React from 'react';
import styled from 'styled-components';

const Line2 = styled.hr`
  margin: 1% 0;
  background: black;
`;

export default function FreeBoard(props) {
  return (
    <>
      <div
        style={{
          overflow: 'auto',
          height: '299px',
          marginBottom: '4%',
          backgroundColor: 'white',
        }}
      >
        <div className={'col-2'} style={{ display: 'inline-block' }}>
          03-19
        </div>
        <div className={'col-10'} style={{ display: 'inline-block' }}>
          자유게시판
        </div>
        <Line2 />
      </div>
    </>
  );
}
