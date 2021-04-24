import React, { useState } from 'react';
import styled from 'styled-components';
import AdminMiniBar from './subcomponents/AdminMiniBar';
import AdminQnA from '../Admin/AdminQnA';

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

        <AdminQnA name={'문의게시판'} />
      </div>
    </>
  );
}
