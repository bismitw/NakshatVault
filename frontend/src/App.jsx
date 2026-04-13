import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashBoardPage from './pages/DashBoardPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
      path="/dashboard" 
      element={
        <ProtectedRoute>
          <DashBoardPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App
