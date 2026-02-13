import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './index.css'

import App from './App.tsx'
import { UserProvider } from './contexts/user-context.tsx'

const root = document.getElementById('root')

createRoot(root!).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
)
