import React from 'react';

const TopCustomer = ({data}) => {
    const { ProductName,productPicture,productDicount,ManageEmployee,topCustomer,employeePicture,CustomerPicture}=data
    return (
        <div className='flex justify-around p-2'>
   <div className="">
   <img style={{height:"3rem",width:"3rem"}} className=' rounded-full' src={CustomerPicture} alt="" />
   </div>
  
    <div className="mt-2">
       
        <p>{topCustomer}</p>
    </div>
  <div className="mt-2">
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
  </div>
     </div>

    );
};

export default TopCustomer;