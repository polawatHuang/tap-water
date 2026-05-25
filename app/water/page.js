import Header from "@/components/Header";
import SupportFooter from "@/components/SupportFooter";
import TopBar from "@/components/TopBar";
import ProgramScreensSection from "@/components/ProgramScreensSection";
import {
  Droplet,
  Gauge,
  ReceiptText,
  QrCode,
  MapPinned,
  Cloud,
  Smartphone,
  FileSpreadsheet,
  Bell,
  ShieldCheck,
  CheckCircle2,
  Printer,
  Waves,
  ArrowRight,
  LockKeyhole,
  Wifi,
} from "lucide-react";
import waterImages from "@/mock/water";
import PrinterSection from "@/components/PrinterSection";
import GISSecsions from "@/components/GISSecsions";
import LINENotificationSection from "@/components/LINENotificationSection";

const features = [
  {
    icon: Gauge,
    title: "บันทึกเลขมาตรน้ำ",
    desc: "จัดเก็บประวัติผู้ใช้น้ำและประวัติการใช้น้ำรายเดือน",
  },
  {
    icon: Droplet,
    title: "คำนวณค่าน้ำอัตโนมัติ",
    desc: "รองรับอัตราคงที่ อัตราก้าวหน้า และรูปแบบที่หน่วยงานกำหนด",
  },
  {
    icon: ReceiptText,
    title: "E-Invoice / E-Receipt",
    desc: "ออกใบแจ้งหนี้และใบเสร็จอิเล็กทรอนิกส์ เรียกดูย้อนหลังได้",
  },
  {
    icon: QrCode,
    title: "QR Payment",
    desc: "สแกนชำระผ่านธนาคาร ตรวจสอบธุรกรรมได้สะดวก",
  },
];

const reports = [
  "รายงานสรุปผู้ใช้น้ำประปาทั้งหมด",
  "รายงานสรุปการใช้น้ำประจำเดือน",
  "เล็ดเยอร์รายตัวลูกหนี้ ป.17",
  "เลขอ่านมาตรวัดน้ำ ป.31",
  "บัญชีประจำตัวผู้เก็บเงิน ป.32",
  "รายงาน กค. 3 / กค. 4 สำหรับ E-Laas",
];

const steps = [
  "ลงทะเบียนข้อมูลผู้ใช้น้ำ",
  "บันทึกเลขมาตรวัดน้ำ",
  "ระบบคำนวณค่าน้ำอัตโนมัติ",
  "ออกใบแจ้งหนี้ / ใบเสร็จ",
  "ชำระเงินผ่าน QR Code",
];

