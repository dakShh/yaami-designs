import clsx from 'clsx'
import React from 'react'

const HomepageCard = (props) => {
  const { key, imgSrc, title, windowWidth, serviceList, id } = props

  const ANIMATION_DELAY = ['500', '600', '700']

  return (
    <div
      key={key}
      data-aos='fade-right'
      data-aos-delay={ANIMATION_DELAY[id]}
      data-aos-duration='2300'
      className={clsx('bg-neutral-800 rounded-2xl shadow overflow-hidden', 'shadow-xl')}
    >
      <img className='flex object-cover object-center h-56 lg:h-80 w-full' src={imgSrc} alt='' />
      <div className='px-5 pt-2 lg:pb-5 pb-3 text-white'>
        <h5 className='text-2xl font-bold mb-4'>{title}</h5>
        <ul className='list-disc pl-5 space-y-2'>
          {serviceList.map((service, index) => (
            <li key={index} className='text-sm text-white/40'>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomepageCard
