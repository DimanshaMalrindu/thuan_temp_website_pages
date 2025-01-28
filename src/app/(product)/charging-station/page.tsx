import Image from "next/image";
import Link from "next/link";
import ChargingOption from "@/components/ChargingOption";
import ChargerProcess from "@/components/ChargerProcess";
import Carousel from "@/components/Carousel";

export default function ChargingStation() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="relative lg:h-96 md:h-80 h-72">
          <Image
            src="/assets/ev_charger_3.jpg"
            alt="EV Charger"
            fill
            className="object-cover"
          />
          <div className="absolute top-1/2 md:px-36 px-20 transform -translate-y-1/2 lg:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-h1TextColour">
              iPark
            </h1>
            <p className="md:text-3xl sm:text-2xl text-xl mt-3 text-white">
              INTEGRATION CHARGING STATIONS
            </p>
            <p className="mt-4 md:text-lg sm:text-base text-sm text-white">
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
          <p className="pl-4 sm:pl-5 md:pl-11 lg:pl-28 text-md text-gray-600 md:space-x-5 space-x-3">
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
              href="/charging-stations"
              className="hover:underline hover:text-green-600 hover:underline-offset-4 transition-colors duration-200"
            >
              Charging stations
            </Link>
          </p>
        </div>
        <div className="lg:pl-28 sm:pr-5 md:pt-6 md:pl-10 md:pr-10 p-4">
          <div>
            <p className="lg:text-4xl text-3xl font-bold max-w-md sm:pl-1 lg:pl-0">
              Brandable chargers for all your charging needs
            </p>
          </div>
          <div className="flex flex-col items-center lg:flex-grow lg:pl-24 lg:pr-48 pt-10">
            <ChargingOption />
          </div>
        </div>
        <div className="lg:pl-28 md:pl-10 pt-16 p-5">
          <p className="lg:text-4xl text-3xl font-bold pb-6">Why iPark?</p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10 lg:space-y-0 pt-5 lg:pr-28">
            <div className="flex flex-col items-center inline lg:items-start lg:text-left max-w-sm">
              <p className="text-2xl md:text-3xl font-semibold">Simplify</p>
              <p className="py-4 md:py-8 leading-relaxed">
                Choosing, ordering, and maintaining electric vehicle (EV)
                chargers comes with a heavy load of work, responsibilities, and
                hidden costs. We can take those off your plate and manage every
                step of the way so that you can focus on running your core
                business.
              </p>
            </div>
            <div className="flex flex-col items-center inline lg:items-start lg:text-left max-w-sm">
              <p className="text-2xl md:text-3xl font-semibold">Streamline</p>
              <p className="py-4 md:py-8 leading-relaxed">
                With the Virta end-to-end charging solution, you get
                pre-configured smart charging stations based on your needs –
                from standard to ultra-fast charging. We take care of the entire
                lifecycle of your charging stations – from ordering the right
                ones directly from well-known manufacturers to taking care of
                their maintenance.
              </p>
            </div>
            <div className="flex flex-col items-center inline lg:items-start lg:text-left max-w-sm">
              <p className="text-2xl md:text-3xl font-semibold">Save time</p>
              <p className="py-4 md:py-8 leading-relaxed">
                In a traditional business, you’d need to rely on several
                contractors to provide a comprehensive solution and network.
                With Virta, you only have one contract – which minimises the
                cost for you. And as the number of charging sessions increases,
                your expenses won’t.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pl-28 lg:pr-28 md:pl-10 pt-10 p-5">
          <p className="text-3xl lg:text-4xl font-bold">
            Explore available hardware
          </p>
          <div className="flex lg:flex-row flex-col border-slate-200 py-1 lg:py-7 rounded-lg space-y-8 lg:space-y-0 lg:space-x-10 md:pr-5">
            <div className="flex items-center justify-center w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 bg-white border-slate-200 bg-slate-200 py-6 lg:py-7 rounded-lg w-full">
                <div className="h-auto bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1">
                  <div className="relative w-full lg:h-80 h-96">
                    <Image
                      className="rounded-t-lg object-cover"
                      fill
                      src="/assets/AXLU111-2.png"
                      alt="ev charger"
                    />
                  </div>
                  <div className="flex flex-row p-5 items-center justify-between">
                    <div>
                      <p className="font-bold text-xl">AC Chargers</p>
                      <p className="text-sm pt-1 leading-normal">
                        Standard charges for up to 22 kW charging.
                      </p>
                    </div>
                    <div className="text-blue-500 flex items-center text-xl">
                      →
                    </div>
                  </div>
                </div>
                <div className="h-auto bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1">
                  <div className="relative w-full h-80">
                    <Image
                      className="rounded-t-lg object-cover"
                      fill
                      src="/assets/AXLU111-2.png"
                      alt="ev charger"
                    />
                  </div>
                  <div className="flex flex-row p-5 items-center justify-between">
                    <div>
                      <p className="font-bold text-xl">AC Chargers</p>
                      <p className="text-sm pt-1 leading-normal">
                        Standard charges for up to 22 kW charging.
                      </p>
                    </div>
                    <div className="text-blue-500 flex items-center text-xl">
                      →
                    </div>
                  </div>
                </div>
                <div className="h-auto bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1">
                  <div className="relative w-full h-80">
                    <Image
                      className="rounded-t-lg object-cover"
                      fill
                      src="/assets/AXLU111-2.png"
                      alt="ev charger"
                    />
                  </div>
                  <div className="flex flex-row p-5 items-center justify-between">
                    <div>
                      <p className="font-bold text-xl">AC Chargers</p>
                      <p className="text-sm pt-1 leading-normal">
                        Standard charges for up to 22 kW charging.
                      </p>
                    </div>
                    <div className="text-blue-500 flex items-center text-xl">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-6">
          <Carousel />
        </div>
        <div className="relative lg:w-3/4 lg:h-80 h-80 my-4 mx-auto flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/assets/ev_charger.jpg"
              alt="EV Charger"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute top-1/2 px-20 md:px-40 transform -translate-y-1/2 lg:text-left">
              <h1 className="text-2xl md:text-2xl font-bold text-h1TextColour">
                ROI Calculator
              </h1>
              <p className="text-sm sm:text-2xl md:text-2xl mt-3 text-white">
                Find out how long it takes for your EV charging stations to
                start generating profit for your business.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs sm:text-sm md:text-base lg:text-lg shadow-lg"
                >
                  Calculate now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:py-16 lg:pl-20 lg:pr-20 md:pl-10 md:pr-10">
          <p className="text-3xl lg:text-4xl font-bold p-6">
            Your chargers powered by iPark
          </p>
          <div className="flex lg:flex-row flex-col bg-white border-slate-200 bg-slate-200 pt-6 rounded-lg space-y-8 lg:space-y-0 lg:space-x-10 p-5">
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 bg-white border-slate-200 bg-slate-200 py-6 lg:py-7 rounded-lg">
                <div className="h-auto bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1 lg:h-">
                  <div className="relative w-full h-48">
                    <Image
                      className="rounded-t-lg object-cover"
                      fill
                      src="/assets/5e14d890-4a6a-4891-b24c-f0f8eb765bbd.webp"
                      alt="ev charger"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-xl">
                      Smart charging capabilities
                    </p>
                    <p className="text-xs py-3 leading-relaxed">
                      Smart charging allows you to monitor, manage, and restrict
                      the user of chargers remotely to optimise energy
                      consumption.
                    </p>
                    <Link href="" className="text-xs underline text-violet-600">
                      Learn more about smart charging &gt;
                    </Link>
                  </div>
                </div>
                <div className="h-auto bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1">
                  <div className="relative w-full h-48">
                    <Image
                      className="rounded-t-lg object-cover"
                      fill
                      src="/assets/5e14d890-4a6a-4891-b24c-f0f8eb765bbd.webp"
                      alt="ev charger"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-xl">
                      Energy management services
                    </p>
                    <p className="text-xs py-3 leading-relaxed">
                      iPark chargers come armed with smart energy management
                      services. From Dynamic Load Management to Priority
                      charging, managing your energy needs has never been
                      easier.
                    </p>
                    <Link
                      href=""
                      className="text-violet-600 text-xs underline pt-4"
                    >
                      More about iPark energy management &gt;
                    </Link>
                  </div>
                </div>
                <div className="h-auto bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1">
                  <div className="relative w-full h-48">
                    <Image
                      className="rounded-t-lg object-cover"
                      fill
                      src="/assets/5e14d890-4a6a-4891-b24c-f0f8eb765bbd.webp"
                      alt="ev charger"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-xl">
                      Your own brand at the forefront
                    </p>
                    <p className="text-xs py-3 leading-relaxed">
                      Your customer&apos;s focus is on your brand from the
                      moment they catch sight of your charger and throughout the
                      whole charging experience. Branding is available for both
                      the hardware and the software.
                    </p>
                    <Link
                      href=""
                      className="text-violet-600 text-xs underline pt-4"
                    >
                      Learn more about out branding options &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ChargerProcess />
        </div>
        <div className="md:pl-10 sm:pl-6 lg:pl-24 lg:pr-24 pt-10 p-5 lg:p-0">
          <p className="text-4xl font-bold max-w-md lg:p-2 mt-4">
            Learn more about the iPark Charging Solution
          </p>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 bg-white border-slate-200 bg-slate-200 py-6 lg:py-7 rounded-lg">
              <div className="p-4 bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1 lg:h-full">
                <div className="relative w-full h-40">
                  <Image
                    className="rounded-t-lg object-cover"
                    fill
                    src="/assets/5e14d890-4a6a-4891-b24c-f0f8eb765bbd.webp"
                    alt="ev charger"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs">CHARGING SOLUTION</p>
                  <p className="font-semibold text-2xl py-3">
                    Charging business management
                  </p>
                  <button className="text-black border-2 border-solid p-2 rounded mt-4">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1 lg:h-96">
                <div className="relative w-full h-40">
                  <Image
                    className="rounded-t-lg object-cover"
                    fill
                    src="/assets/5e14d890-4a6a-4891-b24c-f0f8eb765bbd.webp"
                    alt="ev charger"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs">CHARGING SOLUTION</p>
                  <p className="font-semibold text-2xl py-3">
                    Smart energy management
                  </p>
                  <button className="text-black border-2 border-solid p-2 rounded mt-4">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1 lg:h-96">
                <div className="relative w-full h-40">
                  <Image
                    className="rounded-t-lg object-cover"
                    fill
                    src="/assets/5e14d890-4a6a-4891-b24c-f0f8eb765bbd.webp"
                    alt="ev charger"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs">CHARGING SOLUTION</p>
                  <p className="font-semibold text-2xl py-3">
                    Payment & invoicing
                  </p>
                  <button className="text-black border-2 border-solid p-2 rounded mt-4">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1 lg:h-96">
                <div className="relative w-full h-40">
                  <Image
                    className="rounded-t-lg object-cover"
                    fill
                    src="/assets/5e14d890-4a6a-4891-b24c-f0f8eb765bbd.webp"
                    alt="ev charger"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs">CHARGING SOLUTION</p>
                  <p className="font-semibold text-2xl py-3">
                    EV driver services
                  </p>
                  <button className="text-black border-2 border-solid p-2 rounded mt-4">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white shadow hover:shadow-lg hover:bg-slate-50 ease-in-out duration-500 rounded-lg transform hover:-translate-y-1 lg:h-96">
                <div className="relative w-full h-40">
                  <Image
                    className="rounded-t-lg object-cover"
                    fill
                    src="/assets/5e14d890-4a6a-4891-b24c-f0f8eb765bbd.webp"
                    alt="ev charger"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs">CHARGING SOLUTION</p>
                  <p className="font-semibold text-2xl py-3">
                    Roaming in EV charging
                  </p>
                  <button className="text-black border-2 border-solid p-2 rounded mt-4">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
