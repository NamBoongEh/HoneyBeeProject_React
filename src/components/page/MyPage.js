import React from 'react';
import styled from 'styled-components';
import { XSquare } from 'react-bootstrap-icons';

const ProFile = styled(XSquare)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  font-size: 110px;
`;

export default function MyPage(props) {
  return (
    <>
      <div
        className={'col-3'}
        style={{
          borderStyle: 'solid',
          fontSize: 'x-large',
          lineHeight: '50px',
          fontWeight: 'bold',
        }}
      >
        하잉
      </div>
      <div
        className={'col-9'}
        style={{
          borderStyle: 'solid',
          fontSize: 'x-large',
          lineHeight: '50px',
          fontWeight: 'bold',
        }}
      >
        하이
      </div>
    </>
  );
}
