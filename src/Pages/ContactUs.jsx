import React from 'react'
import clsx from 'clsx'
import Header from '../Components/Header'

import Banner1 from '../assets/contact/banner-3.jpg'

import { useForm } from 'react-hook-form'
import PrimaryButton from '../Components/Buttons/primary-button'
import Footer2 from '../Components/Footer2'

import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { MdOutlineContactSupport } from 'react-icons/md'
import InfoBlock from '../Components/ContactUs/infoBlock'
import Input from '../Components/Input/input'

const ContactUs = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      number: ''
    }
  })

  const onSubmit = (values) => {
    console.log('values: ', values)
  }

  const INFO_BLOCK_CONTENT = [
    {
      icon: <MdEmail className={'h-12 w-12 mb-4 text-5xl'} />,
      title: 'Email us',
      description:
        'Have a project in mind or need more information about our interior design services? Send us an email, and we’ll be happy to assist.'
    },
    {
      icon: <IoCall className={'h-12 w-12 mb-4 text-5xl'} />,
      title: 'Speak with Us',
      description:
        'Want to discuss your design ideas or need a quick consultation? Give us a call to connect directly with our team. We’re here to provide personalized advice and guidance for your space.'
    },
    {
      icon: <MdOutlineContactSupport className={'h-12 w-12 mb-4 text-5xl'} />,
      title: 'Customer support',
      description:
        'For ongoing projects, technical assistance, or other inquiries, visit our support center. Explore FAQs, design tips, or submit a ticket for specialized help from our team.'
    }
  ]

  return (
    <div className='bg-secondary'>
      <Header />
      <div
        data-aos='zoom-in-up'
        data-aos-delay='400'
        style={{
          backgroundImage: `url(${Banner1})`,
          backgroundPositionY: '44%',
          backgroundPositionX: '30%',
          backgroundRepeat: 'repeat'
        }}
        className={clsx('relative', 'h-[250px]', 'flex flex-col justify-center items-center', 'mb-5')}
      >
        <div className='w-full h-full bg-black/70 absolute'></div>

        <div
          className='font-extrabold  xl:text-5xl text-2xl  z-[1] mt-10 lg:mt-0 text-center mb-3'
          data-aos='fade-down'
          data-aos-delay='200'
        >
          Contact us
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-delay='700'
        data-aos-duration='1800'
        className='container mx-auto mt-20 z-50 relative px-8 sm:px-0 '
      >
        <div className='mx-auto max-w-xl bg-neutral-800 shadow-xl py-10 px-12 rounded-xl'>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-8'>
            <div>
              <label
                htmlFor='number'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Name
              </label>
              <Input
                name='name'
                register={form.register}
                options={{
                  required: 'Please enter your name',
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters long'
                  }
                }}
                placeholder={'Eg: Daksh Khatri'}
                autoComplete='off'
                errorMessage={form.formState?.errors?.name?.message}
              />
            </div>
            <div>
              <label
                htmlFor='number'
                className=' block mb-2 text-sm font-medium text-gray-900 dark:text-white '
              >
                Number
              </label>
              <Input
                name='number'
                register={form.register}
                options={{
                  required: 'Phone number is required',
                  pattern: {
                    value: /^\d{10}$/, // E.164 international format or 10-digit format without country code
                    message: 'Please enter a valid phone number'
                  }
                }}
                placeholder='+91-8888888888'
                autoComplete='off'
                type={'number'}
                errorMessage={form.formState?.errors?.number?.message}
              />
            </div>
            <div className=' mx-auto'>
              <PrimaryButton type='submit' content={'Submit'} />
            </div>
          </form>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 my-24 gap-16 px-4'>
          {INFO_BLOCK_CONTENT?.map((content, index) => (
            <InfoBlock
              key={index}
              id={index}
              icon={content.icon}
              title={content.title}
              description={content.description}
            />
          ))}
        </div>
        <Footer2 />
      </div>
    </div>
  )
}

export default ContactUs
