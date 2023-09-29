import React from 'react';
import img from '../../assets/clothingStore.jpg'

const Banner = () => {
  return (
    <div className='pl-12'>
      <div className="grid lg:grid-cols-2">
      <div className="lg:order-2">
      <div className=" relative">

          <div className="absolute top-0 right-0 p-4"> 
            <button className='btn rounded-full border border-pink-800'>Get In Touch</button>
          </div>
          <img src={img} className='img' alt="" />
         </div>
        </div>
        <div className="text-left relative"> 
        <div className="lg:order-1">
     
          <div className="">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat border border-violet-300">
    <div className="stat-title">Money Receive</div>
    <div className="stat-value">310K</div>
    <div className="stat-desc">Sep 1st - Sep 20st</div>
  </div>
  
  <div className="stat border  border-violet-300">
    <div className="stat-title">New Customer</div>
    <div className="stat-value">1200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat border border-violet-300">
    <div className="stat-title">Profit</div>
    <div className="stat-value ">200K</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
          </div>
       
          <h1 className='text-fuchsia-950 text-5xl Bold  leading-relaxed font-bold text-left mb-8'>Discover the <br /> <span className='text-pink-800'>Latest</span> Sell <br /> and Profit</h1>
          <p className='mb-8 '>Naturally made Fashionable products for the <br /> better care and support of your body</p>
          <button className='btn bg-pink-800 text-white rounded-full '>Explore Now!</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;

