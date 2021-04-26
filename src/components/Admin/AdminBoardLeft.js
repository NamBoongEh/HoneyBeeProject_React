import React from 'react';
import AdminMiniBar from './subcomponents/AdminMiniBar';
import AdminHoneyBeeBoard from './AdminHoneyBeeBoard';

export default function AdminBoardLeft(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ zIndex: props.zIndex, padding: '0 1px 0 0' }}
      >
        <AdminMiniBar name={'홈페이지 통계자료'} id={'AdminStatistData'} />
        <div
          style={{
            overflow: 'auto',
            height: '300px',
            marginBottom: '7%',
            backgroundColor: '#eeeeee',
          }}
        >
          여기에 통계자료가 들어간다
        </div>
        <AdminHoneyBeeBoard name={'허니비 홈페이지'} />
      </div>
    </>
  );
}
