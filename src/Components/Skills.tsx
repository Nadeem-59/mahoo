import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2  gap-20 items-center'>
          <h2 className='text-4xl md:text-5xl '>Technologies I work with</h2>
          <p className='text-yellow-300 pt-2'>
            I have a solid foundation in Web Development,specializing in HTML,CSS and JavaScript.My experience
             extends to using frameworks like React and Next.js to create dynamic and user-friendly
              applications.I m also a proficient in technologies to enhance my skill set and contibute
               effeciently to projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-pink-700 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2>Typescript</h2>
              <h2>React.js</h2>
              <h2>Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2>Tailwind</h2>
              <h2>CSS</h2>
              <h2>Node.js</h2>
            </div>
          </div>
        </div>
      </div>
        
    
  )
}

export default Skills