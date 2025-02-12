import React from 'react'

import clsx from 'clsx'
import Header from '../Components/Header'
import Banner1 from '../assets/about/banner-2.jpg'
import PrimaryButton from '../Components/Buttons/primary-button'

import { FaPaintBrush } from 'react-icons/fa'
import { BiMessageCheck } from 'react-icons/bi'
import { FaHandshake } from 'react-icons/fa'
import { companyStats } from '../Utils/data'
import Footer2 from '../Components/Footer2'

const AboutUs = () => {
  return (
    <div className='bg-secondary relative w-full'>
      <Header />

      <div
        data-aos='fade-down'
        data-aos-delay='400'
        style={{
          backgroundImage: `url(${Banner1})`,
          backgroundPositionY: '25%',
          backgroundPositionX: '30%'
        }}
        className={clsx('relative', 'h-[250px]', 'flex flex-col justify-center items-center', 'mb-5')}
      >
        <div className='w-full h-full bg-black/70 absolute'></div>

        <div
          className='font-extrabold  xl:text-5xl text-2xl  z-[1] mt-10 lg:mt-0 text-center mb-3'
          data-aos='fade-down'
          data-aos-delay='200'
        >
          About us
        </div>
      </div>
      <div className='container mx-auto px-5 sm:px-0 min-h-screen mb-20'>
        <section>
          <div
            className='mb-7 w-full'
            data-aos='fade-down'
            data-aos-delay='400'
            data-aos-duration='1200'
          >
            <div
              className={clsx(
                'z-[100] relative',
                'container mx-auto',
                'grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-6',
                'py-10 px-5 w-full my-20',
                'bg-neutral-800 text-white',
                'drop-shadow-md'
              )}
            >
              {companyStats.map((stat, index) => {
                return (
                  <div
                    key={index}
                    className={clsx(
                      'flex flex-col lg:flex-row gap-x-1',
                      'text-center items-center lg:text-left lg:items-start'
                    )}
                  >
                    <div
                      data-aos='fade-up'
                      data-aos-delay='500'
                      className='font-extrabold text-5xl md:text-6xl'
                    >
                      {stat.value}
                    </div>
                    <div
                      data-aos='fade-up'
                      data-aos-delay='700'
                      className='max-w-[80px] text-sm text-white/60 font-extralight py-2'
                    >
                      {stat.title}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section
          data-aos='fade-up'
          data-aos-delay='400'
          data-aos-duration='1300'
          className='border-b border-white/40 pb-8 gap-8 items-center'
        >
          <div className='flex flex-col md:flex-row justify-center gap-x-10 text-md'>
            <p className='mb-4'>
              With over a decade of experience in interior design, We have had the privilege of
              transforming countless spaces into beautiful, functional homes. My passion for design
              started early, and Ive honed my skills through years of study and hands-on experience.
            </p>
            <p className='mb-4'>
              At Yaami Designs, I believe that every space has the potential to be extraordinary. My
              approach combines creativity with practicality, ensuring that each design not only looks
              stunning but also enhances the way you live.
            </p>
          </div>
        </section>

        <section className=''>
          <h2
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-duration='1200'
            className='text-3xl font-bold my-10 text-center'
          >
            Why Choose Yaami Designs?
          </h2>
          <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-6'>
            <div>
              <div
                data-aos='fade-up'
                data-aos-delay='600'
                data-aos-duration='1200'
                className='p-6 flex flex-col items-center text-center'
              >
                <FaPaintBrush className='h-12 w-12 mb-4 text-5xl' />
                <h3 className='font-bold mb-2 text-2xl'>Design That Speaks to You</h3>
                <p className='text-sm text-white/60'>
                  Every corner of your space deserves attention. We take a holistic approach, considering
                  everything from colors and textures to layout and lighting. Our goal? To create a
                  cohesive look that feels effortlessly put together and truly reflects your lifestyle.
                </p>
              </div>
            </div>
            <div>
              <div
                data-aos='fade-up'
                data-aos-delay='700'
                data-aos-duration='1200'
                className='p-6 flex flex-col items-center text-center'
              >
                <BiMessageCheck className='h-12 w-12 mb-4 text-5xl' />
                <h3 className='font-bold mb-2 text-2xl'>Communication Is Key</h3>
                <p className='text-sm text-white/60'>
                  We believe that good design starts with great conversations. You’ll be involved in the
                  process every step of the way—no surprises here! We keep you in the loop and welcome
                  your ideas, ensuring that the final result is a space you’ll absolutely love.
                </p>
              </div>
            </div>
            <div>
              <div
                data-aos='fade-up'
                data-aos-delay='800'
                data-aos-duration='1200'
                className='p-6 flex flex-col items-center text-center'
              >
                <FaHandshake className='h-12 w-12 mb-4 text-5xl' />
                <h3 className='font-bold mb-2 text-2xl'>A Friendly Team</h3>
                <p className='text-sm text-white/60'>
                  We’re more than just designers; we’re your partners in this journey! Communication is
                  key, and we love keeping the conversation going. You’ll always know what’s happening,
                  and your input will shape the process every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className='mt-32 text-center '
          data-aos='fade-up'
          data-aos-delay='600'
          data-aos-duration='1200'
        >
          <h2 className='text-2xl font-semibold mb-4'>Ready to Transform Your Space?</h2>
          <p className='mb-6'>
            {` Let's create a home that reflects your personality and meets your needs.`}
          </p>
          <PrimaryButton size='lg' content={'Contact us'} />
        </section>
      </div>
      <Footer2 />
    </div>
  )
}

export default AboutUs
