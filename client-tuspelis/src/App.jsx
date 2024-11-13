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
    <div className="min-h-screen flex flex-col items-center transition duration-200 dark:bg-gray-900 p-10">

      <BrowserRouter>

        <Routes>
          <Route path="*" element={<Navigate to="/404" />} />

          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />

          {/* Rutas protegidas */}
          <Route
              path="/"
              element={
                <ProtectedRoute>
                  <div>
                    <Navigation />
                    <Routes>
                      <Route index element={<Home />} />
                      <Route path="/tipos-favoritos" element={<TipoFavoritoPagina />} />
                      <Route path="/tipos-favoritos/add" element={<TipoFavoritoForm />} />
                      <Route path="/tipos-favoritos/:id" element={<TipoFavoritoForm />} />
                      <Route path="/favoritos" element={<FavoritoPagina />} />
                      <Route path="/favoritos/add" element={<FavoritoForm />} />
                      <Route path="/favoritos/:id" element={<FavoritoForm />} />
                      <Route path="/favoritos-user" element={<FavoritoUserPagina />} />
                      <Route path="/favoritos-user/add" element={<FavoritoUserForm />} />
                    </Routes>
                  </div>
                </ProtectedRoute>
              }
            />

          {/* Errors Page */}
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App