import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Heroes from './Heroes'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Footer from './Footer'


function App() {
 

  return (
    <>
       <div className="container">
         <Navbar />
         <Heroes />
         <Section1 />
         <Section2 />
         <Section3 />
         <Section4 />
         <Section5 />
         <Section6 />
         <Footer/>
       </div>
      
    </>
  )
}

export default App
