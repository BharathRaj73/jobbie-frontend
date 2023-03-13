import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div className='flex flex-row bg-neutral-100  w-screen overflow-x-hidden'>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
