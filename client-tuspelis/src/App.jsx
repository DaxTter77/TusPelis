import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//Importamos las paginas
import { TipoFavoritoPagina } from './pages/TipoFavoritoPagina';
import { TipoFavoritoForm } from './pages/TipoFavoritoForm';
import { FavoritoForm } from './pages/FavoritoForm';
import { FavoritoPagina } from './pages/FavoritoPagina';
import { FavoritoUserForm } from './pages/FavoritoUserForm';
import { FavoritoUserPagina } from './pages/FavoritoUserPagina';
import { Navigation } from './components/navigation';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { ProtectedRoute } from './components/ProtectedRoute';

function Logout(){
  localStorage.clear();
  return <Navigate to="/login"/>
}

function RegisterAndLogout(){
  localStorage.clear();
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/tipos-favoritos" element={<ProtectedRoute><TipoFavoritoPagina /></ProtectedRoute>} />
        <Route path="/tipos-favoritos/add" element={<ProtectedRoute><TipoFavoritoForm /></ProtectedRoute>} />
        <Route path="/tipos-favoritos/:id" element={<ProtectedRoute><TipoFavoritoForm /></ProtectedRoute>} />
        <Route path="/favoritos" element={<ProtectedRoute><FavoritoPagina /></ProtectedRoute>} />
        <Route path="/favoritos/add" element={<ProtectedRoute><FavoritoForm /></ProtectedRoute>} />
        <Route path="/favoritos/:id" element={<ProtectedRoute><FavoritoForm /></ProtectedRoute>} />
        <Route path="/favoritos-user" element={<ProtectedRoute><FavoritoUserPagina /></ProtectedRoute>} />
        <Route path="/favoritos-user/add" element={<ProtectedRoute><FavoritoUserForm /></ProtectedRoute>} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App