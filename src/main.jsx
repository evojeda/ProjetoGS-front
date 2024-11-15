import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Cadastrar from './routes/Cadastrar.jsx';
import Sobre from './routes/Sobre.jsx';
import Solucao from './routes/Solucao.jsx';
import Error from './routes/Error.jsx';
import GlobalStyle from './css/GlobalStyle.jsx';

// Criando a função createBrowserRouter para definir as rotas
const router = createBrowserRouter([
  {
    // Elemento Pai (Caminho principal)
    path: '/', element: <App />,
    errorElement: <Error />,
    // Elementos Filhos (Rotas internas do App)
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/cadastrar', element: <Cadastrar /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/solucao', element: <Solucao /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Importando o GlobalStyle para aplicar os estilos globais */}
    <GlobalStyle />
    {/* Renderizando o RouterProvider com a configuração das rotas */}
    <RouterProvider router={router} />
  </StrictMode>
);
