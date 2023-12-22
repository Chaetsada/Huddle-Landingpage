import React from 'react'
import mockup from '../assets/screen-mockups.svg'


const Header = () => {
    return (
        <>
            <header className=' mt-[140px] flex flex-col justify-center items-center'>
                <h1 className='text-2xl text-secondary-100 font-poppins text-center px-10 md:text-3xl lg:text-5xl'>
                    Build The Community Your Fans Will Love
                </h1>
                <p className='mt-5 mb-10 text-center md:text-xl  text-secondary-100 px-5 md:max-w-[650px]'>
                    Huddle re-imagines the way we build communities. You have a voice, but so does 
                    your audience. Create connections with your users as you engage in genuine discussion. 
                </p>
                <button className='main-button'>
                    Get Started For Free
                </button>
                <div className='mt-[100px] p-8'>
                    <img src={mockup} alt="" />
                </div>
            </header>
        </>
    )
}

export default Header