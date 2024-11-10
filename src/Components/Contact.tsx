import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
       <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'> 
            <h2 className='text-4xl'data-aos="zoom-in-up">Get in touch</h2>
            <p className='text-pink-400 text-[18px] pt-2'data-aos="zoom-in-up">
                Drop me a line,Give me a call,or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center'>
                   abc@gmail.com
            </div>
            <div className='flex gap-3 items-center'>
                   021-9876544
            </div>
        </div>
        <div className='space-y-8'>
              <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name </label>
                    <input type='text'
                    className='h-{40px} bg-transparent border border-accent'
                    id='name'/>
              </div>
              <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email </label>
                    <input type='text'
                    className='h-{40px} bg-transparent border border-accent'
                    id='email'/>
              </div>
              <div className='flex flex-col gap-1'>
                    <label htmlFor='message'>Message </label>
                    <textarea
                    className=' bg-transparent border border-accent'
                    id='message'rows={8}>
                    </textarea>
              </div>
              <button className='bg-red-700 p-2 px-6'>send</button> 
        </div>
       </div> 
    </div>
  )
}

export default Contact