
import './App.css'
import About from './assets/Components/About/About'
import Hero from './assets/Components/Hero/Hero'
import Navbar from './assets/Components/Navbar/Navbar'
import Programs from './assets/Components/programs/programs'
import Title from './assets/Components/Title/Title'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <About/>
      </div>
    </>
  )
}

export default App
