import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
function TemperatureAndDetails({weather: {
  details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, timezone, feels_like
}}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
            <div className='flex flex-row items-center justify-between text-white py-3'>
              <img src={iconURL(icon)} alt="" className='w-28' />
              <p className='w-28'> {`${temp.tofixed()}°`}</p>
              <p className='flex flex-col space-y-2'>

                <div className='flex font-light text-sm items-center justify-right'>
                    <UilTemperature size={18} className='mr-1' /> Feels Like; <span className='font-medium ml-1'> {`${feels_like.tofixed()}°`}</span>
                </div>

                <div className='flex font-light text-sm items-center justify-right'>
                    <UilTear size={18} className='mr-1' /> Humidity; <span className='font-medium ml-1'> {`${humidity.tofixed()}%`}</span>
                </div>

                <div className='flex font-light text-sm items-center justify-right'>
                    <UilWind size={18} className='mr-1' /> Wind Speed; <span className='font-medium ml-1'> {`${speed.tofixed()}km/h`}</span>
                </div>

              </p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun /> <p className='font-light'>|</p>
            <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, "hh:mm a")} </span> </p>
            <UilSunset /> <p className='font-light'>|</p>
            <p className='font-light'>Set: <span className='font-medium ml-1'> {formatToLocalTime(sunset, timezone, "hh:mm a")}</span> </p>
            <UilArrowUp /> <p className='font-light'>|</p>
            <p className='font-light'>Max: <span className='font-medium ml-1'> {`${temp_max.tofixed()}°`}</span> </p>
            <UilArrowDown /> <p className='font-light'>|</p>
            <p className='font-light'>Min: <span className='font-medium ml-1'> {`${temp_min.tofixed()}°`}</span> </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails