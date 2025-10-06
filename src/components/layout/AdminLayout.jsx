import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AdminLayout = ({ children }) => {
  const { isAuthenticated } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="ml-64 flex-grow">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;