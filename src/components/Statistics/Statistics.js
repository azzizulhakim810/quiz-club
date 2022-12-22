import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Footer from '../Footer/Footer';


const Statistics = () => {

  const data = [
    {
      name: "React",
      total: 8,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "JavaScript",
      total: 9,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "CSS",
      total: 8,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Git",
      total: 11,
      pv: 9800,
      amt: 2290,
    },
  ];

  return (
    <div className='lift-up'>
      <div className='flex justify-center pt-32  w-8/12 mx-auto'>
      <div className='shadow-2xl p-16'>
      <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="total" stroke="#82AAE3" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
      </div>
      </div>
  <h1 className='text-2xl font-medium mt-12 pb-12'>Figure: The Total Number of Quizes according to the Courses</h1>

  <div className='pb-1'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Statistics;