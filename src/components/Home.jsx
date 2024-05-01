import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-center mt-40'>
      <div className='grid grid-cols-5 gap-y-10 gap-x-20 text-white text-2xl font-semibold'>
        <Link to='/accordion' className='underline underline-offset-4 hover:decoration-violet-500 hover:text-violet-300'>Accordion</Link>
      </div>
    </div>
  );
};

export default Home;
