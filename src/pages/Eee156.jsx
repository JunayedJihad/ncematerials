import React from 'react'
import Course from "../components/Course";
import img1 from "../assets/Reading glasses-bro.png";
import img2 from "../assets/Presentation-rafiki.png";
import img3 from "../assets/Hand holding pen-amico.png";
import { NavLink } from "react-router-dom";

function Eee156() {
  return (
     <div className="sm:flex sm:flex-wrap justify-center">
     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/Eoq1imORfU1KllhcVhXQACoBL1_mp2OzILU1OCGSocANmg?e=5aDbb6"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img1} title="books" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EugfdPIpbOtLtlzP_p6vpewBPgQExbjTEGV7-YBece6YVQ?e=Tf8Xb7"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img2} title="slides" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/ErFSXO_em75IqUyn057yuTYBUHjNJ8UOF0BD-tiWAX6GBA?e=KpWI6I"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img3} title="lab reports" />
     </NavLink>
</div>
  )
}

export default Eee156