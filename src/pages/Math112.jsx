import React from 'react'
import Course from "../components/Course";
import img1 from "../assets/Reading glasses-bro.png";
import img2 from "../assets/Presentation-rafiki.png";
import img3 from "../assets/Hand holding pen-amico.png";
import { NavLink } from "react-router-dom";

function Math112() {
  return (
     <div className="sm:flex sm:flex-wrap justify-center">
     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EnZYCAgA64NBnn59KZ1ZfhkBJ202MOhGfHElmZZJ0NHhDQ?e=zw0qiw"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img1} title="books" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/El9aTZv7fb9BqmpqCoLYsq4By2MRKCNmX-c6tsgouc5-ag?e=YkOfIl"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img2} title="slides" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/Eo_OKpmXIpBHpcn00F88ArYBJrrALBTR8vkE7PyYC0MFdw?e=dxijFL"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img3} title="notes" />
     </NavLink>
</div>
  )
}

export default Math112