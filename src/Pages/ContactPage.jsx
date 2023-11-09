import React from 'react'
import Footer from '../Components/Footer'
const ContactPage = () => {
  return (
   <>
   <div className='h-screen  '>
    <div className=''>
      <h2 className='text-3xl  font-serif flex justify-center mt-10 mb-10'>Contact Us</h2>
    </div>
    <div className='flex justify-center '>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8933707759847!2d77.49842070000001!3d28.75260040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1698848337004!5m2!1sen!2sin" 
    width="900"
    height="450"
    style={{border:0}}
    allowfullscreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade">

    </iframe>
    </div>
    <div className='flex justify-center  mt-10 mb-10'>
      <form className='flex flex-col w-96 rounded-lg bg-white mb-10'action='https://formspree.io/f/xjvqzkwv' method='post'>
        <input type="text" placeholder='Enter your name' name='Name' autoComplete='off' className='border-2 border-black p-2 m-2 rounded-md' />
        <input type="text" placeholder='Enter your Email' name='Email' className='border-2 border-black p-2  m-2 rounded-md' />
         <textarea name="message" id="" cols="30" rows="10"  placeholder='Enter your query' className='border-2 border-black p-2 m-2 rounded-md '></textarea>
         <div className='flex justify-center'>
         <button className='bg-purple-700 w-20 rounded-md text-white p-1 '>Submit</button>
         </div>
         
      </form>
    </div>
    <div className="flex-grow">
        {/* Content of your AboutPage */}
      </div>
   <div><Footer/></div>
   </div>
  
   </>
  )
   
   
}

export default ContactPage