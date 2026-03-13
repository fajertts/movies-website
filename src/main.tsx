import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
