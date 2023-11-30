'use client';

import EditProfileModal from '@/app/components/EditModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser?.user);
  const loading = false;

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (loading) {
    return (
      <section class='bg-white dark:bg-base-100'>
        <div class='px-6 py-8 mx-auto animate-pulse'>
          <div class='flex justify-center sm:justify-start text-center'>
            <p class='w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600'></p>
          </div>

          <hr class='my-6 border-gray-200 md:my-10 dark:border-gray-700' />

          <div class='flex flex-col gap-3 sm:items-start sm:justify-start items-center justify-center '>
            <p class='w-24 h-2 bg-gray-200 rounded-lg dark:bg-gray-700'></p>

            <p class='w-64 h-2 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
            <p class='w-64 h-2 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className='relatiive'>
        {openModal && (
          <EditProfileModal
            isOpen={openModal}
            handleCloseModal={handleCloseModal}
          />
        )}
        <img
          src='https://t3.ftcdn.net/jpg/05/78/94/94/360_F_578949486_IUFDkbOIhPmDkiKwCNvG7oOAtP9sNvO6.jpg'
          alt='background'
          className='px-5 py-5 h-[200px] w-full bg-center bg-cover contrast-75 filter relative'
        />

        <div className='mx-auto mt-8'>
          <div className='flex flex-col sm:flex-row gap-2 items-center px-5 ml-5 mt-[-105px]'>
            <div className='w-20 h-20 z-0 rounded-full overflow-hidden ring ring-offset-2 ring-offset-primary '>
              <img
                src={user?.avatar || '/default.jpg'}
                alt='avatar'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col sm:flex-row w-full justify-center items-center sm:justify-between gap-1 ml-2 mt-2 sm:mt-10'>
              <div className='text-white font-bold text-xl'>
                {user?.firstName || 'User'}
              </div>
              <div className='flex flex-row gap-3 mt-6'>
                <div>
                  <button
                    className='btn btn-primary w-32'
                    onClick={handleOpenModal}
                  >
                    Edit Profile
                  </button>
                </div>
                <div>
                  <button className='btn btn-primary w-32'>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='my-6 mx-5 border-gray-200 md:my-10 dark:border-gray-700' />

        <div className='text-center mb-10'>
          <h1 className='text-2xl font-bold'>Profile</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
