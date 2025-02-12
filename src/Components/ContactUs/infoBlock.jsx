import React from 'react'

const InfoBlock = ({ icon, title, description, id }) => {
  const DELAY = ['600', '700', '800']
  return (
    <div
      data-aos='fade-up'
      data-aos-delay={DELAY[id]}
      data-aos-duration='1000'
      className='flex flex-col items-center text-3xl font-medium'
    >
      {icon && icon}
      <div className='font-bold mb-2 text-2xl text-center'>{title}</div>
      <p className='text-sm text-center font-light text-white/60'>{description}</p>
    </div>
  )
}

export default InfoBlock
