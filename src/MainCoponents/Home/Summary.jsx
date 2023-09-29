import React from 'react';

const Summary = () => {
    const violetColor = "#8B5CF6";
    return (
        <>
        <div className='lg:flex items-start gap-6 mt-20'>
            <div className="lg:w-2/3">
                <table style={{ textAlign: 'left' }} className="table border  shadow-2xl ">
                    <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Customer Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Deliver with</th>
                            <th>Payment Method</th>
                            <th>Status</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#63267267</td>
                            <td>Ganderton</td>
                            <td>3</td>
                            <td>$40</td>
                            <td>Khilgoan,Dhaka</td>
                            <td>Encounter</td>
                            <td>Bkash</td>
                            <td>On going</td>
                        </tr>
                        <tr>
                        <td>#63267987</td>
                            <td>Mohima</td>
                            <td>3</td>
                            <td>$48</td>
                            <td>Khilgoan,Dhaka</td>
                            <td>FlyButter</td>
                            <td>Bkash</td>
                            <td>Delivered</td>
                        </tr>
                        <tr>
                        <td>#63264767</td>
                            <td>Cahimya</td>
                            <td>7</td>
                            <td>$90</td>
                            <td>Dhanmondi,Dhaka</td>
                            <td>Pathao</td>
                            <td>Cash on delivery</td>
                            <td>Received</td>
                        </tr>
                        <tr>
                        <td>#63267987</td>
                            <td>Mohima</td>
                            <td>3</td>
                            <td>$48</td>
                            <td>Khilgoan,Dhaka</td>
                            <td>FlyButter</td>
                            <td>Bkash</td>
                            <td>Delivered</td>
                        </tr>
                        <tr>
                        <td>#80967267</td>
                            <td>Alisha ara</td>
                            <td>10</td>
                            <td>$100</td>
                            <td>Khilgoan,Dhaka</td>
                            <td>Encounter</td>
                            <td>Bkash</td>
                            <td>On going</td>
                        </tr>
                    
                     
                        <tr>

                             <td>#1783477267</td>
                            <td>Rahim mia</td>
                            <td>5</td>
                            <td>$80</td>
                            <td>Khilgoan,Dhaka</td>
                            <td>Pathao</td>
                            <td>Bkash</td>
                            <td>Delivere</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="lg:w-1/3 pl-12 mb-12">
            <div className="p-8 border border-violet-200 rounded mb-3">
            <p className='text-xl text-pink-800 font-bold'>Proft By sale</p>
                <h1 className='text-4xl text-fuchsia-950 '>$1200800</h1>
            <progress className="progress progress-violet-300 w-56" value="90" max="100"
            style={{
            
                background: `linear-gradient(90deg, ${violetColor} 0%, #6366F1 100%)`,
              }} ></progress>
        
            </div>
            <div className="p-8 border border-violet-200 rounded">
            <p className='text-xl text-pink-800 font-bold'>Cost</p>
                <h1 className='text-4xl text-fuchsia-950 '>$36000</h1>
            <progress className="progress progress-violet-300 w-56" value="70" max="100"
            style={{
            
                background: `linear-gradient(90deg, ${violetColor} 0%, #6366F1 100%)`,
              }} ></progress>
        
            </div>
            </div>
      
        </div>
        <div className="text-center">
            <p className='text-xl font-bold'>&copy; Copyright2023 the Fashion house gallary bangladesh</p>
        </div>
        </>
    );
};

export default Summary;
