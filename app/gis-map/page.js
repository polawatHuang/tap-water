// app/gis/page.js

import Header from "@/components/Header";
import SupportFooter from "@/components/SupportFooter";
import TopBar from "@/components/TopBar";
import {
  MapPinned,
  Search,
  Home,
  Droplet,
  Trash2,
  QrCode,
  ReceiptText,
  Route,
  UserRound,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Monitor,
  Bell,
  Layers,
  ArrowRight,
} from "lucide-react";

const gisFeatures = [
  {
    icon: MapPinned,
    title: "แสดงตำแหน่งบนแผนที่",
    desc: "แสดงตำแหน่งผู้ใช้น้ำ ผู้ใช้ขยะ มิเตอร์ บ้าน หรือถังขยะผ่านระบบ GIS",
  },
  {
    icon: Search,
    title: "ค้นหาข้อมูลได้หลายรูปแบบ",
    desc: "ค้นหาจากรหัสประจำตัว ชื่อ-นามสกุล บ้านเลขที่ หรือข้อมูลที่ต้องการ",
  },
  {
    icon: CheckCircle2,
    title: "แสดงสถานะการชำระเงิน",
    desc: "หมุดสีเขียวคือชำระแล้ว หมุดสีแดงคือค้างชำระ และสามารถเลือกดูทั้งหมดได้",
  },
  {
    icon: QrCode,
    title: "ชำระเงินผ่าน QR Code",
    desc: "ประชาชนสามารถสแกนชำระเงินผ่านธนาคารได้ทันทีโดยไม่ต้องแจ้งสลิป",
  },
];

const mapPins = [
  { color: "bg-green-500", label: "ชำระแล้ว" },
  { color: "bg-red-500", label: "ค้างชำระ" },
  { color: "bg-blue-500", label: "ประปา" },
  { color: "bg-yellow-400", label: "ขยะ" },
];

const steps = [
  "เข้าสู่ระบบผ่าน Web Browser",
  "เลือกข้อมูลประปา / ขยะ",
  "ค้นหาจากรหัส ชื่อ หรือบ้านเลขที่",
  "ดูสถานะและประวัติชำระเงิน",
  "สแกน QR Code หรือเปิดเส้นทาง",
];

