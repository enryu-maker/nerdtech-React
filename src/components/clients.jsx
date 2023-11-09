import React from 'react'

import { ClientData } from '../assets/data'
import { Helmet } from 'react-helmet';

const Clients = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NerdTech :: Web Development and Mobile Applications Development Agency</title>
        <description>
          Discover the success stories of our satisfied customers at [Your Software Company]. Explore how our innovative software solutions have empowered businesses to thrive in a digital landscape. Read testimonials, case studies, and learn how we can tailor our expertise to meet your unique needs.
        </description>
      </Helmet>
      <div id='clients' className='flex flex-col justify-center items-center w-[90%] py-24 '>
        <div className="text-4xl  px-24 py-10 text-center" style={{ fontFamily: 'nothing', letterSpacing: 2 }}>OUR CLIENTS</div>
        <div className="flex flex-wrap justify-center gap-10">
          {
            ClientData.map((item, id) => (

              <img src={item.img} alt="" className='w-[135px] h-[135px] mix-blend-multiply rounded-full cursor-pointer grayscale transition ease delay-1500 hover:grayscale-0 ' />
            ))

          }

        </div>
      </div>
    </>
  )
}

export default Clients;