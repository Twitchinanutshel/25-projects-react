import React from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const NavButtons = () => {
  const linkClass = ({ isActive }) => (
    isActive
      ? 'text-3xl group underline underline-offset-8 decoration-violet-500'
      : 'text-3xl group hover:underline underline-offset-8'
  );

  return (
    <>
      <div className='absolute top-0 right-0 m-4'>
        <div className='flex items-center justify-center p-2 text-white bg-zinc-800 rounded-lg text-xl font-josefin'>
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
