import React from 'react'
import Course from "../components/Course";
import img1 from "../assets/Reading glasses-bro.png";
import img2 from "../assets/Presentation-rafiki.png";
import img3 from "../assets/Hand holding pen-amico.png";
import { NavLink } from "react-router-dom";

function Nce101() {
  return (
    <div className="sm:flex sm:flex-wrap justify-center">
          <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EuCuz1QAY-xClxRTSra86vIBoKQIMLApHfNGxYxkcf_rGA?e=iCCvAG"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
               <Course image={img1} title="books" />
          </NavLink>

          <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EhNvMeL-lSRNg0vvJfDlD0gBD8WExDE65CyEyFbRYo8P7w?e=QqQPzo"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
               <Course image={img2} title="slides" />
          </NavLink>

          <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EoQFQBMsAadDg0uIjmJfUHIBCi8WOX3pan8417J60tEXOA?e=bgE6xY"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
               <Course image={img3} title="notes" />
          </NavLink>
    </div>
  )
}

export default Nce101