import React from 'react';

const Progress = () => {
    const violetColor = "#8B5CF6";
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-12 '>
            <div className=" p-8 border border-violet-200 rounded">
                <p className='text-xl'> Numer of Sale</p>
                <h1 className='text-4xl text-fuchsia-950 '>$3100</h1>
            <progress className="progress progress-violet-300 w-56" value="90" max="100" style={{
            
            background: `linear-gradient(90deg, ${violetColor} 0%, #6366F1 100%)`,
          }} ></progress>
            </div>
            <div className="p-8 border border-violet-200 rounded">
            <p className='text-xl'>Latest revenue</p>
                <h1 className='text-4xl text-fuchsia-950 '>$10000</h1>
            <progress   className="progress progress-pink-800 w-56 text-pink-800" value="50" max="100"  style={{
            
              background: `linear-gradient(90deg, ${violetColor} 0%, #6366F1 100%)`,
            }} ></progress>

            </div>
            <div className="p-8 border border-violet-200 rounded">
            <p className='text-xl'>Total Sale</p>
                <h1 className='text-4xl text-fuchsia-950 '>$320000</h1>
            <progress className="progress progress-violet-300 w-56" value="70" max="100"
            style={{
            
                background: `linear-gradient(90deg, ${violetColor} 0%, #6366F1 100%)`,
              }} ></progress>
        
            </div>
            <div className="p-8 border border-violet-200 rounded">
            <p className='text-xl'>Proft By sale</p>
                <h1 className='text-4xl text-fuchsia-950 '>$1200800</h1>
            <progress className="progress progress-violet-300 w-56" value="90" max="100"
            style={{
            
                background: `linear-gradient(90deg, ${violetColor} 0%, #6366F1 100%)`,
              }} ></progress>
        
            </div>
        </div>
    );
};

export default Progress;