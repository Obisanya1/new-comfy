import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
      <h1 className='text-4xl font-bold leading-none tracking-light sm:text-6xl'>
We Love You
      </h1>
      <div className="stats bg-primary shadow">
        <div className="stat">
          <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>Comfy</div>
        </div>
      </div>
    </div>
    <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti enim amet, eius nobis beatae nam sequi. Reprehenderit rerum molestiae doloribus aperiam, eveniet officia quos corporis beatae, corrupti fugiat tenetur.</p>
    </>
  )
}

export default About
