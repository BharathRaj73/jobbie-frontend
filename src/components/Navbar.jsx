import React from 'react';
const Navbar = () => {
  return (
    <div className='flex items-center bg-[#f6f8fc] w-screen justify-center gap-20 p-4'>
      <div className='bg-[#eaf1fb] p-2 rounded-xl'></div>
      <button>Logout</button>
    </div>
  );
};

export default Navbar;
