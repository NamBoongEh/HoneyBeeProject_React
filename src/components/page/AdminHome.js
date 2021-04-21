import React from 'react';
import AdminHeader from '../Admin/AdminHeader';
import AdminMenu from '../Admin/AdminMenu';
import AdminBoardLeft from '../Admin/AdminBoardLeft';
import AdminBoardRight from '../Admin/AdminBoardRight';
import AdminBoardMiddle from '../Admin/AdminBoardMiddle';

export default function AdminHome(props) {
  return (
    <>
      <AdminHeader className={'container-fluid'} />
      <div className={'container-fluid'} style={{ display: 'flex' }}>
        <AdminMenu className={'col-1 '} />
        <AdminBoardLeft className={'col-4'} />
        <AdminBoardMiddle className={'col-4'} />
        <AdminBoardRight className={'col-3'} />
      </div>
    </>
  );
}
