'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaRegCreditCard, FaListOl, FaBolt, FaRegStopCircle } from 'react-icons/fa'
import Carousel from '@/components/Carousel'
import CardBrand from '@/components/CardBrand'

export default function PaymentKiosk() {
  const [node, setNode] = useState(1)

  const handleNodeChange = (node: number) => {
    setNode(node)
  }

  const handleDemoClick = () => {
    window.open('https://www.youtube.com/embed/dQw4w9WgXcQ', '_blank')
  }

  return (
    <div className="relative h-screen w-full">
      <div className="relative md:h-80 lg:h-96 h-72">
        <Image
          src="/assets/ev_charger_3.jpg"
          alt="EV Charger"
          fill
          className="object-cover"
        />
        <div className="absolute top-1/2 px-20 sm:px-20 md:px-40 lg:px-40 transform -translate-y-1/2 lg:text-left">
          <p className="text-2xl md:text-3xl font-bold text-h1TextColour">
            Plugkaro
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl mt-3 text-white">
            INTEGRATION CHARGING STATIONS
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white">
            Get the perfect charger for your needs
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm sm:text-base md:text-lg shadow-lg"
            >
              Let&apos;s Chat
            </button>
          </div>
        </div>
      </div>
      <div className="pb-5 pt-6">
          <p className="pl-4 md:pl-11 lg:pl-28 text-md text-gray-600 md:space-x-5 space-x-3">
            <Link
              href="/"
              className="hover:underline hover:text-green-600 hover:underline-offset-4 transition-colors duration-400"
            >
              Home
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link
              href="/product"
              className="hover:underline hover:text-green-600 hover:underline-offset-4 transition-colors duration-200"
            >
              Product
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link
              href="/payment-kiosk"
              className="hover:underline hover:text-green-600 hover:underline-offset-4 transition-colors duration-200"
            >
              Payment kiosk
            </Link>
          </p>
        </div>
        <div className="flex flex-col xl:flex-row xl:pt-5 items-center">
        <div className="xl:w-3/5 order-last p-6 xl:pl-28 space-y-5 flex flex-col justify-center max-w-xl">
          <p className="text-2xl xl:text-3xl font-bold">
            Enable card payments and stay on top of new legislation
          </p>
          <p className="leading-relaxed">
            Simplicity is vital when it comes to EV charging. To make the
            experience as simple as possible and boost EV adoption,
            <span className="font-semibold">
              &nbsp;many countries are rolling out new legislation that requires
              contactless payment
            </span>
            &nbsp;to be enabled at charging points.
          </p>
          <p className="leading-relaxed">
            To help you comply with the new regulations, we developed the
            <span className="font-semibold">
              &nbsp;Plugkaro Payment Kiosk
            </span>
            &nbsp;in cooperation with
            <span className="font-semibold">&nbsp;Mastercard</span> and
            <span className="font-semibold">&nbsp;Worldpay</span> from FIS.
          </p>
          <p className="leading-relaxed">
            This solution is perfect for
            <span className="font-semibold">
              &nbsp;operators of existing charging sites or those planning to
              install EV charging stations
            </span>
            &nbsp;who want to enable ad-hoc payments to visiting or
            non-registered EV drivers and stay on top of legal requirements.
          </p>
          <div className="pt-6">
            <button
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-xl p-3"
              onClick={handleDemoClick}
            >
              Watch the demo
            </button>
          </div>
        </div>
        <div className="xl:w-1/2 order-first lg:order-last w-full h-auto flex justify-center items-center">
          <Image
            src="/assets/demo.webp"
            width={300}
            height={1024}
            className="object-cover"
            layout="responsive"
            alt="kiosk payment"
          />
        </div>
      </div>
      <div className="lg:pl-28 md:pt-6 md:pl-10 md:pr-10 lg:pr-28 p-4">
        <p className="lg:text-4xl text-3xl font-bold pb-7 lg:pt-6 pt-8">Watch our demo</p>
        <p className="lg:text-3xl text-2xl font-bold pb-4 pt-4">
          AFIR & the Plugkaro Payment Kiosk
        </p>
        <p className="py-7 leading-relaxed">
          Did you know that from 13 April 2024, EV drivers must have the option
          to pay for their charging sessions using a contactless payment method?
          In our demo (3 short videos), we&apos;ll tell you more about:
        </p>
        <div className="md:px-5">
          <ul className="list-disc pl-4 space-y-1.5">
            <li>the Alternative Fuels Infrastructure Regulation (AFIR),</li>
            <li>basic features of the Virta Payment Kiosk and how to operate it</li>
            <li>you can view the keynote about the Payment Kiosk at the ICNC23.</li>
          </ul>
        </div>
        <div className="flex justify-center pt-10">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="pt-8 pb-10">
            <button
              className="p-3 rounded-2xl text-white bg-blue-600 hover:bg-blue-700"
              onClick={handleDemoClick}
            >
              Watch full demo ▶
            </button>
          </div>
      </div>
      <div className="lg:pl-28 md:pt-6 md:pl-10 md:pr-10 lg:pr-28 p-4">
        <p className="text-4xl font-bold pb-6 text-center md:text-left">The benefits</p>
        <div className="flex lg:flex-row flex-wrap justify-center grid md:grid-cols-2 grid-cols-1 gap-6 mx-auto pt-6">
          <div className="lg:w-80 w-full mx-auto text-center md:text-left">
            <p className="text-2xl md:text-3xl font-semibold">Stay compliant</p>
            <p className="py-4 md:py-8 leading-relaxed text-sm md:text-base">
              Legal requirements for contactless payment at charging stations are going to come into force in many countries. Both the EU-wide legislation &quot;AFIR&quot; as well as &quot;The Public Charge Point Regulations&quot; in the UK will become effective in 2024.
            </p>
          </div>
          <div className="lg:w-80 w-full pt-6 md:pt-0 mx-auto text-center md:text-left">
            <p className="font-semibold text-2xl md:text-3xl">Boost revenue</p>
            <p className="py-4 md:py-8 leading-relaxed text-sm md:text-base">
              Provide a new payment option for your EV drivers who are already asking for contactless payments and attract new customers to your EV chargers. Virta&apos;s pilot projects showed 20% growth in transactions at chargers with the Payment Kiosk.
            </p>
          </div>
          <div className="lg:w-80 w-full mt-8 mx-auto text-center md:text-left">
            <p className="font-semibold text-2xl md:text-3xl">Enhance customer experience</p>
            <p className="py-4 md:py-8 leading-relaxed text-sm md:text-base">
              Paying for EV charging couldn&apos;t get any easier for your customers. With only a few clicks and a card tap, the payment is done.
            </p>
          </div>
          <div className="lg:w-80 w-full mt-8 mx-auto text-center md:text-left">
            <p className="font-semibold text-2xl md:text-3xl">Save costs</p>
            <p className="py-4 md:py-8 leading-relaxed text-sm md:text-base">
              Retrofit the Kiosk to your existing chargers instead of replacing the entire network to stay compliant with contactless payment requirements.
            </p>
          </div>
        </div>
        <div className="pt-10 text-center md:text-left">
          <button className="rounded-xl px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Talk to sales
          </button>
        </div>
      </div>
      <div className="lg:pl-28 md:pt-6 md:pl-10 md:pr-10 lg:pr-28 p-4">
        <div className="pb-10">
          <p className="font-bold lg:text-4xl text-3xl">
            Examples of compatible charger brands
          </p>
        </div>
        <Carousel />
      </div>
      <div className="lg:pl-28 md:pt-6 md:pl-10 md:pr-10 lg:pr-28 p-4">
        <p className="font-bold lg:text-4xl text-3xl pb-5">The EV driver journey at the Kiosk</p>
        <div className="pt-10">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center text-black border border-gray-300 rounded-full w-12 h-12">
              <div
                className={`flex items-center justify-center ${
                  node === 1
                    ? "bg-blue-900 text-white"
                    : "text-black border border-gray-300"
                } rounded-3xl w-12 h-12 cursor-pointer`}
                onClick={() => handleNodeChange(1)}
              >
                <FaListOl />
              </div>
            </div>
            <div className="border-t border-gray-300 w-8"></div>
            <div className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-12 h-12">
              <div
                className={`flex items-center justify-center ${
                  node === 2
                    ? "bg-blue-900 text-white"
                    : "text-black border border-gray-300"
                } rounded-full w-12 h-12 cursor-pointer`}
                onClick={() => handleNodeChange(2)}
              >
                <FaRegCreditCard />
              </div>
            </div>
            <div className="border-t border-gray-300 w-8"></div>
            <div className="flex items-center justify-center text-black rounded-full w-12 h-12 border border-gray-300">
              <div
                className={`flex items-center justify-center ${
                  node === 3
                    ? "bg-blue-900 text-white"
                    : "text-black border border-gray-300"
                } rounded-full w-12 h-12 cursor-pointer`}
                onClick={() => handleNodeChange(3)}
              >
                <FaBolt />
              </div>
            </div>
            <div className="border-t border-gray-300 w-8"></div>
            <div className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-12 h-12">
              <div
                className={`flex items-center justify-center ${
                  node === 4
                    ? "bg-blue-900 text-white"
                    : "text-black border border-gray-300"
                } rounded-full w-12 h-12 cursor-pointer`}
                onClick={() => handleNodeChange(4)}
              >
                <FaRegStopCircle />
              </div>
            </div>
          </div>
          {node === 1 && (
            <>
              <p className="font-bold text-3xl mt-6">
                Selecting the EV charger
              </p>
              <p className="py-5 leading-relaxed">
                The EV driver arrives at a charging site, selects a charging
                station and plugs in their vehicle. Before going to the kiosk,
                they need to memorise the charger ID.
              </p>
            </>
          )}
          {node === 2 && (
            <>
              <p className="font-bold text-3xl mt-4">At the payment terminal</p>
              <p className="py-5 leading-relaxed">
                The EV driver clicks &quot;Start charging&quot; on the touch
                screen of the Kiosk and selects the correct charger ID. When
                prompted, they need to tap their credit/debit card on the
                contactless terminal.
              </p>
              <p className="pb-5 leading-relaxed">
                On rare occasions, the terminal requests to insert the
                credit/debit card as an additional security measure or to enter
                the PIN on the terminal’s touchpad. At this point, also a
                specified pre-authorisation amount is blocked from the
                credit/debit card.
              </p>
            </>
          )}
          {node === 3 && (
            <>
              <p className="font-bold text-3xl mt-4 pb-5">
                Charging in process
              </p>
            </>
          )}
          {node === 4 && (
            <>
              <p className="font-bold text-3xl mt-4 pb-5">
                Stopping the charging session
              </p>
              <p className="pb-6 leading-relaxed">
                To end the charging session, the EV driver clicks &quot;Stop
                charging&quot; on the touch screen of the Kiosk and once again
                taps their credit/debit card on the terminal.
              </p>
              <p className="pb-6 leading-relaxed">
                The pre-authorisation is cancelled and the actual cost of the
                transaction is charged from the credit/debit card. The charging
                session is now stopped, and the cable unlocks (if a DC charger
                was used).
              </p>
            </>
          )}
        </div>
      </div>
      <div className="lg:pl-28 md:pt-6 md:pl-10 md:pr-10 lg:pr-28 p-4">
        <p className="font-bold text-4xl">Technical specifications</p>
        <div className="flex flex-col lg:flex-row justify-center items-center pt-6">
          <div className="lg:order-first order-last lg:pt-0 pt-7 max-w-lg">
            <div className="pl-5 pt-6">
              <ul className="list-disc space-y-1.5">
                <li>
                  <span className="font-semibold">Power PC</span>: Fanless
                  embedded system with Intel©
                </li>
                <li>
                  <span className="font-semibold">Display</span>: 7.0” TFT
                  (1024x600) PCAP Touch
                </li>
                <li>
                  <span className="font-semibold">Payment terminal</span>: PAX
                  IM30
                </li>
                <li>
                  <span className="font-semibold">Connection</span>: 4G or
                  Ethernet LAN RJ-45
                </li>
                <li>
                  <span className="font-semibold">Operating voltage</span>: 230
                  VAC, 50Hz – approx. 40W (with heater 90 VA)
                </li>
                <li>
                  <span className="font-semibold">Outline dimensions</span>:
                  H450 x W265 x D200 mm, H1444 mm (with pole)
                </li>
                <li>
                  <span className="font-semibold">Weight</span>: 13kg (25kg with
                  pole)
                </li>
                <li>
                  <span className="font-semibold">Mounting options</span>: Pole
                  or a wall mount kit
                </li>
                <li>
                  <span className="font-semibold">Plug&Play</span> technology
                </li>
                <li>
                  Possible to connect to
                  <span className="font-semibold"> up to 100 chargers</span>
                </li>
                <li>
                  Connected to the individual charging stations and the Virta
                  Hub <span className="font-semibold">via the cloud</span>
                </li>
                <li>
                  Designed to accommodate a wide range of payment options,
                  accepting
                  <span className="font-semibold">
                    &nbsp;all commonly utilised credit and debit cards
                  </span>
                  &nbsp;available in the market
                </li>
              </ul>
            </div>
          </div>
          <div className="w-auto h-auto">
            <Image
              src="/assets/virta-payment-kiosk-product-image.webp"
              alt="kiosk"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="lg:pl-28 md:pt-6 md:pl-10 md:pr-10 lg:pr-28 p-4">
        <div>
          <p className="font-bold lg:text-4xl text-3xl lg:mx-0 mx-4">
            Accepted payment card brands
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-full lg:w-3/4">
            <CardBrand />
          </div>
        </div>
      </div>
      <div className="lg:pl-28 md:pt-6 md:pl-10 md:pr-10 lg:pr-28 p-4">
        <p className="font-bold lg:text-4xl text-3xl pb-7 xs:pl-2">
          Understand the new legislation
        </p>
        <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
            alt="EU Flag"
            className="w-12 h-auto mb-4"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Alternative Fuels Infrastructure Regulations (AFIR)
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The AFIR is part of the Fit for 55 package. The regulations focus on
            the deployment of alternative fuel infrastructure, which will
            support all modes of transport in Europe. The regulations state that
            EV drivers must be able to pay easily at charging points with
            payment cards or contactless devices.
          </p>
        </div>
      </div>
    </div>
  )
}