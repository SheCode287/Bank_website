import { FaCircleArrowRight } from "react-icons/fa6";


function Section4() {
  return (
    <div className="section-4">
      <div className="section-4-content">
        <h2>Our Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
      </div>

      <div className="section-4-img">
        <div>
          <img src="public/Image (2).svg" alt="" />
          <p>IPDC SAVING SCHEMES</p>
          <FaCircleArrowRight style={{ color: '#ED017F'}}/>
        </div>
        <div>
          <img src="public/Image (3).svg" alt="" />
          <p>IPDC SAVING SCHEMES</p>
          <FaCircleArrowRight style={{ color: '#ED017F'}}/>
        </div>
        <div>
          <img src="public/Image (4).svg" alt="" />
          <p>IPDC SAVING SCHEMES</p>
          <FaCircleArrowRight style={{ color: '#ED017F'}} />
        </div>
        <div>
          <img src="public/Image (5).svg" alt="" />
          <p>IPDC SAVING SCHEMES</p>
          <FaCircleArrowRight style={{ color: '#ED017F'}} />
        </div>
        
      </div>
    

    </div>
  )
}

export default Section4
