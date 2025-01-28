'use client'
import { FaShoppingCart, FaAngleRight, FaBolt } from 'react-icons/fa'
import { useState } from 'react'

export default function ChargerProcess() {
  const [firstNodeList, setFirstNodeList] = useState(1)
  const [secondNodeList, setSecondNodeList] = useState(1)

  const handleFirstNodeChange = (node: number) => {
    setFirstNodeList(node)
  }

  const handleSecondNodeChange = (node: number) => {
    setSecondNodeList(node)
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:gap-x-5 gap-y-5 lg:pr-10 p-6 lg:p-0">
      <div className="break-words max-w-md lg:ml-3 inline-block md:pl-10">
        <p className="font-bold text-3xl lg:text-4xl mb-2">
          iPark integrated hardware process
        </p>
        <p className="text-sm pt-3 max-w-xs">
          Say hello to fast scalability and cost efficiency with our end-to-end
          process.
        </p>
      </div>
      <div>
        <div className="max-w-sm sm:pl-20 md:pl-10">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center text-black border border-gray-300 rounded-full w-10 h-10">
              <div
                className={`flex items-center justify-center ${
                  firstNodeList === 1
                    ? "bg-blue-900 text-white"
                    : "text-black border border-2 border-gray-300"
                } rounded-3xl w-10 h-10 cursor-pointer`}
                onClick={() => handleFirstNodeChange(1)}
              >
                <FaShoppingCart size={16} />
              </div>
            </div>
            <div className="border-t border-gray-300 w-2.5"></div>
            <div className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-10 h-10">
              <div
                className={`flex items-center justify-center ${
                  firstNodeList === 2
                    ? "bg-blue-900 text-white"
                    : "text-black border border-2 border-gray-300"
                } rounded-full w-10 h-10 cursor-pointer`}
                onClick={() => handleFirstNodeChange(2)}
              >
                <FaAngleRight size={16} />
              </div>
            </div>
            <div className="border-t border-gray-300 w-2.5"></div>
            <div className="flex items-center justify-center text-black rounded-full w-10 h-10 border border-gray-300">
              <div
                className={`flex items-center justify-center ${
                  firstNodeList === 3
                    ? "bg-blue-900 text-white"
                    : "text-black border border-2 border-gray-300"
                } rounded-full w-10 h-10 cursor-pointer`}
                onClick={() => handleFirstNodeChange(3)}
              >
                <FaBolt size={16} />
              </div>
            </div>
            <div className="border-t border-gray-300 w-2.5"></div>
            <div className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-10 h-10">
              <div
                className={`flex items-center justify-center ${
                  firstNodeList === 4
                    ? "bg-blue-900 text-white"
                    : "text-black border border-2 border-gray-300"
                } rounded-full w-10 h-10 cursor-pointer`}
                onClick={() => handleFirstNodeChange(4)}
              >
                <FaAngleRight size={16} />
              </div>
            </div>
          </div>
          {firstNodeList === 1 && (
            <>
              <p className="font-bold text-lg mt-5">
                Chargers acquired from Plugkaro
              </p>
              <p className="text-sm font-semibold mt-2">
                Order based on the Plugkaro volume framework contract
              </p>
              <p className="mt-2 text-sm">
                Order based on the Virta volume framework contract for you
              </p>
            </>
          )}
          {firstNodeList === 2 && (
            <>
              <p className="font-bold text-sm mt-5">
                Chargers acquired from other sources
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Technical specifications and negotiations with a number of
                vendors.
              </p>
            </>
          )}
        </div>
        <div className="max-w-sm sm:pl-20 md:pl-10 pt-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center justify-center text-black border border-gray-300 rounded-full w-10 h-10">
              <div
                className={`flex items-center justify-center ${
                  secondNodeList === 1
                    ? "bg-blue-900 text-white"
                    : "text-black border border-2 border-gray-300"
                } rounded-full w-10 h-10 cursor-pointer`}
                onClick={() => handleSecondNodeChange(1)}
              >
                <FaShoppingCart size={16} />
              </div>
            </div>
            <div className="border-t border-gray-300 w-2.5"></div>
            <div className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-10 h-10">
              <div
                className={`flex items-center justify-center ${
                  secondNodeList === 2
                    ? "bg-blue-900 text-white"
                    : "text-black border border-2 border-gray-300"
                } rounded-full w-10 h-10 cursor-pointer`}
                onClick={() => handleSecondNodeChange(2)}
              >
                <FaAngleRight size={16} />
              </div>
            </div>
            <div className="border-t border-gray-300 w-2.5"></div>
            <div className="flex items-center justify-center text-black border border-gray-300 rounded-full w-10 h-10">
              <div
                className={`flex items-center justify-center ${
                  secondNodeList === 3
                    ? "bg-blue-900 text-white"
                    : "text-black border border-2 border-gray-300"
                } rounded-full w-10 h-10 cursor-pointer`}
                onClick={() => handleSecondNodeChange(3)}
              >
                <FaAngleRight size={16} />
              </div>
            </div>
            <div className="border-t border-gray-300 w-2.5"></div>
            <div className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-10 h-10">
              <div
                className={`flex items-center justify-center ${
                  secondNodeList === 4
                    ? "bg-blue-900 text-white"
                    : "text-black border border-2 border-gray-300"
                } rounded-full w-10 h-10 cursor-pointer`}
                onClick={() => handleSecondNodeChange(4)}
              >
                <FaBolt size={16} />
              </div>
            </div>
          </div>
          {secondNodeList === 1 && (
            <>
              <p className="font-bold text-lg mt-4">
                Chargers acquired from other sources
              </p>
              <p className="text-sm font-semibold">Technical specifications</p>
              <p className="text-sm mt-1">
                Technical specification and negotiations with a number of
                vendors.
              </p>
            </>
          )}
          {secondNodeList === 2 && (
            <>
              <p className="font-bold text-lg mt-4">Procurement process</p>
              <p>
                Order services and manage delivery, schedule and
                pre-configuration
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}