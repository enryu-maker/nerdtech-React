import React from 'react'
import { Helmet } from 'react-helmet'
const Blog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NerdTech :: Web Development and Mobile Applications Development Agency</title>
        <description>In website development service we offers customized website design, development, and maintenance, catering to clients' specific needs, goals, and budget. We aims to create a professional, user-friendly, and high-performing online presence.</description>
      </Helmet>
      <div id='blogs' className='flex flex-col justify-center items-center w-[90%] py-24 '>
        <div className="text-4xl  px-24 py-10 text-center" style={{ fontFamily: 'nothing', letterSpacing: 2 }}>BLOGS</div>
      </div>
    </>

  )
}

export default Blog