export default function GisPage() {
  return (
    <main className="min-h-screen bg-[#f4f9ff] text-[#073b78]">
      <TopBar />
      <Header />
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e8f5ff] via-white to-[#eef7ff]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0b5db3] shadow-sm">
              <MapPinned size={18} />
              Smart GIS Management
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              ระบบสารสนเทศภูมิศาสตร์
              <br />
              GIS แผนที่
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              แสดงตำแหน่งผู้ใช้น้ำ ผู้ใช้ขยะ มิเตอร์ และถังขยะบนแผนที่
              ตรวจสอบสถานะชำระเงิน ค้นหาข้อมูลย้อนหลัง ดูยอดค้างชำระ
              และชำระเงินผ่าน QR Code ได้ทันที
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-[#0b5db3] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#08498c]">
                เปิดแผนที่ GIS
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-white px-7 py-4 font-bold text-[#0b5db3] shadow-sm transition hover:bg-blue-50">
                ดูคู่มือการใช้งาน
              </button>
            </div>
          </div>

          {/* HERO MAP MOCKUP */}
          <div className="rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white shadow-inner">
              <div className="flex items-center justify-between border-b border-blue-100 bg-[#003f8f] px-5 py-4 text-white">
                <div>
                  <p className="text-sm text-blue-100">ระบบสารสนเทศประปา/ขยะ</p>
                  <h2 className="text-lg font-extrabold">Smart GIS Management</h2>
                </div>
                <Layers size={28} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                <div className="border-r border-blue-100 bg-[#f8fbff] p-4">
                  <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
                    <p className="mb-2 text-sm font-bold text-[#073b78]">
                      ค้นหาข้อมูล
                    </p>
                    <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm text-slate-500">
                      <Search size={16} />
                      รหัส / ชื่อ / บ้านเลขที่
                    </div>
                  </div>

                  <div className="space-y-3">
                    {mapPins.map((pin) => (
                      <div
                        key={pin.label}
                        className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 text-sm shadow-sm"
                      >
                        <span className={`h-3 w-3 rounded-full ${pin.color}`} />
                        <span className="font-semibold text-slate-700">
                          {pin.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-[360px] bg-[linear-gradient(135deg,#dff1ff,#ffffff)]">
                  <div className="absolute inset-5 rounded-3xl bg-white/70 shadow-inner">
                    <div className="grid h-full grid-cols-5 grid-rows-4 gap-4 p-8">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className={`mx-auto h-5 w-5 rounded-full shadow-lg ${
                            i % 4 === 0
                              ? "bg-red-500"
                              : i % 4 === 1
                              ? "bg-green-500"
                              : i % 4 === 2
                              ? "bg-blue-500"
                              : "bg-yellow-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-5 right-5 rounded-2xl bg-white p-4 shadow-xl">
                    <p className="text-sm font-bold text-[#073b78]">
                      สถานะพื้นที่
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      ชำระแล้ว / ค้างชำระ / ทั้งหมด
                    </p>
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
            ระบบ GIS รองรับการแสดงตำแหน่งประปา/ขยะ ตรวจสอบสถานะชำระเงิน
            และชำระผ่าน QR Code ได้ทันที
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <p className="font-semibold text-[#0b5db3]">GIS Features</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#073b78]">
            ความสามารถของระบบ GIS
          </h2>
          <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-600">
            ออกแบบสำหรับเจ้าหน้าที่และประชาชน ใช้งานผ่าน Web Browser
            รองรับทั้งระบบ Windows และมือถือ
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {gisFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-4 text-[#0b5db3]">
                <item.icon size={32} />
              </div>

              <h3 className="text-xl font-extrabold text-[#073b78]">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN MAP SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
            {/* FILTER PANEL */}
            <aside className="border-b border-blue-100 bg-[#f8fbff] p-7 lg:border-b-0 lg:border-r">
              <h2 className="text-2xl font-extrabold text-[#073b78]">
                ค้นหาและกรองข้อมูล
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                เลือกประเภทข้อมูลและสถานะการชำระเงินเพื่อแสดงบนแผนที่
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b78]">
                    ประเภทระบบ
                  </label>
                  <select className="w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 outline-none focus:border-[#0b5db3]">
                    <option>ทั้งหมด</option>
                    <option>ระบบประปา</option>
                    <option>ระบบขยะ</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b78]">
                    คำค้นหา
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-3">
                    <Search size={18} className="text-[#0b5db3]" />
                    <input
                      className="w-full bg-transparent outline-none"
                      placeholder="รหัส / ชื่อ / บ้านเลขที่"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b78]">
                    สถานะการชำระเงิน
                  </label>

                  <div className="space-y-3">
                    {[
                      ["ทั้งหมด", "bg-blue-500"],
                      ["ชำระแล้ว", "bg-green-500"],
                      ["ค้างชำระ", "bg-red-500"],
                    ].map(([label, color]) => (
                      <label
                        key={label}
                        className="flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
                      >
                        <input type="radio" name="status" />
                        <span className={`h-3 w-3 rounded-full ${color}`} />
                        <span className="font-semibold text-slate-700">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full rounded-2xl bg-[#0b5db3] px-6 py-4 font-bold text-white shadow-lg transition hover:bg-[#08498c]">
                  ค้นหาบนแผนที่
                </button>
              </div>
            </aside>

            {/* MAP PLACEHOLDER */}
            <div className="relative min-h-[620px] bg-[linear-gradient(135deg,#e8f5ff,#ffffff)]">
              <div className="absolute inset-6 rounded-[2rem] border border-blue-100 bg-white/75 shadow-inner">
                <div className="grid h-full grid-cols-6 grid-rows-5 gap-4 p-10">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className={`mx-auto h-6 w-6 rounded-full border-2 border-white shadow-lg ${
                        i % 5 === 0
                          ? "bg-red-500"
                          : i % 5 === 1
                          ? "bg-green-500"
                          : i % 5 === 2
                          ? "bg-blue-500"
                          : i % 5 === 3
                          ? "bg-yellow-400"
                          : "bg-sky-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute left-10 top-10 rounded-2xl bg-white p-4 shadow-xl">
                <p className="text-sm font-bold text-[#073b78]">
                  ใส่ Google Map / Map Component ที่นี่
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  สามารถแทนที่ด้วย Leaflet, Google Maps หรือ Mapbox ได้
                </p>
              </div>

              <div className="absolute bottom-10 right-10 rounded-3xl bg-white p-5 shadow-xl">
                <h3 className="font-extrabold text-[#073b78]">
                  สัญลักษณ์แผนที่
                </h3>

                <div className="mt-4 space-y-3">
                  {mapPins.map((pin) => (
                    <div key={pin.label} className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-full ${pin.color}`} />
                      <span className="text-sm font-semibold text-slate-700">
                        {pin.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL + QR SECTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-12 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-[#0b5db3] p-3 text-white">
              <UserRound size={30} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#073b78]">
                รายละเอียดแต่ละพิกัด
              </h2>
              <p className="text-slate-600">
                แสดงข้อมูลผู้ใช้งาน ประวัติชำระเงิน ยอดค้างชำระ และเอกสารที่เกี่ยวข้อง
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                icon: Home,
                title: "ข้อมูลบ้าน / ถังขยะ / มิเตอร์",
                desc: "แสดงที่อยู่ รายละเอียดจุดบริการ และพิกัดบนแผนที่",
              },
              {
                icon: ReceiptText,
                title: "ประวัติใบแจ้งหนี้ / ใบเสร็จ",
                desc: "เรียกดู E-Invoice และ E-Receipt เพื่อใช้เป็นหลักฐาน",
              },
              {
                icon: AlertCircle,
                title: "ยอดค้างชำระทั้งหมด",
                desc: "ตรวจสอบยอดค้างชำระย้อนหลังและสถานะล่าสุด",
              },
              {
                icon: Route,
                title: "นำทางไปยังพิกัด",
                desc: "เชื่อมโยงเส้นทางไปยังตำแหน่งเป้าหมายได้ทันที",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-5"
              >
                <item.icon className="mb-3 text-[#0b5db3]" />
                <h3 className="font-bold text-[#073b78]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-[#003f8f] to-[#0074d9] p-7 text-white shadow-xl">
          <QrCode size={50} />
          <h2 className="mt-5 text-2xl font-extrabold">
            QR Payment
          </h2>
          <p className="mt-4 leading-8 text-blue-50">
            ชำระเงินผ่าน QR Code ของธนาคารได้ทันที ไม่ต้องส่งสลิปแจ้งการชำระ
            พร้อมตรวจสอบสถานะการชำระเงินย้อนหลังได้
          </p>

          <div className="mt-6 rounded-3xl bg-white p-5 text-[#073b78]">
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50">
              <QrCode size={80} />
            </div>
            <p className="mt-4 text-center text-sm font-bold">
              ใส่รูป QR Code ตัวอย่างที่นี่
            </p>
          </div>
        </div>
      </section>

      {/* DEVICE SUPPORT */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm">
            <Monitor className="text-[#0b5db3]" size={44} />
            <h2 className="mt-5 text-2xl font-extrabold text-[#073b78]">
              รองรับระบบ Windows
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              เจ้าหน้าที่สามารถใช้งานผ่านคอมพิวเตอร์สำนักงาน
              เข้าถึงข้อมูลผ่าน Web Browser ได้สะดวก
            </p>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm">
            <Smartphone className="text-[#0b5db3]" size={44} />
            <h2 className="mt-5 text-2xl font-extrabold text-[#073b78]">
              รองรับมือถือ
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              รองรับการแสดงผลผ่านมือถือและแท็บเล็ต
              เหมาะสำหรับเจ้าหน้าที่ภาคสนามและประชาชน
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-[#073b78]">
            ขั้นตอนการใช้งาน GIS
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-extrabold text-[#0b5db3]">
                  {index + 1}
                </div>

                <p className="text-sm font-bold leading-7 text-[#073b78]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SupportFooter title="ระบบ GIS แผนที่" />
    </main>
  );
}