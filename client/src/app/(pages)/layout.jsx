import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Homepage',
  description: 'Homepage'
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
