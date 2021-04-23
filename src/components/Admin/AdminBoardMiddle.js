import React from 'react';
import styled from 'styled-components';
import AdminMiniBar from './subcomponents/AdminMiniBar';
import QnA1 from './subcomponents/QnA1';
import QnA2 from './subcomponents/QnA2';
import QnAContainer from '../containers/QnAContainer';

export default function AdminBoardMiddle(props) {
  return (
    <>
      <div className={'container-fluid'} style={{ backgroundColor: 'yellow' }}>
        <AdminMiniBar name={'홈페이지 통계자료'} id={'AdminStatistData'} />
        <div
          style={{
            overflow: 'auto',
            height: '300px',
            marginBottom: '5%',
            backgroundColor: 'white',
          }}
        >
          여기에 통계자료가 들어간다
        </div>

        <AdminMiniBar name={'고객센터'} id={'QnA'} />
      </div>
    </>
  );
}
