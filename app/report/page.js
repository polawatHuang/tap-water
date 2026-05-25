// app/reports/page.js

import Header from "@/components/Header";
import SupportFooter from "@/components/SupportFooter";
import TopBar from "@/components/TopBar";
import {
  FileSpreadsheet,
  Droplet,
  Trash2,
  ReceiptText,
  FileText,
  Users,
  CalendarDays,
  WalletCards,
  AlertTriangle,
  QrCode,
  BookOpen,
  ClipboardList,
  Download,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const waterReports = [
  {
    icon: Users,
    title: "รายงานสรุปผู้ใช้น้ำประปาทั้งหมด",
    desc: "สรุปรายชื่อและข้อมูลผู้ใช้น้ำประปาทั้งหมดในระบบ",
  },
  {
    icon: Droplet,
    title: "รายงานสรุปการใช้น้ำประจำเดือน",
    desc: "แสดงข้อมูลการใช้น้ำของผู้ใช้น้ำในแต่ละเดือน",
  },
  {
    icon: BookOpen,
    title: "เล็ดเยอร์รายตัวลูกหนี้ ป.17",
    desc: "รายงานลูกหนี้รายตัวตามรูปแบบมาตรฐาน",
  },
  {
    icon: ClipboardList,
    title: "เลขอ่านมาตรวัดน้ำ ป.31",
    desc: "ใช้แทนสมุดจดเลขมาตรแบบเดิมได้ทันที",
  },
  {
    icon: WalletCards,
    title: "บัญชีประจำตัวผู้เก็บเงิน ป.32",
    desc: "แสดงยอดเงิน ยอดจัดเก็บ ยอดค้างชำระ และวันที่ชำระเงิน",
  },
  {
    icon: AlertTriangle,
    title: "รายงานผู้ค้างชำระ",
    desc: "สรุปจำนวนและจดหมายแจ้งเตือนผู้ค้างชำระ",
  },
  {
    icon: CalendarDays,
    title: "ใบสรุปนำส่งเงินประจำวัน",
    desc: "รายงานนำส่งเงินรายวัน ทั้งแบบละเอียดและสรุปรายโซน",
  },
  {
    icon: ReceiptText,
    title: "บัญชีคุมทะเบียนการใช้ใบเสร็จ",
    desc: "ควบคุมการใช้ใบเสร็จรับเงินในแต่ละเดือน",
  },
  {
    icon: QrCode,
    title: "รายการธุรกรรม QR Code",
    desc: "แสดงรายการธุรกรรมทางการเงินที่สแกนจ่ายผ่าน QR Code",
  },
  {
    icon: FileSpreadsheet,
    title: "รายงาน กค. 3 / กค. 4",
    desc: "รายงานมาตรฐานสำหรับนำเข้าสู่ระบบ E-Laas ได้ทันที",
  },
];

const wasteReports = [
  {
    icon: Users,
    title: "รายงานสรุปผู้ใช้ขยะทั้งหมด",
    desc: "สรุปข้อมูลผู้ใช้บริการขยะมูลฝอยทั้งหมด",
  },
  {
    icon: CalendarDays,
    title: "รายงานสรุปการชำระค่าขยะประจำเดือน",
    desc: "แสดงยอดจัดเก็บและสถานะการชำระค่าขยะรายเดือน",
  },
  {
    icon: AlertTriangle,
    title: "รายงานและจดหมายแจ้งเตือนผู้ค้างชำระ",
    desc: "สรุปรายชื่อผู้ค้างชำระและสร้างเอกสารแจ้งเตือน",
  },
  {
    icon: WalletCards,
    title: "ใบนำส่งเงินประจำวัน",
    desc: "รายงานการนำส่งเงินค่าขยะประจำวัน",
  },
  {
    icon: BookOpen,
    title: "เล็ดเยอร์รายตัวลูกหนี้",
    desc: "รายงานลูกหนี้ค่าขยะตามรูปแบบมาตรฐาน",
  },
  {
    icon: ReceiptText,
    title: "บัญชีคุมทะเบียนการใช้ใบเสร็จ",
    desc: "ควบคุมจำนวนและการใช้งานใบเสร็จในแต่ละเดือน",
  },
  {
    icon: ClipboardList,
    title: "จำนวนการใช้งานใบเสร็จในแต่ละเดือน",
    desc: "ตรวจสอบปริมาณใบเสร็จที่ใช้ในแต่ละรอบเดือน",
  },
  {
    icon: QrCode,
    title: "รายการธุรกรรม QR Code",
    desc: "แสดงรายการสแกนจ่ายผ่านธนาคาร",
  },
  {
    icon: FileSpreadsheet,
    title: "รายงาน กค. 3 / กค. 4",
    desc: "รายงานมาตรฐานสำหรับนำเข้าสู่ระบบ E-Laas ได้ทันที",
  },
];

const sampleReports = [
  {
    title: "ตัวอย่างรายงานสรุปรายชื่อ",
    desc: "ใส่รูปตัวอย่างรายงานรายชื่อผู้ใช้น้ำหรือผู้ใช้ขยะ",
    image: "/images/reports/user-summary.png",
  },
  {
    title: "ตัวอย่างรายงานนำส่งเงิน",
    desc: "ใส่รูปตัวอย่างใบนำส่งเงินประจำวัน",
    image: "/images/reports/daily-payment.png",
  },
  {
    title: "ตัวอย่างรายงานเล็ดเยอร์",
    desc: "ใส่รูปตัวอย่างรายงานเล็ดเยอร์รายตัวลูกหนี้",
    image: "/images/reports/ledger.png",
  },
  {
    title: "ตัวอย่างรายงาน กค. 3 / กค. 4",
    desc: "ใส่รูปตัวอย่างรายงานมาตรฐานสำหรับ E-Laas",
    image: "/images/reports/elaas.png",
  },
];

function ReportCard({ item, color = "blue" }) {
  const Icon = item.icon;

  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mb-4 inline-flex rounded-2xl p-4 ${
          color === "green"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-[#0b5db3]"
        }`}
      >
        <Icon size={30} />
      </div>

      <h3 className="text-lg font-extrabold text-[#073b78]">{item.title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-[#f4f9ff] text-[#073b78]">
      <TopBar />
      <Header />
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e8f5ff] via-white to-[#eef7ff]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0b5db3] shadow-sm">
              <FileSpreadsheet size={18} />
              Reports & Documents
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              ระบบรายงาน
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              ศูนย์รวมรายงานระบบประปาและระบบขยะ รองรับรายงานสรุป รายงานลูกหนี้
              ใบนำส่งเงิน บัญชีคุมใบเสร็จ รายงาน QR Payment และรายงานมาตรฐาน
              กค. 3 / กค. 4 สำหรับนำเข้าสู่ระบบ E-Laas
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-[#0b5db3] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#08498c]">
                ดูรายงานทั้งหมด
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-white px-7 py-4 font-bold text-[#0b5db3] shadow-sm transition hover:bg-blue-50">
                <Download size={18} />
                ดาวน์โหลดตัวอย่าง
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Droplet,
              title: "รายงานระบบประปา",
              value: "10+",
              desc: "รายงานผู้ใช้น้ำ การใช้น้ำ เล็ดเยอร์ ป.17 ป.31 ป.32",
            },
            {
              icon: Trash2,
              title: "รายงานระบบขยะ",
              value: "9+",
              desc: "รายงานผู้ใช้ขยะ ค่าธรรมเนียม ค้างชำระ ใบนำส่งเงิน",
            },
            {
              icon: FileSpreadsheet,
              title: "รองรับ Excel / PDF",
              value: "Export",
              desc: "บันทึกรายงานย้อนหลังและส่งออกไฟล์ตามความต้องการ",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4 text-[#0b5db3]">
                <item.icon size={34} />
              </div>

              <p className="text-3xl font-extrabold text-[#073b78]">
                {item.value}
              </p>

              <h2 className="mt-2 text-xl font-extrabold text-[#073b78]">
                {item.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WATER REPORTS */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-semibold text-[#0b5db3]">Water Reports</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#073b78]">
              รายงานระบบประปา
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              ครอบคลุมรายงานผู้ใช้น้ำ การใช้น้ำประจำเดือน เล็ดเยอร์ลูกหนี้
              สมุดจดเลขมาตร ใบนำส่งเงิน และรายงานสำหรับ E-Laas
            </p>
          </div>

          <div className="rounded-2xl bg-blue-100 px-5 py-3 font-bold text-[#0b5db3]">
            Excel / PDF
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {waterReports.map((item) => (
            <ReportCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* WASTE REPORTS */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-semibold text-green-600">Waste Reports</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#073b78]">
              รายงานระบบขยะ
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              ครอบคลุมรายงานผู้ใช้ขยะ การชำระค่าขยะ ค้างชำระ ใบนำส่งเงิน
              บัญชีคุมใบเสร็จ เล็ดเยอร์ และรายงานมาตรฐาน กค. 3 / กค. 4
            </p>
          </div>

          <div className="rounded-2xl bg-green-100 px-5 py-3 font-bold text-green-700">
            Excel
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {wasteReports.map((item) => (
            <ReportCard key={item.title} item={item} color="green" />
          ))}
        </div>
      </section>

      {/* REPORT PROCESS */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <p className="font-semibold text-[#0b5db3]">Report Workflow</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#073b78]">
              ขั้นตอนการออกรายงาน
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {[
              "เลือกประเภทรายงาน",
              "กำหนดเดือน / ปี / โซน",
              "ตรวจสอบข้อมูล",
              "ส่งออก Excel / PDF",
              "นำส่งหน่วยงานหรือ E-Laas",
            ].map((step, index) => (
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

      {/* SAMPLE IMAGES */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-8 text-center">
          <p className="font-semibold text-[#0b5db3]">Report Screenshots</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#073b78]">
            ตัวอย่างหน้าจอรายงาน
          </h2>
          <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-600">
            สามารถนำรูปตัวอย่างรายงานจากไฟล์ Word มาใส่ในโฟลเดอร์
            <span className="font-semibold text-[#0b5db3]">
              {" "}
              /public/images/reports
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sampleReports.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm"
            >
              <div className="flex h-[320px] items-center justify-center border-b border-blue-100 bg-[#f8fbff]">
                <div className="text-center">
                  <FileText className="mx-auto text-[#0b5db3]" size={58} />
                  <p className="mt-4 text-sm text-slate-400">
                    ใส่รูป: {item.image}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-[#073b78]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STANDARD DOCUMENTS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#003f8f] to-[#0074d9] p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-2xl bg-white/15 p-4">
                <CheckCircle2 size={38} />
              </div>

              <h2 className="text-3xl font-extrabold">
                รองรับรายงานมาตรฐานราชการ
              </h2>

              <p className="mt-5 leading-8 text-blue-50">
                รายงานทั้งหมดออกแบบเพื่อให้เหมาะสมกับการทำงานของหน่วยงานท้องถิ่น
                สามารถเรียกดูย้อนหลัง ส่งออกไฟล์ และนำข้อมูลไปใช้ต่อในระบบงานอื่นได้
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "รายงานย้อนหลัง",
                "Excel / PDF Export",
                "E-Laas กค. 3 / กค. 4",
                "ตรวจสอบยอดค้างชำระ",
                "บัญชีคุมใบเสร็จ",
                "QR Payment Transaction",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4"
                >
                  <CheckCircle2 size={22} />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SupportFooter title="ระบบรายงาน" />
    </main>
  );
}