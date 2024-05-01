import React from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const NavButtons = () => {
  const linkClass = ({ isActive }) => (
    isActive
      ? 'text-3xl p-4 group underline underline-offset-8 decoration-violet-500'
      : 'text-3xl p-4 group hover:underline underline-offset-8'
  );

  return (
    <>
      <div className='absolute top-0 right-0 mr-4'>
        <div className='flex space-x-2 text-white text-xl font-josefin'>
          <NavLink
            to='/'
            className={linkClass}
          >Home
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default NavButtons
