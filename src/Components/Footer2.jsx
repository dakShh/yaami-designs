import React from 'react'
import clsx from 'clsx'

import { useNavigate } from 'react-router-dom'

import Logo from './logo'

import logoDark from '../assets/logo/logo-white-transparent.png'

const Footer2 = () => {
  const navigate = useNavigate()
  return (
    <footer className='bg-secondary'>
      <div className='container w-full mx-auto p-4 md:py-8  '>
        <div
          data-aos='fade-up'
          data-aos-delay='400'
          data-aos-duration='800'
          className={clsx(
            'gap-y-4 sm:gap-0',
            ' flex flex-col sm:flex-row items-center ',
            ' sm:flex sm:items-center sm:justify-between'
          )}
        >
          <Logo />
          <ul
            className={clsx(
              'flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'
            )}
          >
            <li>
              <div onClick={() => navigate('/')} className='hover:underline cursor-pointer me-4 md:me-6'>
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => navigate('/portfolio')}
                className='hover:underline cursor-pointer me-4 md:me-6'
              >
                Portfolio
              </div>
            </li>
            <li>
              <div
                onClick={() => navigate('/about-us')}
                className='hover:underline cursor-pointer me-4 md:me-6'
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={() => navigate('/contact-us')}
                className='hover:underline cursor-pointer me-4 md:me-6'
              >
                Contact
              </div>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        {/* <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a href='https://flowbite.com/' className='hover:underline'>
            Flowbite™
          </a>
          . All Rights Reserved.
        </span> */}
      </div>
    </footer>
  )
}

export default Footer2
