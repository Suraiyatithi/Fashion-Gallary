import React from 'react';

const TopProduct = ({data}) => {
    const { ProductName,productPicture,productDicount,ManageEmployee,topCustomer,employeePicture,CustomerPicture}=data
    return (
        <div className='flex justify-around p-2'>
   <div className="">
   <img style={{height:"3rem",width:"3rem"}} className=' rounded-full' src={productPicture} alt="" />
   </div>
  
    <div className="mt-2">
       
        <p>{ProductName}</p>
    </div>
  <div className="mt-2">
    <h1>Discount:25%</h1>
  </div>
     </div>
    );
};

export default TopProduct;