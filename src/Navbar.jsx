import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className='nav'>

   <div><img src="image-removebg-preview (10) 1.svg" alt="Bank logo" /></div>
   
   <div className="nav-links"  >
    <ul>
        <li><a href="">RETAIL</a></li>
        <li><a href="">SME</a></li>
        <li><a href="">CORPORATE</a></li>
        <li><a href="">ABOUT US</a></li>
        <li><a href="">COVID 19</a></li>
        <li><a href="">CAMPGAINS</a></li>
        
    </ul>

   <div className="nav-search">
     <CiSearch style={{ color: '#ED017F', height:'24px', width:'24px',}}/>
     <button>SERVICE</button>
   </div>


   </div>





      
    </div>
  )
}

export default Navbar
