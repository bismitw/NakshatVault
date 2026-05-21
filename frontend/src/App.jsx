import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import AdminRoute from './routes/AdminRoute.jsx'
import AdminDashboardPage from './pages/AdminDashboardPage.jsx'
import AppointmentPage from './pages/AppointmentPage.jsx'
import KundliPage from './pages/KundliPage.jsx'
import KundliDetailPage from './pages/KundliDetailPage.jsx'
import AboutInfoPage from './pages/AboutInfoPage.jsx'
import FeaturesInfoPage from './pages/FeaturesInfoPage.jsx'
import ProcessInfoPage from './pages/ProcessInfoPage.jsx'
import CustomerSupportPage from './pages/CustomerSupportPage.jsx'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutInfoPage />} />
      <Route path="/features" element={<FeaturesInfoPage />} />
      <Route path="/process" element={<ProcessInfoPage />} />
      <Route path="/customer-support" element={<CustomerSupportPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
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
          <KundliDetailPage />
        </ProtectedRoute>
      }
      />

      <Route
      path="/appointment"
      element= {
        <ProtectedRoute>
          <AppointmentPage />
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
