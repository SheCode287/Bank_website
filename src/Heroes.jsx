import { MdOutlinePhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
function Heroes() {
  return (
    <>

    <div className="Heroes">
      <div className="Heroes-1">
            <h1>Chase Your
            Dream with us</h1>
            <p>The harder you work for something, the greater <br />
             you’ll feel when you achieve it.</p>
             <div className="Heroes-1-buttons">
               <button className="btn1">APPLY ONLINE</button>
               <button className="btn2">LOAN CALCULATOR</button>
             </div>
             <div className="Heroes-icons">
             <MdOutlinePhone   style={{ color: '#ED017F', height:'24px', width:'24px', margin:'4px'}}></MdOutlinePhone>
             <FaFacebookF style={{ color: '#4B7FCD', height:'24px', width:'24px', margin:'4px'}}/>
             <AiOutlineYoutube  style={{ color: '#FF0000', height:'24px', width:'24px', margin:'4px'}}/>
             <FaLinkedin  style={{ color: '#4A71FB', height:'24px', width:'24px',  margin:'4px'}}/>
             <FaInstagram  style={{ color: '#ED017F', height:'24px', width:'24px', margin:'4px'}}/>
             </div>
      </div>
      <div className="Heroes-2">
         <div className="car-icon"><FaCarSide  style={{ color: '#ED017F', height:'30px', width:'30px'}} /> <p>Car Loans</p></div>
          <div className="background"></div>
         <div className="home-icon">< CiHome  style={{ color: '#ED017F', height:'30px', width:'30px'}}/>  <p>Home Loan</p></div>
         <div className="dot-icons">
         <BsThreeDotsVertical  style={{ color: '#ED017F', height:'30px', width:'30px'}}/>
         </div>
      </div>
    </div>

      
    </>
  )
}

export default Heroes
