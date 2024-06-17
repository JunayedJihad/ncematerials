import React from 'react'
import Course from "../components/Course";
import img1 from "../assets/Reading glasses-bro.png";
import img2 from "../assets/Presentation-rafiki.png";
import img3 from "../assets/Hand holding pen-amico.png";
import { NavLink } from "react-router-dom";

function Chem162() {
  return (
     <div className="sm:flex sm:flex-wrap justify-center">
     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EszgZvocoSVDtGHN1mPRvgYBWCgv10pAQ6JrFGELE1WfcA?e=DFxIDN"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img1} title="books" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/Ei8G03rAW5RAvzXvmve8F8wBi1C1oOdy5Ka_gvRLaoiS0g?e=bpYHzP"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img2} title="slides" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/Et5f6sNHGd5Pi4PEvFcJVLcBrJMW21APoj_grlIV5RB3Cg?e=LtpUA4"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img3} title="lab reports" />
     </NavLink>
</div>
  )
}

export default Chem162