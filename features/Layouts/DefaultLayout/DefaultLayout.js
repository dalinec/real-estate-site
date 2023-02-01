import Footer from '@/features/components/Footer';
import Navbar from '@/features/components/Navbar';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
