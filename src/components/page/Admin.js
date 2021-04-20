import React from 'react';
import AdminHeader from '../Admin/AdminHeader';
import AdminMenu from '../Admin/AdminMenu';
import AdminBoardLeft from '../Admin/AdminBoardLeft';
import AdminBoardRight from '../Admin/AdminBoardRight';
import AdminBoardMiddle from '../Admin/AdminBoardMiddle';

export default function Admin(props) {
  return (
    <>
      <AdminHeader className={'row'} />
      {/* <AdminMenu /> */}
      <div className={'row'} style={{ display: 'flex' }}>
        <AdminBoardLeft className={'col-4'} />
        <AdminBoardMiddle className={'col-4'} />
        <AdminBoardRight className={'col-4'} />
      </div>
    </>
  );
}
