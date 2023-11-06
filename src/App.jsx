import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
