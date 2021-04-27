import React from 'react';
import AdminAuthTemplate from '../../auth/AdminAuthTemplate';
import AdminAuthForm from '../../auth/AdminAuthForm';
import AdminLoginForm from '../../../containers/auth/AdminLoginForm';

const AdminLoginPage = () => {
  return (
    <>
      <AdminAuthTemplate>
        <AdminLoginForm />
      </AdminAuthTemplate>
    </>
  );
};

export default AdminLoginPage;
