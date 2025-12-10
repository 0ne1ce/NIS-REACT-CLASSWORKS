import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from '@/app'
import { HomePage } from '@/pages'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <HomePage />
    </Providers>
  </StrictMode>,
)
