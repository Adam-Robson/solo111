import { Outlet } from 'react-router-dom';
import Title from './Title';
import Header from './Header';
import Footer from './Footer';

export default function Home() {

  
  return (
    <div>
      <Header />
      <main>
        <Title />
      </main>
      <Footer />
    </div>
  );
}
