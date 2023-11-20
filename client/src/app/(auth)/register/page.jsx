'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../api/redux/apiCalls';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { isFetching, error } = useSelector((state) => state.user);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Check if any field is empty
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === ''
    ) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      setOpenSnackbar(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setOpenSnackbar(true);
      return;
    }

    try {
      await register(dispatch, { firstName, lastName, email, password });
      // dispatch(logout());
      setErrorMessage('Registration successful');
      setOpenSnackbar(true);
      router.push('/login');
      // setTimeout(() => {
      //   history.push('/login');
      // }, 3000);
    } catch (error) {
      if (error.message === 'Email already exists') {
        setErrorMessage('Email already exists');
      } else {
        setErrorMessage('An error occurred during registration');
      }
      setOpenSnackbar(true);
    }
  };

  const user = useSelector((state) => state.user.currentUser);

  // if (user) {
  //   router.push('/');
  // }

  const isFieldEmpty = (value) => {
    return value.trim() === '' && submitted;
  };

  return (
    <section class=''>
      <div class='flex justify-center min-h-screen'>
        <div
          class='hidden bg-cover lg:block lg:w-2/5 relative'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"
          }}
        >
          <div class='absolute inset-0 bg-gray-900 opacity-30'></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <Link href='/'>
              <svg
                id='Layer_1'
                data-name='Layer 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 610.59 625.19'
                className=' w-36 text-blue-500 fill-current stroke-black stroke-3'
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
          </div>
        </div>

        <div class='flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5'>
          <div class='w-full'>
            <h1 class='text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white'>
              Create Account
            </h1>

            <p class='mt-4 text-gray-500 dark:text-gray-400'>
              Create your account to get registered and start exploring.
            </p>

            <form class='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
              <div>
                <label class='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                  First Name
                </label>
                <input
                  type='text'
                  placeholder='John'
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  class='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-inherit dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                />
              </div>

              <div>
                <label class='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                  Last name
                </label>
                <input
                  type='text'
                  placeholder='Doe'
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  class='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-inherit dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                />
              </div>

              <div className='md:col-span-2'>
                <label class='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                  Email address
                </label>
                <input
                  type='email'
                  placeholder='johndoe@example.com'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  class='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-inherit dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                />
              </div>

              <div>
                <label class='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                  Password
                </label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  class='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-inherit dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                />
              </div>

              <div>
                <label class='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                  Confirm password
                </label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  class='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 bg-inherit dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                />
              </div>

              <button
                onClick={handleRegister}
                class='flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
              >
                <span>Sign Up </span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-5 h-5 rtl:-scale-x-100'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>
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
            <div className='flex justify-start mx-1'>
              <p className='mt-6 text-sm text-center text-gray-400'>
                Already have an account?{' '}
                <Link
                  href='/login'
                  className='text-blue-500 focus:outline-none focus:underline hover:underline'
                >
                  Log In
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
