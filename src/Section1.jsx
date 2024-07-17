import { TbChartCircles } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { FaRegObjectUngroup } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { PiCubeDuotone } from "react-icons/pi";



function Section1() {

  return (
    <>
       <div className="section1-ctr">
         <div className="sec1-content">
          <h1>Creating Extraordinary Customer Experience</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   <br /> Nullam bibendum eget morbi
           dignissim eu pharetra consequat montes, sagittis.</p>
         </div>
         
             <div className="sec1-values">
                 <div>
         
                  <TbChartCircles  style={{ color: '#ED017F', height:'30px', width:'30px'}}/>
                  <h2>Intergrity</h2>
                  <p>Displaying the highest <br />
                  level of Integrity in the <br />
                  way we conduct our business</p>
                 </div>
                 <div>
         
                  <CiImageOn style={{ color: '#ED017F', height:'30px', width:'30px'}}/>
                  <h2>Demonstrate</h2>
                  <p>Displaying the highest <br />
                  level of Integrity in the <br />
                  way we conduct our business</p>
                 </div>
                 <div>
         
                  <FaRegObjectUngroup style={{ color: '#ED017F', height:'30px', width:'30px'}}/>
                  <h2>Diversity</h2>
                  <p>Displaying the highest <br />
                  level of Integrity in the <br />
                  way we conduct our business</p>
                 </div>
                 <div>
         
                  <FaUser style={{ color: '#ED017F', height:'30px', width:'30px'}}/> <FaUser style={{ color: '#ED017F', height:'30px', width:'30px'}} /> <FaArrowsAltH style={{ color: '#ED017F', height:'30px', width:'30px'}} />
                  <h2>Teamwork</h2>
                  <p>Displaying the highest <br />
                  level of Integrity in the <br />
                  way we conduct our business</p>
                 </div>
                 
         
             </div>




             <div className="sec1-2">
                   <div>
                    <TbChartCircles  style={{ color: '#ED017F', height:'30px', width:'30px'}}/>
                    <h2>Collaboration</h2>
                    <p>Displaying the highest <br />
                    level of Integrity in the <br />
                    way we conduct our business</p>
                   </div>
                   <div>
                    <FaRocket  style={{ color: '#ED017F', height:'30px', width:'30px'}}/>
                    <h2>Technology</h2>
                    <p>Displaying the highest <br />
                    level of Integrity in the <br />
                    way we conduct our business</p>
                   </div>
                   <div>
         
                    <PiSuitcaseSimpleDuotone  style={{ color: '#ED017F', height:'30px', width:'30px'}}/>
                    <h2>Corporate</h2>
                    <p>Displaying the highest <br />
                    level of Integrity in the <br />
                    way we conduct our business</p>
                   </div>
                   <div>
         
                    <PiCubeDuotone  style={{ color: '#ED017F', height:'30px', width:'30px'}}/>
                    <h2>Digital</h2>
                    <p>Displaying the highest <br />
                    level of Integrity in the <br />
                    way we conduct our business</p>
                   </div>
                 </div>
       </div>



    </>
  )
}

export default Section1
