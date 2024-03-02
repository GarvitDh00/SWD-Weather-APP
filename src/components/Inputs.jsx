import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Inputs(setQuery, units, setUnits) {
  const [city,setCity] = useState("");

  const cityExists = () => {
    if (city !== '') setQuery({q: city})
  }

  return (
    <div className='flex flex-row justify-centre my-6'>
      <div className='flex flex-row w-3/4 items-center justifty- center space-x-4'>

        <input type="text"
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        placeholder='search for city...'
        className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase' />
      
      <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
      onClick={cityExists}
      />
      </div>
    </div>
  )
}

export default Inputs