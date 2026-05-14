import { Phone, Mail, MapPin } from "lucide-react";

export default function SupportFooter() {
  return (
    <>
      <section className="container-main pb-0">
        <div className="rounded-t-2xl bg-[#004b9b] text-white p-6 grid md:grid-cols-[230px_1fr_330px_150px] gap-5 items-center">
          <div className="h-32 rounded-xl bg-white/15 flex items-center justify-center">
            <img
              src="/images/call-center.webp"
              alt="Call Center"
              className="h-32 w-auto object-contain"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold">
              เราพร้อมให้บริการและสนับสนุนการใช้งานระบบ
            </h3>
            <p className="text-blue-100 mt-2">
              สอบถามข้อมูลเพิ่มเติม / ขอรับการสนับสนุน
            </p>
            <button className="mt-4 bg-white text-[#004b9b] px-5 py-2 rounded-lg font-medium">
              ติดต่อเรา ›
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <p className="flex gap-2">
              <Phone size={18} /> 0-2141-6000
            </p>
            <p className="flex gap-2">
              <Mail size={18} /> saraban@municipality.go.th
            </p>
            <p className="flex gap-2">
              <MapPin size={18} /> 123 หมู่ 1 ตำบลของเรา อำเภอของเรา จังหวัดของเรา
              12345
            </p>
          </div>

          <div className="text-center">
            <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center mx-auto">
              <img
                src="/images/qr-code.webp"
                alt="LINE Official QR Code"
                className="w-24 h-24 object-contain"
              />
            </div>
            <p className="text-sm mt-2">LINE Official Account</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#003f82] text-white text-sm">
        <div className="container-main py-4 text-center">
          © 2024 เทศบาลตำบลของเรา สงวนลิขสิทธิ์ | นโยบายความเป็นส่วนตัว |
          ข้อกำหนดการใช้งาน | แผนผังเว็บไซต์
        </div>
      </footer>
    </>
  );
}