import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Static_section from './Components/Static_section'
import Main_section_One from './Components/Main_section_One'
import Main_section_Two from './Components/Main_section_Two'
import Main_section_Three from './Components/Main_section_Three'
import Footer from './Components/Footer'
import CTA from './Components/CTA'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Static_section/>
      <Main_section_One/>
      <Main_section_Two/>
      <Main_section_Three/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App
