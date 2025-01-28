'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const logos = [
  { id: 1, src: '/assets/1024px-Tesla_logo.png', alt: 'Logo 1' },
  { id: 2, src: '/assets/1024px-Tesla_logo.png', alt: 'Logo 2' },
  { id: 3, src: '/assets/1024px-Tesla_logo.png', alt: 'Logo 3' },
  { id: 4, src: '/assets/1024px-Tesla_logo.png', alt: 'Logo 4' },
  { id: 5, src: '/assets/1024px-Tesla_logo.png', alt: 'Logo 5' },
  { id: 6, src: '/assets/1024px-Tesla_logo.png', alt: 'Logo 6' },
]

export default function Carousel() {
  return (
    <div className="my-10 flex justify-center">
      <div className="w-full lg:w-4/5 max-w-[1280px]"> 
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
            425: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="!rounded-lg"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex justify-center items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={50}
                  height={30}
                  className="rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}