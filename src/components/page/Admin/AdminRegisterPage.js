import React from 'react';
import AdminAuthTemplate from '../../auth/AdminAuthTemplate';
import AdminRegisterForm from '../../../containers/auth/AdminRegisterForm';

const AdminRegisterPage = () => {
  return (
    <AdminAuthTemplate>
      <AdminRegisterForm />
    </AdminAuthTemplate>
  );
};

export default AdminRegisterPage;
