import React from 'react'

const Portfolio = ({ portfolio }) => {
    return (
        <div className={`relative group items-center justify-center overflow-hidden cursor-pointer p-4 rounded-lg `}>

            <div className=' flex justify-center items-center '>
                <img src={portfolio?.img} alt="" className='object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg' />
            </div>
            <div className='absolute inset-0 bg-gradient-to-b group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 group-hover:p-4 rounded-lg'>
            </div>
            <div className=' absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] group-hover:translate-y-0 transition-all duration-500 text-white text-3xl lg:text-4xl uppercase font-semibold tracking-tight leading-10'>
                <p>{portfolio?.title}</p>
            </div>
        </div>
    )
}

export default Portfolio