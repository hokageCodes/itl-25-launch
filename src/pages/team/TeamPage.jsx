import { Outlet } from 'react-router-dom';

const TeamPage = () => {
  return (
    <div>
      {/* This will render the nested routes */}
      <Outlet />
    </div>
  );
};

export default TeamPage;
