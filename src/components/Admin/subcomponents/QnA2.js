import React from 'react';
import styled from 'styled-components';

const Line2 = styled.hr`
  margin: 1% 0;
  background: black;
`;

export default function QnA2(props) {
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
          신고
        </div>
        <Line2 />
      </div>
    </>
  );
}
