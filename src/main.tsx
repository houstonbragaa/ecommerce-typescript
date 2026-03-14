import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App.tsx'
import CartProvider from './contexts/cart-context.tsx'
import { UserProvider } from './contexts/user-context.tsx'

const root = document.getElementById('root')

createRoot(root!).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  </StrictMode>
)
