'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const logos = [
  { id: 1, src: '/assets/maestro-card.png', alt: 'Maestro card' },
  { id: 2, src: '/assets/Mastercard-logo.svg.webp', alt: 'Mastercard' },
  { id: 3, src: '/assets/V_Pay_logo.svg.png', alt: 'V-Pay' },
  { id: 4, src: '/assets/visa-logo-800x450.jpg', alt: 'Visa Electron' },
  { id: 5, src: '/assets/mobilepay-logo.png', alt: 'MobilePay' },
]

export default function CardBrand() {
  return (
    <div className="my-10 flex justify-center items-center">
      <div className="w-full max-w-[1280px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="!rounded-lg"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex justify-center items-center h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={50}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
