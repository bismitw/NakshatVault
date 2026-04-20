import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import AdminRoute from './routes/AdminRoute.jsx'
import AdminDashboardPage from './pages/AdminDashboardPage.jsx'
import KundliPage from './pages/KundliPage.jsx'
import KundliDetailsPage from './pages/KundliDetailsPage.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />


      <Route 
      path="/profile"
      element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      }
      />

      <Route 
      path="/kundli"
      element={
        <ProtectedRoute>
          <KundliPage />
        </ProtectedRoute>
      }
      />

      <Route
      path= "/kundli/:id"
      element={
        <ProtectedRoute>
          <KundliDetailsPage />
        </ProtectedRoute>
      }
      />
      
      <Route
      path="/admin/dashboard"
      element= {
        <AdminRoute>
          <AdminDashboardPage />
        </AdminRoute>
      }
      />
    </Routes>
  );
}

export default App
