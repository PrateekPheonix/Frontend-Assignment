import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { DataProvider } from './context/DataContext.jsx'
import Compose from './utils/Compose.jsx'
import { TabProvider } from './context/TabContext.jsx'
import { OutputProvider } from './context/OutputContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Compose components={[DataProvider, TabProvider, OutputProvider]}>
      <App />
    </Compose>
  </React.StrictMode>,
)
