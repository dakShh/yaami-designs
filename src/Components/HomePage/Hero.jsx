import React from 'react'

import hero1 from '../../assets/hero/hero-1.jpg'
import hero2 from '../../assets/hero/hero-2.jpg'
import hero3 from '../../assets/hero/hero-3.jpg'
import hero4 from '../../assets/hero/hero-4.jpg'

// import required modules
import { Autoplay, Scrollbar, Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import Header from '../Header'
import clsx from 'clsx'
import PrimaryButton from '../Buttons/primary-button'
import { useNavigate } from 'react-router-dom'

const Hero = (props) => {
  const { handleModal } = props

  const navigate = useNavigate()
  return (
    <div className='h-screen w-full relative overflow-hidden'>
      <Header />
      <div className=''>
        <div
          className={clsx(
            'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20',
            'xl:text-6xl md:text-5xl text-4xl font-extrabold',
            'text-white',
            'sm:whitespace-nowrap',
            'w-full max-w-xs sm:max-w-7xl lg:max-w-none sm:w-auto ',
            'text-left lg:text-left',
            'flex flex-col items-left lg:block'
          )}
        >
          <div data-aos='fade-right' data-aos-delay='400' className='mb-3'>
            WE HELP YOU
          </div>
          <div data-aos='fade-right' data-aos-delay='500' className='mb-5'>
            MAKE MODERN INTERIOR
          </div>
          <div
            className='mb-10 w-full sm:w-auto whitespace-normal text-left lg:text-left font-light text-xl max-w-md '
            data-aos='fade-right'
            data-aos-delay='700'
          >
            Our team of experienced designers and decorators are passionate about creating beautiful
            homes.
          </div>
          <div data-aos='fade-right' data-aos-delay='800'>
            <PrimaryButton
              onClick={() => {
                handleModal()
              }}
              content={'Get a quote'}
            />
          </div>
        </div>
        <div data-aos='zoom-out' data-aos-duration='1500'>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false
            }}
            navigation={true}
            // Autoplay
            modules={[Autoplay, Scrollbar, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='h-screen flex justify-center items-center w-full relative'>
                <div className='w-full h-full bg-black/70 z-40 absolute'></div>
                <img src={hero2} alt='' className='h-full object-cover w-full '></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-screen flex justify-center items-center w-full  relative'>
                <div className='w-full h-full bg-black/70 z-40 absolute'></div>
                <img src={hero3} alt='' className='h-full object-cover w-full '></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-screen flex justify-center items-center w-full relative'>
                <div className='w-full h-full bg-black/70 z-40 absolute'></div>
                <img src={hero4} alt='' className='h-full object-cover w-full '></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Hero
