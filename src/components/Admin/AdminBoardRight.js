import React from 'react';
import AdminMiniBar from './AdminMiniBar';

export default function AdminBoardRight(props) {
  return (
    <>
      <div className={props.className} style={{ backgroundColor: 'pink' }}>
        <div
          className={'container-fluid'}
          style={{ backgroundColor: 'white', border: '1px solid black' }}
        >
          남붕어 대리 <br />
          10층 프론트 1팀
          <br />
          메일함
        </div>
        <AdminMiniBar name={'달력'} />
        <div
          className={'container-fluid'}
          style={{
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          표
        </div>
        <AdminMiniBar name={'할 일'} />
      </div>
    </>
  );
}
