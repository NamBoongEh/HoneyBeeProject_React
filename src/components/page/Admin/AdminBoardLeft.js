import React from 'react';
import AdminMiniBar from './AdminMiniBar';

export default function AdminBoardLeft(props) {
  return (
    <>
      <div className={props.className} style={{ backgroundColor: 'aqua' }}>
        <AdminMiniBar name={'홈페이지 통계자료'} />
      </div>
    </>
  );
}
