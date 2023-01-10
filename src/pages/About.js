import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay,Navigation } from "swiper";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  
  return (
    <>
    

    <footer>
<svg viewBox="0 0 120 28">
 <defs> 
   <mask id="xxx">
     <circle cx="7" cy="12" r="40" fill="#fff" />
   </mask>
   
   <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
  	</filter>
    
    <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 

   <use id="wave3" class="wave" xlinkHref="#wave" x="0" y="-2" ></use> 
   <use id="wave2" class="wave" xlinkHref="#wave" x="0" y="0" ></use>
  
  <div class="topball">
    <img class="ball" src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/arrow_up_alt1-512.png" width="50"/>
  </div> 
  
  <circle class="drop drop1" cx="20" cy="2" r="1.8"  />
  <circle class="drop drop2" cx="25" cy="2.5" r="1.5"  />
  <circle class="drop drop3" cx="16" cy="2.8" r="1.2"  />
  
  <use id="wave1" class="wave" xlinkHref="#wave" x="0" y="1" />
</svg> 
<div className="continer">
    <div className="row">
      <div className="col-lg-6 col-sm-12 term">
        <h7 className="h7 text-dark">Copyright <i class="far fa-copyright"></i>2022 Gugla News Pvt.Ltd . All Rights Reserved.</h7>
      </div>
      <div className="col-lg-6 col-sm-12 term text-end">
        <div>Terms & Conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy-Policy</div>
      </div>
    </div>
</div>
  
</footer>
    </>
  )
}

export default About
