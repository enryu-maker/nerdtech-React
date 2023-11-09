import React from 'react'
import web from "../assets/icons/responsive.gif"
import ServiceCard from './serviceCard';
import { ServicesData } from '../assets/data';
import { Helmet } from 'react-helmet'
const Services = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>NerdTech :: Web Development and Mobile Applications Development Agency</title>
        <description>
          In website development service we offers customized website design,
          development, and maintenance, catering to clients' specific needs,
          goals, and budget. We aims to create a professional, user-friendly,
          and high-performing online presence.
        </description>
      </Helmet>
      <div id='service' className='flex flex-col justify-center items-center w-[100%] '>
        <div className="text-4xl  px-24 py-10 pt-24 text-center" style={{ fontFamily: 'nothing', letterSpacing: 2 }}>OUR SERVICES</div>
        <div className="flex flex-wrap justify-center  gap-5">
          {
            ServicesData.map((item, id) => (

              <ServiceCard key={id} title={item.title} desc={item.desc} gif={item.gif} lottie={item.lottie} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Services;