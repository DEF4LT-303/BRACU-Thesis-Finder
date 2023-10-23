import Link from 'next/link';

const Header = () => {
  return (
    // <div
    //   className='hero min-h-screen'
    //   style={{
    //     backgroundImage:
    //       'url(https://static.dezeen.com/uploads/2020/03/brac-university-campus-woha-architecture-urbanism-banglades_dezeen_2364_hero.jpg)'
    //   }}
    // >
    //   <div className='hero-overlay bg-opacity-60'></div>
    //   <div className='hero-content flex-col lg:flex-row-reverse'>
    //     <div className='text-center lg:text-left text-slate-300'>
    //       <h1 className='text-5xl font-bold'>Login now!</h1>
    //       <p className='py-6'>
    //         Looking to complete your thesis? Find your groupmates with similar
    //         interest here! Create event to recruit memebers or join an existing
    //         group.
    //       </p>
    //     </div>
    //     <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
    //       <form className='card-body'>
    //         <div className='form-control'>
    //           <label className='label'>
    //             <span className='label-text'>Email</span>
    //           </label>
    //           <input
    //             type='email'
    //             placeholder='email'
    //             className='input input-bordered'
    //             required
    //           />
    //         </div>
    //         <div className='form-control'>
    //           <label className='label'>
    //             <span className='label-text'>Password</span>
    //           </label>
    //           <input
    //             type='password'
    //             placeholder='password'
    //             className='input input-bordered'
    //             required
    //           />
    //           <label className='label'>
    //             <Link
    //               href='/register'
    //               className='label-text-alt link link-hover'
    //             >
    //               Don't have an account? Sign Up Here!
    //             </Link>
    //           </label>
    //         </div>
    //         <div className='form-control mt-6'>
    //           <button className='btn btn-primary'>Login</button>
    //         </div>
    //         <div className='divider'>OR</div>
    //         <button className='btn bg-inherit border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200  hover:text-slate-900 dark:hover:text-slate-300'>
    //           {/* <span className='loading loading-spinner'></span> */}
    //           <img
    //             class='w-6 h-6'
    //             src='https://www.svgrepo.com/show/475656/google-color.svg'
    //             loading='lazy'
    //             alt='google logo'
    //           ></img>
    //           Login with Google
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className='hero min-h-screen'>
      <div class='container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center'>
        <div class='w-full lg:w-1/2'>
          <div class='lg:max-w-lg'>
            <h1 class='text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl'>
              Find your thesis group or create one!
            </h1>
            <p class='mt-4 text-gray-600 dark:text-gray-300'>
              Get started by creating an event or browse the feed to find your
              perfect group.
            </p>
            <div class='grid gap-6 mt-8 sm:grid-cols-2'>
              <div class='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  class='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>

                <span class='mx-3'>Setup Your Profile</span>
              </div>

              <div class='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  class='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>

                <span class='mx-3'>Create Events</span>
              </div>

              <div class='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  class='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>

                <span class='mx-3'>Apply To Events</span>
              </div>

              <div class='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  class='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>

                <span class='mx-3'>Discuss In Threads</span>
              </div>

              <div class='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  class='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>

                <span class='mx-3'>Manage Timeline Phases</span>
              </div>

              <div class='flex items-center text-gray-800 -px-3 dark:text-gray-200'>
                <svg
                  class='w-5 h-5 mx-3'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 13l4 4L19 7'
                  />
                </svg>

                <span class='mx-3'>Complete Your Thesis</span>
              </div>
              <Link href='/login'>
                <button className='btn btn-primary w-full'>Sign In</button>
              </Link>
            </div>
          </div>
        </div>

        <div class='items-center justify-center w-full h-full lg:w-1/2 hidden lg:block md:block'>
          <img
            class='object-contain w-full h-full max-w-2xl'
            src='hero_icon.svg'
            alt='glasses photo'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
