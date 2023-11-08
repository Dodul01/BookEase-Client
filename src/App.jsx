import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function App() {

  return (
    <div>
      <HelmetProvider>
        <Nav />
        <Outlet />
        <Toaster />
        <Footer />
      </HelmetProvider>
    </div>
  )
}

export default App
