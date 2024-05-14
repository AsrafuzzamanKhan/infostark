import React from 'react';
import './WelcomePage.css'

const WelcomePage = () => {
    return (
        <div className='welcome min-h-screen'>
            <div className='flex flex-col justify-center items-center min-h-screen '>
                <div className='text-center backdrop-blur-lg  p-10 rounded-[10px] flex flex-col gap-y-8 shadow-lg'>
                    <h1 className='text-4xl font-semibold font-serif text-white'>Welcome to <span className='text-black'>InfoStark</span></h1>
                    <p className='font-semibold text-black'>We're working on our new website! We will be ready in a few time</p>
                    <p>Stay connected with us !!!</p>
                </div>

            </div>
        </div>
    )
}

export default WelcomePage