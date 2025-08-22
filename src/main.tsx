import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext'
import { LoginForm } from './components/auth/LoginForm'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import awsconfig from './aws-exports'
import './index.css'

Amplify.configure(awsconfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <LoginForm>
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      </LoginForm>
    </AuthProvider>
  </React.StrictMode>,
)