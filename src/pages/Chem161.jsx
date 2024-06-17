import React from 'react'
import Course from "../components/Course";
import img1 from "../assets/Reading glasses-bro.png";
import img2 from "../assets/Presentation-rafiki.png";
import img3 from "../assets/Hand holding pen-amico.png";
import { NavLink } from "react-router-dom";

function Chem161() {
  return (
     <div className="sm:flex sm:flex-wrap justify-center">
     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EpyIoVug7opIkyBhnQPKxy8BVsXojW8HRC4d0qSzb85afg?e=oKvAHe"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img1} title="books" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/Et3IjtFPOYlCgzuOhyDpPq8BkmswGpASkwvs4fi43LqCNA?e=Ae70xD"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img2} title="slides" />
     </NavLink>

     <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/En5t0WsKX1tBnEYDWmgqp7gBTibki_lPtb9fUo2OFY-WNg?e=8SSqEz"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
          <Course image={img3} title="notes" />
     </NavLink>
</div>
  )
}

export default Chem161