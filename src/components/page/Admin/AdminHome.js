import React from 'react';
import AdminHeader from '../../Admin/AdminHeader';
import AdminMenu from '../../Admin/AdminMenu';
import AdminBoardLeft from '../../Admin/AdminBoardLeft';
import AdminBoardRight from '../../Admin/AdminBoardRight';
import AdminBoardMiddle from '../../Admin/AdminBoardMiddle';

// 개빡치게 메뉴가 계속 위로 올라오지않는다. 하....
export default function AdminHome(props) {
  return (
    <>
      <AdminHeader className={'container-fluid'} />
      <div style={{ display: 'flex', width: '100%' }}>
        <AdminMenu style={{ position: 'absolute', zIndex: '30' }} />
        <AdminBoardLeft className={'col-4'} style={{ zIndex: '10' }} />
        <AdminBoardMiddle className={'col-4'} style={{ zIndex: '10' }} />
        <AdminBoardRight className={'col-3'} style={{ zIndex: '10' }} />
      </div>
    </>
  );
}
