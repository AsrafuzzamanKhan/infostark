import React from 'react'
import TempHero from '../TempHero/TempHero'
import TempItems from '../TempItems/TempItems'

const Temp = () => {
    return (
        <div className='bg-zinc-900 text-white'>
            <TempHero />
            <TempItems />
        </div>
    )
}

export default Temp