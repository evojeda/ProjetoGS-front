import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalStyle from './css/GlobalStyle';
import Cadastrar from './routes/Cadastrar';

function App() {
    const location = useLocation();
    const hideNavAndFooter = location.pathname === '/cadastrar' || location.pathname === '/login';


  return (
    <>
      <GlobalStyle />
      {!hideNavAndFooter && <Nav />}
      <Outlet />
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
