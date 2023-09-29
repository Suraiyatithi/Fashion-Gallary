import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [
  {
    name: 'Sept 1st',
    sale: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sept 10',
    sale: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Sept 15',
    sale: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Sept 20',
    sale: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Sept 22',
    sale: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sept 26',
    sale: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sept 30',
    sale: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
    const data2 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      
      const COLORS = ['#B5DE0F','#DFFF00', '#F6942B ', '#9FE2BF'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
  return (
    <>
    
     <div style={{ width: '100%', height: '400px' }} className=" lg:flex mt-12 relative">
     <ResponsiveContainer className='lg:w-2/3 ' style={{ width: '50%', height: '400px' }}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sale" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer className='lg:w-1/3  rounded-full ' width="50%" height="100%">
          <PieChart style={{height:"20rem",width:"20rem"}}>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={140}
              fill="#8884d8"
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
     
      
        </ResponsiveContainer>
        <div className="">
      <div className="absolute top-0 right-0 pl-3 pr-4 mt-12 rounded-full border border-[#DFFF00]">
      <h1 className=''>Profit</h1>
      </div>
      <div className="absolute top-0 right-0  pl-4 pr-4 mt-36 rounded-full border border-[#B5DE0F]">
      <h1>Cost</h1>
      </div>
      <div className="absolute top-0 right-0  pl-4 pr-4 border rounded-full border-[#F6942B]">
      <h1>Employee</h1>
      </div>
      <div className="absolute top-0 right-0 pl-4 pr-4 mt-24 rounded-full border border-[#9FE2BF]">
      <h1>Overall</h1>
      </div>
        
        </div>
     
   </div>
     </>
  );
};

Chart.demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw'; // Move it here

export default Chart;
