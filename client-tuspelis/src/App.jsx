import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//Importamos las paginas
import { TipoFavoritoPagina } from './pages/TipoFavoritoPagina';
import { TipoFavoritoForm } from './pages/TipoFavoritoForm';
import { FavoritoForm } from './pages/FavoritoForm';
import { FavoritoPagina } from './pages/FavoritoPagina';
import { FavoritoUserForm } from './pages/FavoritoUserForm';
import { FavoritoUserPagina } from './pages/FavoritoUserPagina';
import { Navigation } from './components/navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/tipos-favoritos" />} />
        <Route path="/tipos-favoritos" element={<TipoFavoritoPagina />} />
        <Route path="/tipos-favoritos/add" element={<TipoFavoritoForm />} />
        <Route path="/tipos-favoritos/:id" element={<TipoFavoritoForm />} />
        <Route path="/favoritos" element={<FavoritoPagina />} />
        <Route path="/favoritos/add" element={<FavoritoForm />} />
        <Route path="/favoritos-user" element={<FavoritoUserPagina />} />
        <Route path="/favoritos-user/add" element={<FavoritoUserForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App