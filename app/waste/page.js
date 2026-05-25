import Header from "@/components/Header";
import ProgramScreensSection from "@/components/ProgramScreensSection";
import SupportFooter from "@/components/SupportFooter";
import TopBar from "@/components/TopBar";
import {
  Trash2,
  Home,
  ReceiptText,
  QrCode,
  MapPinned,
  Cloud,
  Smartphone,
  FileSpreadsheet,
  Bell,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Printer,
  ArrowRight,
} from "lucide-react";
import wasteImages from "@/mock/waste";
import PrinterSection from "@/components/PrinterSection";
import GISSecsions from "@/components/GISSecsions";
import LINENotificationSection from "@/components/LINENotificationSection";

const features = [
  {
    icon: Cloud,
    title: "Cloud Database",
    desc: "ใช้งานข้อมูลได้ทุกที่ผ่าน Internet ทั้ง Wi-Fi และ SIM",
  },
  {
    icon: Smartphone,
    title: "รองรับ POS ภาคสนาม",
    desc: "บันทึกข้อมูลและพิมพ์ใบแจ้งหนี้จากเครื่องพกพาได้ทันที",
  },
  {
    icon: QrCode,
    title: "ชำระเงินผ่าน QR Code",
    desc: "สแกนจ่ายผ่านธนาคาร และตัดยอดกึ่งอัตโนมัติ",
  },
  {
    icon: ReceiptText,
    title: "E-Invoice / E-Receipt",
    desc: "เรียกดูใบแจ้งหนี้และใบเสร็จย้อนหลังผ่านเว็บไซต์",
  },
];

const reports = [
  "รายงานสรุปผู้ใช้ขยะทั้งหมด",
  "รายงานสรุปการชำระค่าขยะประจำเดือน",
  "รายงานผู้ค้างชำระและจดหมายแจ้งเตือน",
  "ใบนำส่งเงินประจำวัน",
  "บัญชีคุมทะเบียนการใช้ใบเสร็จ",
  "รายงาน กค. 3 / กค. 4 สำหรับ E-Laas",
];

const steps = [
  "ลงทะเบียนข้อมูลผู้ใช้ขยะ",
  "บันทึกค่าธรรมเนียมรายเดือน/ครึ่งปี/รายปี",
  "ออกใบแจ้งหนี้หรือใบเสร็จ",
  "ชำระเงินผ่าน QR Code",
  "ตรวจสอบรายงานและยอดค้างชำระ",
];

