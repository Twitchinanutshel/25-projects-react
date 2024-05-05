import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-center items-center mt-36 text-white text-2xl gap-x-24'>
      <Link to='/accordion' className='underline underline-offset-8 hover:decoration-violet-500 hover:text-violet-300'>Accordion</Link>
      <Link to='/random-color-generator' className='underline underline-offset-8 hover:decoration-violet-500 hover:text-violet-300'>Random Color Generator</Link>
      <Link to='/star-rating' className='underline underline-offset-8 hover:decoration-violet-500 hover:text-violet-300'>Star Rating</Link>
      <Link to='/image-slider' className='underline underline-offset-8 hover:decoration-violet-500 hover:text-violet-300'>Image Slider</Link>
      <Link to='/load-more-button' className='underline underline-offset-8 hover:decoration-violet-500 hover:text-violet-300'>Load More Button</Link>

    </div>
  );
};

export default Home;
