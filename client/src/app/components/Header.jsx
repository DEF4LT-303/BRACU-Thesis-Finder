import Link from 'next/link';

const Header = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage:
          'url(https://static.dezeen.com/uploads/2020/03/brac-university-campus-woha-architecture-urbanism-banglades_dezeen_2364_hero.jpg)'
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left text-slate-300'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Looking to complete your thesis? Find your groupmates with similar
            interest here! Create event to recruit memebers or join an existing
            group.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <Link
                  href='/register'
                  className='label-text-alt link link-hover'
                >
                  Don't have an account? Sign Up Here!
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
            <div className='divider'>OR</div>
            <button className='btn bg-inherit border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200  hover:text-slate-900 dark:hover:text-slate-300'>
              {/* <span className='loading loading-spinner'></span> */}
              <img
                class='w-6 h-6'
                src='https://www.svgrepo.com/show/475656/google-color.svg'
                loading='lazy'
                alt='google logo'
              ></img>
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
