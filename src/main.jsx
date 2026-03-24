import './app/styles'
import {useTranslation} from "react-i18next";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app'

import './i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
