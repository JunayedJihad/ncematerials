import React from "react";
import Course from "../components/Course";
// import bannerImg from '../assets/nce wallapaper (1).jpg'
import img1 from "../assets/Mathematics-rafiki.png";
import img2 from "../assets/Science-pana.png";
import img3 from "../assets/English teacher-rafiki.png";
import img4 from "../assets/Electrician-amico.png";
import img5 from "../assets/chemistry lab-rafiki.png";
import img6 from "../assets/3d modeling-pana.png";
import img7 from "../assets/beaker chemistry-bro.png";
import img8 from "../assets/brain sides-cuate.png";
import img9 from "../assets/Exams-rafiki.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <p className="text-center text-xl lg:text-2xl font-medium mb-4">Level 01/Term 01</p>
      <div className="sm:flex sm:flex-wrap justify-center">

      <marquee className='bg-slate-100 py-2 my-4'>*Many of the materials are collected from other Departments.</marquee>

      <NavLink to="nce101"  className=' zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img5} title="nce 101" />
      </NavLink>

      <NavLink to="eee155"  className='zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img8} title="eee 155" />
      </NavLink>

      <NavLink to="hum133"  className='zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img3} title="hum 133" />
      </NavLink>

      <NavLink to="chem161"  className='zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img2} title="chem 161" />
      </NavLink>

      <NavLink to="math112"  className='zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img1} title="math 112" />
      </NavLink>

      <NavLink to="eee156"  className='zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img4} title="eee 156" />
      </NavLink>

      <NavLink to="chem162"  className='zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img7} title="chem 162" />
      </NavLink>

      <NavLink to="me174"  className='zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img6} title="me 174" />
      </NavLink>

      <NavLink to="https://buetedu-my.sharepoint.com/:f:/g/personal/2217008_nce_buet_ac_bd/EjNttpfdZu5BuI6QD2oeBbgBc75eXJQQrdcuR_dlSZs44A?e=I0kv8N"  className='zoom sm:basis-[48.5%] lg:basis-[32%] xl:basis-[24.5%]'>
        <Course image={img9} title="TF Question" />
      </NavLink>

    </div>
    </div>
  );
}

export default Home;
