/* eslint-disable react/prop-types */
import AdminSidebar from '../layouts/AdminSidebar';
import AdminHeader from '../layouts/AdminHeader';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
