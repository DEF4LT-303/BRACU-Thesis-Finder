import Link from 'next/link';

const Login = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className='flex justify-center h-screen'>
        <div
          className='hidden bg-cover lg:block lg:w-2/3'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
          }}
        >
          <div className='flex items-center h-full px-20 bg-gray-900 bg-opacity-40'>
            <div>
              <Link href='/'>
                <h2 className='text-2xl font-bold text-white sm:text-3xl'>
                  BRACU Thesis Finder
                </h2>
              </Link>

              <p className='max-w-xl mt-3 text-gray-300'>
                Dive into the community and find the perfect group for your
                thesis!
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
          <div className='flex-1'>
            <div className='text-center'>
              <div className='flex justify-center mx-auto '>
                <svg
                  id='Layer_1'
                  data-name='Layer 1'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 610.59 625.19'
                  className='w-20 h-20 text-blue-500 fill-current'
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
              </div>

              <p className='mt-3 text-gray-500 dark:text-gray-300'>
                Login to create your account
              </p>
            </div>

            <div className='mt-8'>
              <form>
                <div className='mt-6'>
                  <div>
                    <label
                      for='email'
                      className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='johndoe@example.com'
                      required
                      className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>
                </div>

                <div className='mt-6'>
                  <div className='flex justify-between mb-2'>
                    <label
                      for='password'
                      required
                      className='text-sm text-gray-600 dark:text-gray-200'
                    >
                      Password
                    </label>
                    <a
                      href='#'
                      className='text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline'
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Your Password'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div className='mt-6'>
                  <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                    Sign in
                  </button>
                </div>
                <div className='divider'>OR</div>
                <button className='btn w-full bg-inherit border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200  hover:text-slate-900 dark:hover:text-slate-300 dark:hover:bg-slate-700'>
                  {/* <span className='loading loading-spinner'></span> */}
                  <img
                    className='w-6 h-6'
                    src='https://www.svgrepo.com/show/475656/google-color.svg'
                    loading='lazy'
                    alt='google logo'
                  ></img>
                  Login with Google
                </button>
              </form>

              <p className='mt-6 text-sm text-center text-gray-400'>
                Don't have an account yet?{' '}
                <Link
                  href='/register'
                  className='text-blue-500 focus:outline-none focus:underline hover:underline'
                >
                  Sign Up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
