import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
      <Nav />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  )
}

export default App
