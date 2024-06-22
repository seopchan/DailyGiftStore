import Footer from '@/layouts/Footer.tsx';
import Header from '@/layouts/Header.tsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1> Layout </h1>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
