import React from 'react'
import image from '../assets/illustration-flowing-conversation.svg'

const Main_section_Two = () => {
    return (
        <section id='main-section-2' className='pt-[100px] h-[70vh] md:h-[90vh] md:pt-[220px] '>
            <div className='container flex flex-col justify-center items-center md:flex-row '>
                <div className='p-10 flex-1 md:order-first'>
                    <img src={image} alt="grow-image" />
                </div>
                <div className=' p-10 flex-1 '>
                    <h2 className='text-center text-2xl text-secondary-100 font-poppins md:text-left md:text-4xl'>
                        Flowing Conversations
                    </h2>
                    <p className='mt-5 text-center text-sm text-secondary-100 md:text-left md:text-xl md:max-w-[550px]'>
                        You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                        just-in-time loading for a more natural flow. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Main_section_Two