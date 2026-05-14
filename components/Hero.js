import { Cloud, FileText, QrCode, MapPin } from "lucide-react";

const features = [
  { title: "ทำงานผ่านระบบ Cloud ได้ทุกที่ทุกเวลา", icon: Cloud },
  { title: "ออกใบแจ้งหนี้ E-Invoice / E-Receipt", icon: FileText },
  { title: "รองรับการชำระเงินผ่าน QR Code", icon: QrCode },
  { title: "แผนที่ GIS ตรวจสอบข้อมูลเชิงพื้นที่", icon: MapPin },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#dff3ff] via-white to-[#e8f7ff]">
      {/* BG Image absolute, faded */}
      <img
        src="/images/bg-1.webp"
        alt="background cover"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-90 z-0"
        aria-hidden="true"
      />
      <div className="container-main py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center min-h-[410px] relative z-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#073f7f]">
            บริหารจัดการสาธารณูปโภค
            <br />
            เพื่อคุณภาพชีวิตที่ดีของประชาชน
          </h2>

          <p className="mt-4 text-base md:text-lg text-[#174a7c] leading-relaxed">
            ระบบจัดเก็บค่าธรรมเนียมประปา และขยะมูลฝอย
            ทันสมัย โปร่งใส ตรวจสอบได้ รองรับการทำงานยุคดิจิทัล
          </p>

          <div className="mt-7 grid grid-cols-2 md:grid-cols-4 bg-white/95 rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 text-center border-r border-b md:border-b-0 border-blue-100 last:border-r-0"
                >
                  <Icon className="mx-auto text-[#0054a6]" size={34} />
                  <p className="mt-2 text-xs md:text-sm text-[#063b75]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}