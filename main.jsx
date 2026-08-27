import React from 'react'
import ReactDOM from 'react-dom/client'

// Fonte local (self-hosted): carrega rápido e não depende de serviços externos
import '@fontsource/cormorant-garamond/300.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import '@fontsource/cormorant-garamond/500-italic.css'

// Fonte sem serifa usada apenas no selo do RQE
import '@fontsource/figtree/400.css'
import '@fontsource/figtree/500.css'

import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
