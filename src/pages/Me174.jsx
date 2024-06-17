import React from 'react'
import Course from "../components/Course";
import img1 from "../assets/Reading glasses-bro.png";
import img2 from "../assets/Presentation-rafiki.png";
import img3 from "../assets/Hand holding pen-amico.png";
import { NavLink } from "react-router-dom";

function Me174() {
  return (
     <div className="sm:flex sm:flex-wrap justify-center">
     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/Eq4Zdcu8KhVAoCPpCqIkglABq9hB1AhIjKqsh5PNV9X_2g?e=qnSvkD"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img1} title="books" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/Ek7X78OuTqdApl7Eg8dgma4BjPeM_oWY3vqs6zFyYvC3vw?e=sfEqiF"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img2} title="slides" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EgQac5t16npAgdrcRKKuh0kBJtE1JZOuQwOuiymNR5qoSQ?e=kUSZI4"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img3} title="notes" />
     </NavLink>
</div>
  )
}

export default Me174