import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-center items-center mt-36 '>
      <div className='grid grid-cols-5 gap-y-10 text-white text-2xl font-semibold'>
        <Link to='/accordion' className='underline underline-offset-4 hover:decoration-violet-500 hover:text-violet-300  w-max'>Accordion</Link>
        <Link to='/random-color-generator' className='underline underline-offset-4 hover:decoration-violet-500 hover:text-violet-300  w-max'>Random Color Generator</Link>
      </div>
    </div>
  );
};

export default Home;
