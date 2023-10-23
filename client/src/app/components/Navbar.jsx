import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';

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
            <div className='flex-1 lg:px-2 lg:mx-0 gap-3 text-xs lg:text-base'>
              <svg
                id='Layer_1'
                data-name='Layer 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 610.59 625.19'
                className='w-5 h-5 text-blue-500 fill-current'
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
              BRACU Thesis Finder
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
        <div className='drawer-side z-50'>
          <label
            htmlFor='my-drawer-3'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base text-justify'>
            {/* Sidebar content here */}
            <div className='divider my-2'></div>
            <li className=''>
              <a>
                <HomeIcon />
                Homepage
              </a>
            </li>
            <div className='divider my-2'></div>
            <li className=''>
              <a>
                <ChatIcon />
                Feeds
              </a>
            </li>
            <div className='divider my-2'></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
