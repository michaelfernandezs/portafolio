import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

const App=()=> {
 

  return (

   
      
    <>

      <div className="bg-gradient-to-r from-blue-600 to-blue-900">

      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    
    </>
     


    

  )

}
  

export default App;