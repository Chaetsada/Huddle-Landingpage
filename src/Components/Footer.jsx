import React, { useState } from 'react'
import logo from '../assets/logo-footer.svg'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [error,setError] = useState(false);
  const [input,setInput] = useState('')
  const checkEmail = (input) => {
      const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
      if(!regex.test(input.trim())){
        setError(!error);
      }else{
        return
      };
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    checkEmail(input)
  }
  const handleChange = (e) =>{
    setInput(e.target.value)
  }
  return (
    <div className='h-[80vh] p-10 bg-secondary-100 text-secondary-200 md:h-[40vh]'>
      <div className='container h-full flex flex-col items-center md:items-start md:flex-row'>
        <section className='flex-1'>
            <h3 className='font-poppins text-xl'>NEWSLETTER</h3>
            <p className='mt-5 text-sm'>
              To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
              send you spam or pass on your email address
            </p>
            <form 
              className='relative mt-5 flex flex-col items-end md:flex-row md:items-center md:gap-10'
              onSubmit={handleSubmit}
              >
              <input 
                className={` text-black mb-5 w-full px-3 py-2 border ${error ? 'border-red-500': 'border-black'} rounded-md md:mb-0`} 
                type="text"
                value={input}
                onChange={handleChange} 
              />
              <small className={` ${error ? 'block':'hidden'} text-red-500 absolute bottom-10 left-2 md:-bottom-6`}>Check your email please</small>
              <button  className='bg-primary-100 text-sm font-poppins px-6 py-3 rounded-md hover:opacity-80 '>Subscribe</button>
            </form>
        </section>

        <section className='mt-10 md:order-first flex-1 md:mt-0'>
          <img className='w-[180px] h-8' src={logo} alt="footer-logo" />
          <p className='text-sm mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis quibusdam nostrum maxime adipisci aut nulla libero architecto incidunt aliquam.</p>
          <div className='mt-10 flex flex-col gap-3'>
            <div className='flex items-center gap-3 '>
              <FiPhoneCall className='w-[20px] h-[23px]' />
              <span className='text-sm'>example@company.com</span>
            </div>
            <div className='flex items-center gap-3 '>
              <MdOutlineEmail className='w-[20px] h-[23px]' />
              <span className='text-sm'>Phone +1-123-456-7889</span>
            </div>          
          </div>
          <div className='mt-12 flex space-x-5'>
            <a href="#"><FaSquareFacebook className='w-[20px] h-[30px] hover:text-blue-500' /></a>
            <a href="#"><FaInstagram className='w-[20px] h-[30px] hover:text-blue-500' /></a>
            <a href="#"><FaXTwitter className='w-[20px] h-[30px] hover:text-blue-500' /></a>
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default Footer