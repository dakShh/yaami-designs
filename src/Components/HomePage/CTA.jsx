import React from 'react'

// ** Third party imports
import clsx from 'clsx'

// import Wave1 from '../../assets/svgs/waves-1.svg'
import PrimaryButton from '../Buttons/primary-button'
const CTA = () => {
  return (
    <section className='bg-secondary '>
      <div
        data-aos='fade-up'
        data-aos-delay='700'
        data-aos-duration='1300'
        className={clsx(
          'container mx-auto px-4',
          'gap-8 sm:items-center py-24 sm:py-40 mx-auto flex md:justify-between flex-col sm:flex-row'
        )}
      >
        <div
          data-aos='fade-up'
          data-aos-delay='700'
          data-aos-duration='1300'
          className='mt-4 md:mt-0 max-w-xl'
        >
          <h2 className='mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-white '>
            Customised services
          </h2>
          <p
            className={clsx(
              'sm:mb-6 font-light text-white text-sm md:text-md lg:text-lg',
              'max-w-sm md:max-w-md lg:max-w-full'
            )}
          >
            Can&apos;t find what you&apos;re looking for? We’ll design your home the way you like,
            keeping your needs and budget in mind.
          </p>
        </div>
        {/* <div>
          <PrimaryButton content='Get a quote' />
        </div> */}
      </div>
    </section>
  )
}

export default CTA
