'use client'
import React, { useState } from 'react'
import { IoIosHome } from 'react-icons/io'
import { MdOutlineWork, MdOutlineRestaurant, MdLocalGroceryStore, MdLocalAirport } from 'react-icons/md'
import { FaHotel } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { FaTshirt, FaRoad, FaGasPump, FaTruck, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

type ChargingOption = 'standard' | 'fast' | 'ultra-fast'

export default function ChargingOption() {
  const [option, setOption] = useState<ChargingOption>('standard')
  const options: ChargingOption[] = ['standard', 'fast', 'ultra-fast']

  const handleOptionChange = (option: ChargingOption) => {
    setOption(option)
  }

  const handlePrevious = () => {
    const currentIndex = options.indexOf(option)
    const previousIndex = (currentIndex - 1 + options.length) % options.length
    setOption(options[previousIndex])
  }

  const handleNext = () => {
    const currentIndex = options.indexOf(option)
    const nextIndex = (currentIndex + 1) % options.length
    setOption(options[nextIndex])
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
      <div className="flex flex-col space-y-4 lg:py-9 lg:w-96">
        {['standard', 'fast', 'ultra-fast'].map((opt) => (
          <button
            key={opt}
            className={`text-left text-gray-600 hover:text-blue-600 transition-all duration-300 px-4 py-2 rounded-md lg:w-full ${
              option === opt && 'text-blue-600 font-semibold bg-gray-100'
            }`}
            onClick={() => handleOptionChange(opt as ChargingOption)}
          >
            {opt === 'standard' && 'Standard Charging'}
            {opt === 'fast' && 'Fast Charging'}
            {opt === 'ultra-fast' && 'Ultra-fast Charging'}
          </button>
        ))}
      </div>
      <div className="flex-grow bg-white p-6 rounded-lg shadow-md transition-all duration-300 w-full">
        {option === 'standard' && (
          <div className="transition-opacity duration-300 opacity-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
              Standard Charging
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold">Type of charger:</span> AC up to 22 kW
            </p>
            <p className="text-gray-600 mt-2">
              Charging takes <span className="font-semibold">over 2 hours</span>, so your customers can enjoy their stay
              and continue with a fully charged battery.
            </p>
            <p className="text-gray-600 mt-2">
              Perfect for long-term charging in locations such as:
            </p>
            <ul className="flex flex-wrap gap-4 mt-4">
              <li className="flex items-center gap-2">
                <IoIosHome className="text-blue-600" /> Home
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineWork className="text-blue-600" /> Workplace
              </li>
              <li className="flex items-center gap-2">
                <FaHotel className="text-blue-600" /> Hotels
              </li>
              <li className="flex items-center gap-2">
                <FaMapLocationDot className="text-blue-600" /> Destinations
              </li>
              <li className="flex items-center gap-2">
                <MdLocalAirport className="text-blue-600" /> Airports
              </li>
            </ul>
          </div>
        )}
        {option === 'fast' && (
          <div className="transition-opacity duration-300 opacity-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
              Fast Charging
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold">Type of charger:</span> DC 50-150 kW
            </p>
            <p className="text-gray-600 mt-2">
              This type of charger fully charges an EV in the span of <span className="font-semibold">0,5 to 2 hours</span>
            </p>
            <p className="text-gray-500 mt-2">
              That’s why it’s perfect for locations such as:
            </p>
            <ul className="flex flex-wrap gap-4 mt-4">
              <li className="flex items-center gap-2">
                <MdOutlineRestaurant className="text-blue-600" /> Restaurants
              </li>
              <li className="flex items-center gap-2">
                <FaTshirt className="text-blue-600" /> Retails
              </li>
              <li className="flex items-center gap-2">
                <MdLocalGroceryStore className="text-blue-600" /> Grocery stores
              </li>
            </ul>
          </div>
        )}
        {option === 'ultra-fast' && (
          <div className="transition-opacity duration-300 opacity-100">
            <p className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
              Ultra-fast Charging
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Type of charger:</span> DC 150-600 kW
            </p>
            <p className="text-gray-600 mt-2">
              Charging with an ultra-fast charger takes only up to <span className="font-semibold">30 minutes.</span>
            </p>
            <p className="text-gray-500 mt-2">
              That’s why it’s perfect for locations such as:
            </p>
            <ul className="flex flex-wrap gap-4 mt-4">
              <li className="flex items-center gap-2">
                <FaRoad className="text-blue-600" /> By the highways
              </li>
              <li className="flex items-center gap-2">
                <MdLocalAirport className="text-blue-600" /> Airports
              </li>
              <li className="flex items-center gap-2">
                <FaGasPump className="text-blue-600" /> Petrol stations
              </li>
              <li className="flex items-center gap-2">
                <FaTruck className="text-blue-600" /> Logistics hubs & depots
              </li>
            </ul>
          </div>
        )}
        <div className="mt-5 space-x-1">
          {options.map((opt) => (
              <button
                key={opt}
                className={`w-4 h-4 rounded-full ${
                  option === opt ? 'bg-blue-600' : 'bg-gray-300'
                } transition-colors duration-300`}
                onClick={() => handleOptionChange(opt)}
                aria-label={`Select ${opt}`}
              />
            ))}
            <div className="float-end">
              <span className="flex gap-2">
                <button onClick={handlePrevious}>
                  <FaArrowLeft className="text-blue-600" />
                </button>
                <button onClick={handleNext}>
                  <FaArrowRight className="text-blue-600" />
                </button>
              </span>
            </div>
        </div>
      </div>
    </div>
  )
}