import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import App from './App.jsx'
import AppContextProvider from './AppContext/AppContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router}><App></App></RouterProvider>
    </AppContextProvider>
  </React.StrictMode>,
)
