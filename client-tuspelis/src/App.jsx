import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//Importamos las paginas
import { TipoFavoritoPagina } from './pages/TipoFavoritoPagina';
import { TipoFavoritoForm } from './pages/TipoFavoritoForm';
import { FavoritoForm } from './pages/FavoritoForm';
import { FavoritoPagina } from './pages/FavoritoPagina';
import { FavoritoUserForm } from './pages/FavoritoUserForm';
import { FavoritoUserPagina } from './pages/FavoritoUserPagina';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { NoFound } from './pages/NoFound';
import { ProtectedRoute } from './components/ProtectedRoute';

// Navigation
import { Navigation } from './components/navigation';

function Logout(){
  localStorage.clear();
  return <Navigate to="/login" />
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
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />

        <Route path="/favoritos" element={<FavoritoPagina />} />
        <Route path="/favoritos/add" element={<ProtectedRoute><FavoritoForm /></ProtectedRoute>} />
        <Route path="/favoritos/:id" element={<ProtectedRoute><FavoritoForm /></ProtectedRoute>} />
  
        <Route path="/tipos-favoritos" element={<ProtectedRoute><TipoFavoritoPagina /></ProtectedRoute>} />
        <Route path="/tipos-favoritos/add" element={<ProtectedRoute><TipoFavoritoForm /></ProtectedRoute>} />
        <Route path="/tipos-favoritos/:id" element={<ProtectedRoute><TipoFavoritoForm /></ProtectedRoute>} />
        
        <Route path="/favoritos-user" element={<ProtectedRoute><FavoritoUserPagina /></ProtectedRoute>} />
        <Route path="/favoritos-user/add" element={<ProtectedRoute><FavoritoUserForm /></ProtectedRoute>} />

        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App