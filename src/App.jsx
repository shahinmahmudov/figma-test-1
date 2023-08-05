import Cards from "./components/Cards"
import FIlters from "./components/FIlters"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Title from "./components/Title"

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Title />
        <FIlters />
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App
