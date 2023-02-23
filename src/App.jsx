import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Homepage } from './pages/Homepage/Homepage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
