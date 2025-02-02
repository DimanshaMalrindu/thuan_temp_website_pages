'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ChargingOption = 'mobile' | 'RFID' | 'one-time'

export default function EVDriverPage() {
  const [chargingOption, setChargingOption] = useState<ChargingOption>('mobile')
  const [instruction, setInstruction] = useState<number>(1)

  const handleChargingOption = (option: ChargingOption) => {
    setChargingOption(option)
  }

  const handleInstruction = (option: number) => {
    setInstruction(option)
  }

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="relative h-96 lg:h-[30rem] xl:h-[31rem]">
          <Image
            src="/assets/ev_charger.jpg"
            alt="EV Charger"
            fill
            className="object-cover"
          />
          <div className="absolute top-1/2 xs:top-[150px] lg:top-[230px] px-20 md:px-28 2xl:px-40 transform -translate-y-1/2 lg:text-left">
            <p className="text-md sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-3 text-white max-w-md">
              IPARK NETWORK - EASY CHARGING IN OVER 60 COUNTRIES
            </p>
            <p className="mt-4 text-xs leading-relaxed sm:text-base md:text-lg text-white max-w-lg">
              With a iPark Network account, you can charge your car at over
              620,000 charge points in over 60 countries.
            </p>
            <p className="text-white text-xs pt-6 lg:text-xl">
              Download the Virta Network mobile app now!
            </p>
            <div className="pt-2">
              <p className="text-white text-xs lg:text-xl">
                You can also use it without registering.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:px-10 xl:px-28 lg:pt-10 2xl:px-40 lg:p-0 p-6">
          <p className="font-extrabold text-3xl lg:text-4xl max-w-lg">
            Charge at over 620 000 public EV charge points
          </p>
          <div className="pt-7 leading-relaxed inline-block">
            <p className="pb-5">
              Together with our Connected to Virta Network partners and our
              Roaming partners, we offer easy and accessible EV charging at more
              than 620,000 public charge points in over 60 countries.
              <span className="font-semibold"> That is the Virta Network.</span>
            </p>
            <p className="pb-5">
              As a registered customer of the Virta Network or any of our
              Connected to Virta Network partners, you can start charging and
              pay simply by identifying with your RFID tag or mobile app at the
              charger. No roaming surcharges apply here.
            </p>
            <p className="pb-5">
              Roaming fees apply when charging at our Roaming partners&apos
              charge points. You can identify those chargers in the mobile app.
            </p>
            <p>
              Registered customers pay for charging based on their usage. Your
              customer account is automatically charged at the end of the month
              from the credit card attached. Prices and other charging station
              information can be viewed from the mobile app. Public charging
              stations can also be used with one-time payment – however, for
              registered customers charging is cheaper and the experience more
              effortless.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start px-10 xl:px-24 2xl:px-28 pt-10">
          <div className="max-w-xs lg:pb-0 pb-7 space-y-2">
            <p className="text-3xl lg:te font-extrabold">+60</p>
            <p className="text-xl font-semibold">
              countries with charge points in the iPark Network, including
              roaming
            </p>
          </div>
          <div className="max-w-xs pb-7 space-y-2">
            <p className="text-3xl font-extrabold">+620 000</p>
            <p className="text-xl font-semibold">
              charge points in the iPark Network, incouding roaming
            </p>
          </div>
          <div className="max-w-xs space-y-2">
            <p className="text-3xl font-extrabold">Every 1,5 sec</p>
            <p className="text-xl font-semibold">
              a new EV charging event delivered through the iPark platform
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row py-10 justify-between items-start lg:px-10 xl:px-0 p-5">
          <div className="text-3xl font-bold xl:px-28 2xl:px-40">
            This is how you charge
          </div>
          <div className="flex flex-col pt-7 xl:w-2/3 lg:pt-5 xl:pt-0">
            <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-2 xl:gap-5 mb-5">
              {["mobile", "RFID", "one-time"].map((opt) => (
                <button
                  key={opt}
                  className={`text-left text-gray-600 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 border border-gray-500 rounded-md w-44 lg:w-auto ${
                    chargingOption === opt &&
                    "text-white font-semibold bg-blue-500"
                  }`}
                  onClick={() => handleChargingOption(opt as ChargingOption)}
                >
                  {opt === "mobile" && "Mobile app"}
                  {opt === "RFID" && "RFID"}
                  {opt === "one-time" && "One-time payment"}
                </button>
              ))}
            </div>
            <div className="max-w-xl">
              {chargingOption === "mobile" && (
                <div className="space-y-3">
                  <p className="text-3xl font-bold">iPark mobile application</p>
                  <p className="leading-relaxed">
                    Virta mobile app enables you to view and search for public
                    charging stations, and start, stop, and pay for charging.
                    You can also view and download receipts and your charging
                    history from the mobile app.
                  </p>
                  <div>
                    <p>Download the mobile app:</p>
                    <div className="flex flex-row pt-5">
                      <Image
                        src="/assets/google-get-it-on-google-play.webp"
                        alt="Get it on Google Play"
                        height={100}
                        width={140}
                      />
                      <Image
                        src="/assets/apple-download-on-the-app-store.webp"
                        alt="Download on the app store"
                        height={50}
                        width={140}
                      />
                    </div>
                  </div>
                </div>
              )}
              {chargingOption === "RFID" && (
                <div className="space-y-3">
                  <p className="text-3xl font-bold">RFID tags for charging</p>
                  <p className="leading-relaxed pt-5">
                    Identification can also be done with RFID tags. As you show
                    the RFID to the charging station reader, your customer
                    account is identified and billed after the charging event.
                  </p>
                  <p className="pt-5 leading-relaxed">
                    You can order the RFID tag for charging during the
                    registration, or after registering from the mobile app.
                  </p>
                </div>
              )}
              {chargingOption === "one-time" && (
                <div className="space-y-3">
                  <p className="text-3xl font-bold">One-time payment</p>
                  <p className="leading-relaxed pt-5">
                    Public charging stations can be accessed by everybody – even
                    without registration. With our one-time payment solution, EV
                    drivers can also pay with credit or debit card. The payment
                    solution can be found at www.chge.eu. Charging with the
                    one-time payment is more expensive due to transmission fee
                    added to the charging price – so register and you&quotll
                    benefit.
                  </p>
                  <div>
                    <Link href="" className="underline text-violet-500">
                      One-time payment &gt;
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:px-10 xl:px-28 2xl:px-40 pt-7 p-5">
          <div>
            <p className="font-bold text-3xl">How to get started</p>
          </div>
          <div className="pt-5 lg:pt-0">
            <div className="max-w-lg mx-auto">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center text-black border border-gray-300 rounded-full w-10 h-10">
                  <div
                    className={`flex items-center justify-center ${
                      instruction === 1
                        ? "bg-blue-900 text-white"
                        : "text-black border border-2 border-gray-300"
                    } rounded-3xl w-10 h-10 cursor-pointer`}
                    onClick={() => handleInstruction(1)}
                  >
                    1
                  </div>
                </div>
                <div className="border-t border-gray-300 w-2.5"></div>
                <div className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-10 h-10">
                  <div
                    className={`flex items-center justify-center ${
                      instruction === 2
                        ? "bg-blue-900 text-white"
                        : "text-black border border-2 border-gray-300"
                    } rounded-full w-10 h-10 cursor-pointer`}
                    onClick={() => handleInstruction(2)}
                  >
                    2
                  </div>
                </div>
              </div>
              {instruction === 1 && (
                <div>
                  <p className="font-extrabold text-3xl py-6">
                    Create an account
                  </p>
                  <p className="leading-relaxed pb-5">
                    At registration, you&quot;ll add your payment card, which will be billed monthly 
                    according to your charging spending. We will send you a receipt of your charging 
                    sessions after each full calendar month to your email address. Charging events are 
                    billed from your account according to the pricing at the chosen charging point; you 
                    can always check the price from the Virta mobile app.
                  </p>
                  <p className="pb-5">
                    In case you don&apos;t want to register, you can also charge with our one-time 
                    payment solution.
                  </p>
                  <div className="pb-5">
                    <Link href="" className="underline text-violet-500">Create an account here &gt;</Link>
                  </div>
                </div>
              )}
              {instruction === 2 && (
                <div>
                  <p className="font-extrabold text-3xl py-5">
                    After the registration, you are ready to charge
                  </p>
                  <p className="leading-relaxed pb-5">         
                    Find available charging stations from the mobile app, log in and start charging. 
                    If you ordered charging tags, they will be shipped to you within the next 1-2 weeks.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}