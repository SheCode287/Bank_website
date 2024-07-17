
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">

          <div className="aboutco">
               <h2>About the company</h2>
                <p>Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch </p>
                <div className="socials">
                    <FaFacebookF style={{ color: '#4B7FCD', height:'24px', width:'24px', margin:'4px'}}/>
                     <AiOutlineYoutube style={{ color: '#FF0000', height:'24px', width:'24px', margin:'4px'}}/>
                     <FaLinkedin style={{ color: '#4A71FB', height:'24px', width:'24px',  margin:'4px'}}/>
                    <FaInstagram  style={{ color: '#ED017F', height:'24px', width:'24px', margin:'4px'}}/>
                 </div>

          </div>


          <div className="products">
                   <h2>Products</h2>
                   <p>CSR Activities
                      Green Banking
                      News
                      Ongoing Campgain
                      Updates</p>

          </div>

          <div className="getstarted">
                   <h2>Get Started</h2>
                   <p>Get Started
                      Career
                      Contact Us
                      Government Securities
                      Examples
                      NIS</p>

          </div>


          <div className="about">
                   <h2>About</h2>
                   <p>About
                      IPDC at a Glance
                      Mission, VIsion & Values
                      Corporate Governanace
                      Shareholders
                      Investor Relations</p>
          </div>

          <div className="phone"><MdOutlinePhone style={{ color: '#ED017F', height:'24px', width:'24px'}} /> 16519</div>














      
    </div>
  )
}

export default Footer
