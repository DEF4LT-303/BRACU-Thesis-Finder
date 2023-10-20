const Navbar = () => {
  return (
    <>
      <div className='drawer'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col'>
          {/* Navbar */}
          <div className='w-full navbar bg-base-300'>
            <div className='flex-none'>
              <label
                htmlFor='my-drawer-3'
                aria-label='open sidebar'
                className='btn btn-square btn-ghost'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-6 h-6 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </label>
            </div>
            <div className='flex-1 lg:px-2 lg:mx-2 gap-3 text-xs lg:text-base'>
              BRACU Thesis Finder
              <img
                src='https://seeklogo.com/images/B/brac-university-logo-30065B3714-seeklogo.com.png'
                alt='Logo'
                className='hidden lg:block lg:w-8 lg:h-8'
              />
            </div>
            <div className='flex-none'>
              <ul className='menu menu-horizontal flex items-center'>
                <li>
                  <a>Logout</a>
                </li>
                <li>
                  <div className='avatar'>
                    <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                      <img src='https://i.pinimg.com/originals/12/25/7c/12257c071a178a1bbe6ffab5863356cf.jpg' />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-3'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200'>
            {/* Sidebar content here */}
            <li>
              <a>
                <svg
                  className='w-6 h-6 text-gray-800 dark:text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9'
                  />
                </svg>
                Homepage
              </a>
            </li>
            <li>
              <a>
                <svg
                  class='w-6 h-6 text-gray-800 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                  />
                </svg>
                Sidebar Item 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
