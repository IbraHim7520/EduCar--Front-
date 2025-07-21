import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/App'

import AuthProvider from '../Firebase/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  
  
  <StrictMode>
  <QueryClientProvider client={queryClient} >
      <AuthProvider>
        <Toaster></Toaster>
        <App></App>
    </AuthProvider>
  </QueryClientProvider>
  </StrictMode>,
)
