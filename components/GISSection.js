import { MapPin } from "lucide-react";

const pins = [
  ["ชำระเงินแล้ว (ประปา)", "bg-green-600"],
  ["ค้างชำระ (ประปา)", "bg-red-600"],
  ["ชำระเงินแล้ว (ขยะ)", "bg-blue-600"],
  ["ค้างชำระ (ขยะ)", "bg-sky-700"],
  ["ถังขยะสาธารณะ", "bg-yellow-500"],
];

export default function GISSection() {
  return (
    <section className="container-main pb-6">
      <div className="card overflow-hidden grid lg:grid-cols-[9fr_3fr]">
        {/* ฝั่งซ้าย: เนื้อหา GIS + BG image */}
        <div className="relative p-6 flex items-stretch">
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="/images/map.webp"
              alt="GIS background"
              className="pointer-events-none select-none w-full h-full object-cover opacity-90"
              aria-hidden="true"
            />
          </div>
          <div className="relative z-10 md:w-[40%]">
            <h3 className="text-2xl font-bold">ระบบสารสนเทศภูมิศาสตร์ (GIS)</h3>
            <p className="mt-3 leading-relaxed">
              แสดงตำแหน่งผู้ใช้น้ำประปา/ถังขยะ ตรวจสอบสถานะการชำระเงิน
              แบบเรียลไทม์บนแผนที่
            </p>
            <button className="mt-5 px-5 py-2 rounded-lg bg-[#0054a6] text-white">
              ดูแผนที่ GIS ›
            </button>
          </div>
        </div>

        {/* ฝั่งขวา: รายการ pins */}
        <div className="p-5 bg-white">
          {pins.map(([label, color]) => (
            <div key={label} className="flex items-center gap-2 mb-3 text-sm">
              <MapPin className={`${color} text-white rounded-full p-1`} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}