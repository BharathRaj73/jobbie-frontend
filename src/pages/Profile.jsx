import React, { useState } from 'react';
import Alert from '../components/Alert';

import { useAppContext } from '../context/appContext';
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastname);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      // test and remove temporary
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <div className='bg-red-500 p-5'>
      <div className='bg-green-500 p-20 w-[60%] mx-auto'>
        <h1>Profile</h1>
        {showAlert && <Alert />}
        <form
          className='flex justify-between flex-wrap'
          onSubmit={handleSubmit}
        >
          <div>
            <label>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
            />
          </div>

          <div>
            <label>LastName</label>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type='text'
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
            />
          </div>
          <button
            className='bg-pink-500 w-full p-2 rounded-md'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
