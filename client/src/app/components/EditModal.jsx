const EditProfileModal = ({ isOpen, handleCloseModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      handleCloseModal();
    }
  };

  return (
    <div
      className={isOpen ? 'fixed inset-0 z-10 overflow-y-auto' : 'hidden'}
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
      onClick={handleBackdropClick}
    >
      <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <span
          className='hidden sm:inline-block sm:h-screen sm:align-middle'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <div className='relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-base-200 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle'>
          <h3
            className='text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white'
            id='modal-title'
          >
            Edit Profile
          </h3>

          <form className='mt-6'>
            <div>
              <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                Username
              </label>
              <input
                type='username'
                name='username'
                id='username'
                placeholder='Username'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-inherit dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div>
              <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                First Name
              </label>
              <input
                type='firstName'
                name='firstName'
                id='firstName'
                placeholder='First Name'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-inherit dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div>
              <label className='block mt-5 mb-2 text-sm text-gray-600 dark:text-gray-200'>
                Last Name
              </label>
              <input
                type='lastName'
                name='lastName'
                id='lastName'
                placeholder='Last Name'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-inherit dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
          </form>

          <div className='flex flex-row justify-between'>
            <button
              type='button'
              onClick={handleCloseModal}
              className='mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
              <span className='mx-2'>Close</span>
            </button>

            <button
              type='button'
              className='mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500'
            >
              <span className='mx-2'>Save</span>
              <svg
                class='w-4 h-4 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
