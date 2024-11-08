/* eslint-disable react/prop-types */
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