export default function WaterPage() {
  return (
    <main className="min-h-screen bg-[#f4f9ff] text-[#073b78]">
      <TopBar />
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e6f5ff] via-white to-[#f0f8ff]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0b5db3] shadow-sm">
              <Droplet size={18} />
              ระบบจัดเก็บค่าธรรมเนียมน้ำประปา
            </div>

            <h1 className="text-3xl font-extrabold leading-tight text-[#073b78] md:text-5xl">
              ระบบประปาดิจิทัล
              <br />
              สำหรับหน่วยงานท้องถิ่น
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 md:text-lg">
              บริหารข้อมูลผู้ใช้น้ำ บันทึกเลขมาตร คำนวณค่าน้ำ ออกใบแจ้งหนี้
              ใบเสร็จ ตรวจสอบยอดค้างชำระ และแสดงตำแหน่งมิเตอร์ผ่าน GIS
              ได้ครบในระบบเดียว
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#0b5db3] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#08498c]">
                เข้าสู่ระบบประปา
                <ArrowRight size={18} />
              </button>
              <a
                href="/files/โปรแกรมประปา 2569.docx"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-[#0b5db3] bg-white px-6 py-3 font-semibold text-[#0b5db3] shadow-sm transition hover:bg-blue-50"
              >
                ดูคู่มือการใช้งาน
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-100 via-white to-sky-100 p-8">
              <div className="relative h-72 w-full rounded-3xl bg-white shadow-inner">
                <div className="absolute left-8 top-8 rounded-2xl bg-[#0b5db3] p-5 text-white shadow-xl">
                  <Droplet size={58} />
                </div>

                <div className="absolute right-8 top-10 rounded-2xl bg-sky-500 p-4 text-white shadow-xl">
                  <Gauge size={48} />
                </div>

                <div className="absolute bottom-8 left-10 right-10 rounded-2xl bg-white p-5 shadow-xl">
                  <p className="text-sm font-semibold text-slate-500">
                    สรุปการอ่านมาตรวันนี้
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">1,248</p>
                      <p className="text-xs text-slate-500">ผู้ใช้น้ำ</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">926</p>
                      <p className="text-xs text-slate-500">ชำระแล้ว</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-500">74</p>
                      <p className="text-xs text-slate-500">ค้างชำระ</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-24 right-12 rounded-full bg-blue-100 p-4 shadow-lg">
                  <Waves className="text-[#0b5db3]" size={34} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="border-y border-blue-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 text-sm md:text-base">
          <Bell className="shrink-0 text-[#0b5db3]" />
          <p className="font-semibold text-[#073b78]">ประกาศ :</p>
          <p className="text-slate-700">
            ระบบรองรับ Cloud, Mobile POS, E-Invoice, E-Receipt, GIS และ QR
            Payment
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <p className="font-semibold text-[#0b5db3]">
            Water Supply Management
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#073b78]">
            ความสามารถหลักของระบบประปา
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-4 text-[#0b5db3]">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#073b78]">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Modules */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-12 lg:grid-cols-3">
        <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-[#0b5db3] p-3 text-white">
              <Droplet size={30} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#073b78]">
                จัดการข้อมูลผู้ใช้น้ำและมิเตอร์
              </h2>
              <p className="text-slate-600">
                ค้นหา จัดเก็บประวัติการใช้น้ำ คำนวณค่าน้ำ
                และตรวจสอบสถานะชำระเงิน
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["ข้อมูลผู้ใช้น้ำ", "จัดเก็บข้อมูลผู้ใช้น้ำและประวัติมิเตอร์"],
              ["คำนวณค่าน้ำ", "รองรับอัตราคงที่ อัตราก้าวหน้า และอัตราพิเศษ"],
              ["Smart Meter", "ดูสถานะมิเตอร์ Online และสั่งเปิด-ปิดวาล์วได้"],
              ["แจ้งเตือนผ่าน LINE", "ส่งใบแจ้งหนี้ ใบเสร็จ และยอดค้างชำระ"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-5"
              >
                <CheckCircle2 className="mb-3 text-[#0b5db3]" />
                <h3 className="font-bold text-[#073b78]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#003f8f] to-[#0074d9] p-7 text-white shadow-xl">
          <Cloud size={50} />
          <h2 className="mt-5 text-2xl font-extrabold">
            ระบบฐานข้อมูลบน Cloud
          </h2>
          <p className="mt-4 leading-8 text-blue-50">
            ใช้งานได้หลายผู้ใช้งาน หลายเครื่อง ผ่าน Internet
            พร้อมระบบสำรองข้อมูล และเรียกคืนข้อมูลเมื่อเกิดปัญหา
          </p>
          <div className="mt-6 rounded-2xl bg-white/15 p-4">
            <ShieldCheck className="mb-2" />
            <p className="font-semibold">
              ปลอดภัย ใช้งานง่าย รองรับหน่วยงานท้องถิ่น
            </p>
          </div>
        </div>
      </section>

      {/* GIS */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-7">
              <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-4 text-[#0b5db3]">
                <MapPinned size={36} />
              </div>
              <h2 className="text-2xl font-extrabold text-[#073b78]">
                ระบบ GIS ตำแหน่งมิเตอร์น้ำ
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                แสดงตำแหน่งมิเตอร์ผู้ใช้น้ำบน Google Map ค้นหาจากรหัส ชื่อ
                บ้านเลขที่ พร้อมสถานะชำระเงิน
              </p>
              <button className="mt-6 rounded-xl bg-[#0b5db3] px-5 py-3 font-semibold text-white shadow transition hover:bg-[#08498c]">
                เปิดแผนที่ GIS
              </button>
            </div>

            <div className="relative min-h-72 bg-[linear-gradient(135deg,#e8f5ff,#f7fbff)] lg:col-span-2">
              <div className="absolute inset-5 rounded-3xl bg-white/70 shadow-inner">
                <div className="grid h-full grid-cols-4 grid-rows-3 gap-4 p-8">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className={`mx-auto h-5 w-5 rounded-full shadow-lg ${
                        i % 3 === 0
                          ? "bg-red-500"
                          : i % 3 === 1
                            ? "bg-green-500"
                            : "bg-blue-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports + POS */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-12 lg:grid-cols-2">
        <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <FileSpreadsheet className="text-[#0b5db3]" size={34} />
            <h2 className="text-2xl font-extrabold text-[#073b78]">
              รายงานมาตรฐาน
            </h2>
          </div>

          <div className="space-y-3">
            {reports.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-blue-50 px-4 py-3 text-slate-700"
              >
                <CheckCircle2 className="shrink-0 text-green-600" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <Smartphone className="text-[#0b5db3]" size={34} />
            <h2 className="text-2xl font-extrabold text-[#073b78]">
              Mobile POS และการพิมพ์ภาคสนาม
            </h2>
          </div>

          <p className="leading-8 text-slate-700">
            เจ้าหน้าที่สามารถบันทึกเลขมาตร คำนวณค่าน้ำ และพิมพ์ใบแจ้งหนี้ผ่าน
            Mobile Thermal Printer ได้ทันที พร้อมเชื่อมข้อมูลเข้าสำนักงาน
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-blue-50 p-5">
              <Printer className="mb-3 text-[#0b5db3]" />
              <p className="font-bold text-[#073b78]">Thermal Printer</p>
              <p className="mt-1 text-sm text-slate-600">
                พิมพ์ใบแจ้งหนี้ทันที
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-5">
              <Wifi className="mb-3 text-[#0b5db3]" />
              <p className="font-bold text-[#073b78]">Wi-Fi / SIM</p>
              <p className="mt-1 text-sm text-slate-600">
                เชื่อมต่อข้อมูล Cloud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-Invoice */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-[#003f8f] p-7 text-white shadow-xl">
            <ReceiptText size={46} />
            <h2 className="mt-5 text-2xl font-extrabold">
              E-Invoice & E-Receipt
            </h2>
            <p className="mt-4 leading-8 text-blue-50">
              ลดการใช้กระดาษ จัดเก็บเป็นไฟล์รูปภาพ พิมพ์ใหม่ได้
              และเรียกดูได้ทั้งเจ้าหน้าที่และประชาชน
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <QrCode className="text-[#0b5db3]" size={46} />
            <h2 className="mt-5 text-2xl font-extrabold text-[#073b78]">
              ชำระเงินออนไลน์
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              ประชาชนชำระค่าน้ำผ่าน QR Code ได้ทันที
              ตรวจสอบรายการธุรกรรมย้อนหลังได้
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <LockKeyhole className="text-[#0b5db3]" size={46} />
            <h2 className="mt-5 text-2xl font-extrabold text-[#073b78]">
              สิทธิ์ผู้ใช้งาน
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              กำหนดผู้ใช้งานและรหัสผ่าน รองรับผู้ดูแล เจ้าหน้าที่
              และผู้ใช้งานทั่วไป
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#073b78]">
            ขั้นตอนการใช้งานระบบประปา
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-extrabold text-[#0b5db3]">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold leading-6 text-[#073b78]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramScreensSection title="โปรแกรมจัดเก็บค่าธรรมเนียมน้ำประปาแบบมาตรฐานและแบบมือถือ" subtitle="" screens={waterImages.slice(0, 21)} />
      <PrinterSection />
      <GISSecsions />
      <LINENotificationSection />
      <SupportFooter />
    </main>
  );
}