export default function WastePage() {
  return (
    <main className="min-h-screen bg-[#f4f9ff] text-[#073b78]">
      <TopBar />
      <Header />
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e8f5ff] via-white to-[#eefaf0]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
              <Trash2 size={18} />
              ระบบจัดเก็บค่าธรรมเนียมขยะมูลฝอย
            </div>

            <h1 className="text-3xl font-extrabold leading-tight text-[#073b78] md:text-5xl">
              ระบบขยะมูลฝอยดิจิทัล
              <br />
              สำหรับองค์กรปกครองส่วนท้องถิ่น
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 md:text-lg">
              บริหารจัดการข้อมูลครัวเรือน กิจการ ค่าธรรมเนียมการเก็บ/ขน/กำจัดขยะ
              ออกใบแจ้งหนี้ ใบเสร็จ ตรวจสอบสถานะชำระเงิน และแสดงพิกัด GIS
              ได้ครบในระบบเดียว
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700">
                เข้าสู่ระบบขยะ
                <ArrowRight size={18} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-[#0b5db3] bg-white px-6 py-3 font-semibold text-[#0b5db3] shadow-sm transition hover:bg-blue-50">
                ดูคู่มือการใช้งาน
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-green-100 via-white to-blue-100 p-8">
                <div className="flex justify-center">
                  <div className="relative h-72 w-full max-w-md rounded-3xl bg-white shadow-inner">
                    <div className="absolute left-8 top-8 rounded-2xl bg-green-600 p-5 text-white shadow-xl">
                      <Trash2 size={58} />
                    </div>
                    <div className="absolute right-8 top-10 rounded-2xl bg-blue-600 p-4 text-white shadow-xl">
                      <QrCode size={48} />
                    </div>
                    <div className="absolute bottom-8 left-10 right-10 rounded-2xl bg-white p-5 shadow-xl">
                      <p className="text-sm font-semibold text-slate-500">
                        สถานะการชำระวันนี้
                      </p>
                      <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                        <div>
                          <p className="text-2xl font-bold text-green-600">
                            324
                          </p>
                          <p className="text-xs text-slate-500">ชำระแล้ว</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-red-500">48</p>
                          <p className="text-xs text-slate-500">ค้างชำระ</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-blue-600">12</p>
                          <p className="text-xs text-slate-500">โซน</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-24 right-12 rounded-full bg-yellow-400 p-4 shadow-lg">
                      <CreditCard className="text-white" size={34} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="border-y border-blue-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 text-sm md:text-base">
          <Bell className="shrink-0 text-[#0b5db3]" />
          <p className="font-semibold text-[#073b78]">ประกาศ :</p>
          <p className="text-slate-700">
            ระบบรองรับค่าธรรมเนียมเก็บ/ขน/กำจัดขยะมูลฝอย พร้อมสแกนจ่ายออนไลน์
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <p className="font-semibold text-green-600">
            Waste Management System
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#073b78]">
            ความสามารถหลักของระบบขยะ
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-green-100 p-4 text-green-700">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#073b78]">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN MODULES */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-12 lg:grid-cols-3">
        <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-green-600 p-3 text-white">
              <Home size={30} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#073b78]">
                จัดการข้อมูลผู้ใช้ขยะ
              </h2>
              <p className="text-slate-600">
                รองรับข้อมูลครัวเรือน กิจการ สถานประกอบการ และประวัติชำระเงิน
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["ข้อมูลผู้ใช้ขยะ", "จัดเก็บข้อมูลรายเดือน ครึ่งปี หรือรายปี"],
              ["ประวัติชำระเงิน", "ตรวจสอบย้อนหลังและยอดค้างชำระ"],
              ["ออกใบเสร็จ", "พิมพ์รายโซนหรือรายรายการ"],
              ["ระบบแจ้งเตือน", "แจ้งหนี้และแจ้งข่าวสารผ่าน LINE"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-5"
              >
                <CheckCircle2 className="mb-3 text-green-600" />
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
            สำรองข้อมูลผ่าน Internet เรียกข้อมูลกลับได้เมื่อเกิดปัญหา
            และรองรับการใช้งานหลายเครื่องในหน่วยงาน
          </p>
          <div className="mt-6 rounded-2xl bg-white/15 p-4">
            <ShieldCheck className="mb-2" />
            <p className="font-semibold">
              ปลอดภัย ตรวจสอบได้ สำรองข้อมูลสม่ำเสมอ
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
                ระบบสารสนเทศภูมิศาสตร์ GIS
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                แสดงตำแหน่งบ้านหรือถังขยะบนแผนที่ ค้นหาจากรหัส ชื่อ บ้านเลขที่
                พร้อมสถานะชำระเงิน
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

      {/* REPORTS */}
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
            <Printer className="text-green-600" size={34} />
            <h2 className="text-2xl font-extrabold text-[#073b78]">
              ใบเสร็จและเครื่องพิมพ์
            </h2>
          </div>

          <div className="space-y-4 text-slate-700">
            <p className="leading-8">
              รองรับใบเสร็จกระดาษต่อเนื่อง ใบเสร็จอิเล็กทรอนิกส์
              และการพิมพ์ผ่านเครื่อง POS Android All in One
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-green-50 p-5">
                <ReceiptText className="mb-3 text-green-600" />
                <p className="font-bold text-[#073b78]">E-Receipt</p>
                <p className="mt-1 text-sm">จัดเก็บง่าย เรียกดูย้อนหลังได้</p>
              </div>
              <div className="rounded-2xl bg-blue-50 p-5">
                <QrCode className="mb-3 text-[#0b5db3]" />
                <p className="font-bold text-[#073b78]">QR Payment</p>
                <p className="mt-1 text-sm">สแกนจ่ายได้ทันที</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#073b78]">
            ขั้นตอนการใช้งานระบบ
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

      <ProgramScreensSection  title="ระบบจัดเก็บค่าธรรมเนียมเก็บ/ขน/กำจัดขยะมูลฝอยแบบมาตรฐานและแบบมือถือ" subtitle="" screens={wasteImages.slice(0, 11)} />
      <PrinterSection />
      <GISSecsions />
      <LINENotificationSection />
      <SupportFooter title="ตัวอย่างระบบขยะมูลฝอย" />
    </main>
  );
}
