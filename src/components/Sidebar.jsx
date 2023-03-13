import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosStats } from 'react-icons/io';
import { GiSuitcase } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';

const sidebarInfo = [
  { name: 'Stats', icon: <IoIosStats />, path: '/dashboard' },
  { name: 'Jobs', icon: <GiSuitcase />, path: '/dashboard/jobs' },
  { name: 'Profile', icon: <CgProfile />, path: '/dashboard/profile' },
];

const Sidebar = () => {
  const [open, isOpen] = useState(true);
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };
  return (
    <div
      className={`flex flex-col bg-[#f6f8fc]  p-3 h-screen 
      ${open ? 'w-[74px]' : 'w-[255px]'} duration-150`}
    >
      {/* for hamburger  */}

      <GiHamburgerMenu
        size={30}
        onClick={() => {
          isOpen(!open);
        }}
        className='cursor-pointer mb-5 mt-5 mx-auto'
      />

      {/* for all the different pages */}
      <div>
        {sidebarInfo.map((item, index) => {
          const { name, path, icon } = item;
          return (
            <Link key={index} to={path}>
              <div
                onClick={() => handleActive(index)}
                className={`flex items-center gap-4 overflow-hidden mb-5 hover:bg-[#eaf1fb] w-full rounded-xl p-2 ${
                  active === index ? 'bg-[#eaf1fb]' : ''
                }`}
              >
                <div className='text-4xl'>{icon}</div>
                <h1 className='text-xl'>{name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
