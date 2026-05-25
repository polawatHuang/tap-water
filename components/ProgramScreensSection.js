"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ProgramScreensSection({ title, subtitle, screens = [] }) {
  const swiperRef = useRef(null);
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <div className="mb-8 text-center">
        <h2 className="mt-2 text-3xl font-extrabold text-[#073b78]">{title}</h2>
        <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-600">{subtitle}</p>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="!pb-12"
      >
        {screens.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
              <div className="relative h-64 bg-blue-50 flex items-center justify-center">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[#0b5db3]">
                    <ImageIcon size={56} />
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-extrabold text-[#073b78]">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <style jsx global>{`
          .swiper-button-next, .swiper-button-prev {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 2px 8px 0 rgba(11,93,179,0.08);
            color: #0b5db3;
            top: 50%;
            transform: translateY(-50%);
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 20px;
            font-weight: bold;
          }
        `}</style>
      </Swiper>
    </section>
  );
}