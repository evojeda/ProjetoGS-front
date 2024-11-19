import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalStyle from './css/GlobalStyle';

function App() {
  const location = useLocation();
  const hideNavAndFooter = ['/cadastrar', '/login'].includes(location.pathname);

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