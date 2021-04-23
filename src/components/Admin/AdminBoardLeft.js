import React from 'react';
import styled from 'styled-components';
import AdminMiniBar from './subcomponents/AdminMiniBar';
import MeetBoard from './subcomponents/MeetBoard';
import FreeBoard from './subcomponents/FreeBoard';

export default function AdminBoardLeft(props) {
  return (
    <>
      <div className={'container-fluid'} style={{ backgroundColor: 'aqua' }}>
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
        <AdminMiniBar name={'허니비 홈페이지 게시판'} id={'AdminBoard'} />

        <MeetBoard />
        <FreeBoard />
      </div>
    </>
  );
}
