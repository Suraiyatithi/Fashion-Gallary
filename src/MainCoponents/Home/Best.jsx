
import React, { useEffect, useState } from 'react';
import TopProduct from './TopProduct';
import TopCustomer from './TopCustomer';

const Best = () => {
    const [datas,setdatas]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setdatas(data))
    
    
    },[])
    console.log(datas)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 gap-4 pl-10' >
            <div className="border border-violet-300 shadow-lg rounded p-2 divide-y divide-solid">
            <div className="p-4">
   <h1 className='text-2xl text-pink-800 font-bold'>    Top Product</h1>
    <small>In This Week there are so many product that was sell as the best product according to the sales and customer demands.</small>
      
   </div>
            {
            datas.map(data=><TopProduct key={data.id} data={data}></TopProduct >)
        }

            </div>
            <div className="border border-violet-300 shadow-lg rounded p-2 divide-y divide-solid ">
            <div className="p-2">
   <h1 className='text-2xl text-pink-800 font-bold'>    Top Customer</h1>
    <small>In This Week there are so many product that was sell as the best product according to the sales and customer demands.</small>
      
   </div>
            {
            datas.map(data=><TopCustomer key={data.id} data={data}></TopCustomer >)
        }

            </div>
            <div className="border border-violet-300 shadow-lg rounded p-2 divide-y divide-solid">
            <div className="p-2">
   <h1 className='text-2xl text-pink-800 font-bold'> Recent Activity</h1>
    <small>In This Week there are so many product that was sell as the best product according to the sales and customer demands.</small>
      
   </div>
   <div className="">
   <ul className="steps steps-vertical">
  <li className="step step-[9FE2BF]">
    <div className="lg:flex justify-between">
       <div className="">
       <p>New Added Product</p>
       <p>#Id-189e3289428</p>
       </div>
<p className='ml-12'>Sept 12,2023</p>
    </div>
  </li>
  <li className="step step-[9FE2BF]">
  <div className="lg:flex justify-between">
       <div className="">
       <p>New Added site and </p>
       <p>#Id-18hqujhj28</p>
       </div>
<p className='ml-12'>Sept 19,2023</p>
    </div>
  </li>
  <li className="step step-[9FE2BF]">
  <div className="lg:flex justify-between">
       <div className="">
       <p>New Added Product</p>
       <p>#Id-1828jhfdj28</p>
       </div>
<p className='ml-12'>Sept 20,2023</p>
    </div>
  </li>
  <li className="step step-[9FE2BF]">
  <div className="lg:flex justify-between">
       <div className="">
       <p> Added Employee</p>
       <p>#Id-2383289428</p>
       </div>
<p className='ml-20'>Sept 22,2023</p>
    </div>
  </li>
  <li className="step step-[9FE2BF]">
  <div className="lg:flex justify-between">
       <div className="">
       <p>Overdue Shipment</p>
       <p>#Id-189e3289ju28</p>
       </div>
<p className='ml-16'>Sept 23,2023</p>
    </div>
  </li>
  <li className="step step-[9FE2BF]">
  <div className="lg:flex justify-between">
       <div className="">
       <p>New Added Product</p>
       <p>#Id-189e3289428</p>
       </div>
<p className='ml-14'>Sept 12,2023</p>
    </div>
  </li>
  <li className="step step-[9FE2BF]">
  <div className="lg:flex justify-between">
       <div className="">
       <p>Order verification</p>
       <p>#Id-189edhj428</p>
       </div>
<p className='ml-20'>Sept 26,2023</p>
    </div>
  </li>
</ul>
   </div>

            </div>
            
        </div>
    );
};

export default Best;