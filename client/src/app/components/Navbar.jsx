'use client';

import { logout } from '@/api/redux/userRedux';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
            <div className='flex-1 lg:px-2 lg:mx-0 gap-3 text-xs lg:text-base'>
              <Link href='/'>
                <svg
                  id='Layer_1'
                  data-name='Layer 1'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 610.59 625.19'
                  className='w-6 h-6 text-blue-500 fill-current'
                >
                  <rect
                    className='cls-1'
                    x='273.81'
                    y='77.73'
                    width='63.48'
                    height='546.96'
                  />
                  <polygon
                    className='cls-1'
                    points='519.61 .5 456.13 63.98 545.9 63.98 609.38 .5 519.61 .5'
                  />
                  <polygon
                    className='cls-1'
                    points='320.02 63.98 383.5 .5 296.31 .5 296.31 .5 141.18 .5 64.69 .5 1.21 63.98 79.64 63.98 79.64 63.98 230.25 63.98 230.25 63.98 320.02 63.98'
                  />
                  <polygon
                    className='cls-1'
                    points='486.01 .5 486.01 .5 396.24 .5 332.76 63.98 353.32 63.98 353.32 63.98 443.09 63.98 506.57 .5 486.01 .5'
                  />
                </svg>
              </Link>
              BRACU Thesis Finder
            </div>
            <div className='flex-none'>
              {user ? (
                <ul className='menu menu-horizontal flex items-center'>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                  <li>
                    <Link href='/profile'>
                      <div className='avatar'>
                        <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                          <img src={user.photo || '/default.jpg'} />
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className='menu menu-horizontal flex items-center'>
                  <li>
                    <Link href='/login'>Login</Link>
                  </li>
                  <li>
                    <Link href='/register'>Signup</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className='drawer-side z-50 '>
          <label
            htmlFor='my-drawer-3'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <div className='flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto scrollbar-hide bg-neutral-content border-r rtl:border-r-0 rtl:border-l dark:bg-base-200 dark:border-gray-700'>
            <svg
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 610.59 625.19'
              className='w-10 h-10 text-blue-500 fill-current'
            >
              <rect
                className='cls-1'
                x='273.81'
                y='77.73'
                width='63.48'
                height='546.96'
              />
              <polygon
                className='cls-1'
                points='519.61 .5 456.13 63.98 545.9 63.98 609.38 .5 519.61 .5'
              />
              <polygon
                className='cls-1'
                points='320.02 63.98 383.5 .5 296.31 .5 296.31 .5 141.18 .5 64.69 .5 1.21 63.98 79.64 63.98 79.64 63.98 230.25 63.98 230.25 63.98 320.02 63.98'
              />
              <polygon
                className='cls-1'
                points='486.01 .5 486.01 .5 396.24 .5 332.76 63.98 353.32 63.98 353.32 63.98 443.09 63.98 506.57 .5 486.01 .5'
              />
            </svg>

            <div className='flex flex-col justify-between flex-1 mt-6'>
              <nav className='flex-1 -mx-3 space-y-3 '>
                <Link
                  href='/'
                  className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                    />
                  </svg>

                  <span className='mx-2 text-md font-medium'>Home</span>
                </Link>

                <Link
                  className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                  href='/feeds'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
                    />
                  </svg>

                  <span className='mx-2 text-md font-medium'>Feeds</span>
                </Link>

                {user && (
                  <Link
                    className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    href='/profile'
                  >
                    <svg
                      className='w-6 h-6 text-gray-800 dark:text-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 18'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        d='M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z'
                      />
                    </svg>

                    <span className='mx-2 text-md font-medium'>Profile</span>
                  </Link>
                )}

                <Link
                  className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                  href='/users'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                    />
                  </svg>

                  <span className='mx-2 text-md font-medium'>Users</span>
                </Link>

                <Link
                  className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                  href='/settings'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>

                  <span className='mx-2 text-md font-medium'>Setting</span>
                </Link>
              </nav>

              <div className='mt-6'>
                <div className='p-3 bg-gray-100 rounded-lg dark:bg-gray-800'>
                  <h2 className='text-sm font-medium text-gray-800 dark:text-white'>
                    Features Under Development
                  </h2>

                  <p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>
                    Functional features will be impleneted eventually
                  </p>

                  <img
                    className='object-cover w-full h-32 mt-2 rounded-lg'
                    src='https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80'
                    alt=''
                  />
                </div>

                {user && (
                  <div className='flex items-center justify-between mt-6'>
                    <a href='#' className='flex items-center gap-x-2'>
                      <img
                        className='object-cover rounded-full h-7 w-7'
                        src={user.photo || '/default.jpg'}
                        alt='avatar'
                      />
                      <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
                        {user.firstName} {user.lastName}
                      </span>
                    </a>

                    <button
                      onClick={handleLogout}
                      className='text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
