import AmazonSeller from "../../assets/images/amazon-seller.png";
import React from "react";
import Styles from "./style.module.scss";

const SignIn = () => {
  return (
    <div className='min-h-full flex'>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div className=''>
            <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
              Welcome back! ✨
            </h2>
          </div>

          <div className='mt-8'>
            <div className='mt-6'>
              <form action='#' method='POST' className='space-y-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email address
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Password
                  </label>
                  <div className='mt-1'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <a
                      href='#'
                      className={`font-medium text-gray-600 hover:text-gray-900 ${Styles.underline}`}
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
              <p className='mt-2 text-sm text-gray-600'>
                Don't you have an account?{" "}
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Sign Up
                </a>
              </p>

              {/* Popover starts here */}
              <div className='rounded-md bg-yellow-100 p-4 mt-6'>
                <div className='flex'>
                  <div className='ml-3'>
                    <div className='text-sm leading-[22px] text-[#D97706]'>
                      <p>
                        ✓ To support you during the pandemic super pro features
                        are free until March 31st.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Popover ends here */}
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block relative w-0 flex-1 h-screen'>
        <img
          className={`absolute inset-0 object-cover`}
          src={AmazonSeller}
          alt=''
        />
      </div>
    </div>
  );
};

export default SignIn;
