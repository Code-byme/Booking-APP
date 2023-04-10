import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthContextProvider from './context/AuthContext'
import CountProvider from './context/CountContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CountProvider>
    <App />
    </CountProvider>
    </AuthContextProvider>
    </React.StrictMode>,
)
