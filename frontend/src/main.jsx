import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
    <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#f8fafc",
              border: "1px solid rgba(255,255,255,0.12)",
            },
            success: {
              iconTheme: {
                primary: "#fbbf24",
                secondary: "#0f172a",
              },
            },
            error: {
              iconTheme: {
                primary: "#f87171",
                secondary: "#0f172a",
              },
            },
          }}
        />
    </AuthProvider>
  </BrowserRouter>
  </StrictMode>,
)
