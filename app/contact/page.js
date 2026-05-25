"use client";

import Header from "@/components/Header";
import SupportFooter from "@/components/SupportFooter";
import TopBar from "@/components/TopBar";
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  Send,
  MessageCircle,
  Globe,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({});

  return (
    <main className="min-h-screen bg-[#f4f9ff]">
      <TopBar />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e8f5ff] via-white to-[#eef7ff]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0b5db3] shadow-sm">
              <Headphones size={18} />
              Contact & Support Center
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-[#073b78] md:text-5xl">
              ติดต่อเรา
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              สอบถามข้อมูลเพิ่มเติม ขอใบเสนอราคา แจ้งปัญหาการใช้งาน
              หรือขอรับการสนับสนุนเกี่ยวกับระบบประปา ระบบขยะ GIS
              และระบบสารสนเทศสำหรับหน่วยงานท้องถิ่น
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Phone,
              title: "โทรศัพท์",
              value: "0-2141-6000",
              desc: "ติดต่อเจ้าหน้าที่ในเวลาราชการ",
            },
            {
              icon: Mail,
              title: "E-Mail",
              value: "saraban@municipality.go.th",
              desc: "สำหรับติดต่อและสอบถามข้อมูล",
            },
            {
              icon: Clock3,
              title: "เวลาทำการ",
              value: "จันทร์ - ศุกร์",
              desc: "08.30 - 16.30 น.",
            },
            {
              icon: Globe,
              title: "Website",
              value: "tap-water-thailand.vercel.app",
              desc: "ระบบสารสนเทศออนไลน์",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4 text-[#0b5db3]">
                <item.icon size={32} />
              </div>

              <h2 className="text-xl font-extrabold text-[#073b78]">
                {item.title}
              </h2>

              <p className="mt-3 text-lg font-semibold text-slate-700">
                {item.value}
              </p>

              <p className="mt-2 leading-7 text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0b5db3]">
                ส่งข้อความถึงเรา
              </div>

              <h2 className="text-3xl font-extrabold text-[#073b78]">
                แบบฟอร์มติดต่อ
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                กรอกข้อมูลของท่านเพื่อให้เจ้าหน้าที่ติดต่อกลับ
                หรือสอบถามข้อมูลเกี่ยวกับระบบงานต่างๆ
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const name = form[0].value;
                const phone = form[1].value;
                const email = form[2].value;
                const subject = form[3].value;
                const message = form[4].value;
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, phone, email, subject, message }),
                });
                if (res.ok) {
                  alert("ส่งข้อความเรียบร้อยแล้ว");
                  form.reset();
                } else {
                  alert("เกิดข้อผิดพลาดในการส่งข้อความ");
                }
              }}
            >
              <div>
                <label className="mb-2 block text-sm font-bold text-[#073b78]">
                  ชื่อ - นามสกุล
                </label>

                <input
                  type="text"
                  placeholder="กรอกชื่อของท่าน"
                  className="w-full rounded-2xl border border-blue-100 bg-[#f8fbff] px-5 py-4 outline-none transition focus:border-[#0b5db3]"
                  ref={(e) => setForm({ name: e?.value })}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b78]">
                    เบอร์โทรศัพท์
                  </label>

                  <input
                    type="text"
                    placeholder="08x-xxx-xxxx"
                    className="w-full rounded-2xl border border-blue-100 bg-[#f8fbff] px-5 py-4 outline-none transition focus:border-[#0b5db3]"
                    ref={(e) => setForm({ phone: e?.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#073b78]">
                    E-Mail
                  </label>

                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-2xl border border-blue-100 bg-[#f8fbff] px-5 py-4 outline-none transition focus:border-[#0b5db3]"
                    ref={(e) => setForm({ email: e?.value })}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#073b78]">
                  หัวข้อ
                </label>

                <select
                  className="w-full rounded-2xl border border-blue-100 bg-[#f8fbff] px-5 py-4 outline-none transition focus:border-[#0b5db3]"
                  ref={(e) => setForm({ subject: e?.value })}
                >
                  <option>สอบถามข้อมูลทั่วไป</option>
                  <option>ระบบประปา</option>
                  <option>ระบบขยะ</option>
                  <option>ระบบ GIS</option>
                  <option>แจ้งปัญหาการใช้งาน</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#073b78]">
                  รายละเอียด
                </label>

                <textarea
                  rows={6}
                  placeholder="กรอกรายละเอียด..."
                  className="w-full rounded-2xl border border-blue-100 bg-[#f8fbff] px-5 py-4 outline-none transition focus:border-[#0b5db3]"
                  ref={(e) => setForm({ message: e?.value })}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#0b5db3] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#08498c]"
              >
                <Send size={20} />
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {/* MAP */}
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">
              <div className="border-b border-blue-100 px-8 py-6">
                <h2 className="text-2xl font-extrabold text-[#073b78]">
                  ที่ตั้งหน่วยงาน
                </h2>
              </div>

              <div className="flex h-[420px] items-center justify-center bg-[linear-gradient(135deg,#eef7ff,#ffffff)]">
                {/* PUT MAP HERE */}
                <div className="text-center">
                  <MapPin size={60} className="mx-auto text-[#0b5db3]" />

                  <p className="mt-4 text-slate-500">
                    ใส่ Google Map หรือรูปแผนที่ที่นี่
                  </p>
                </div>
              </div>
            </div>

            {/* SUPPORT */}
            <div className="rounded-[2rem] bg-gradient-to-br from-[#003f8f] to-[#0074d9] p-8 text-white shadow-xl">
              <div className="mb-5 inline-flex rounded-2xl bg-white/15 p-4">
                <ShieldCheck size={36} />
              </div>

              <h2 className="text-3xl font-extrabold">
                ศูนย์บริการและสนับสนุน
              </h2>

              <p className="mt-5 leading-8 text-blue-50">
                ทีมงานพร้อมให้คำปรึกษา แนะนำการใช้งาน
                และช่วยเหลือด้านระบบงานสารสนเทศ สำหรับหน่วยงานท้องถิ่นทั่วประเทศ
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
                  <Phone size={24} />
                  <div>
                    <p className="font-bold">Call Center</p>
                    <p className="text-blue-100">0-2141-6000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
                  <Mail size={24} />
                  <div>
                    <p className="font-bold">E-Mail Support</p>
                    <p className="text-blue-100">saraban@municipality.go.th</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
                  <MessageCircle size={24} />
                  <div>
                    <p className="font-bold">LINE Official</p>
                    <p className="text-blue-100">@municipality</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
                  <FaFacebookF size={24} />
                  <div>
                    <p className="font-bold">Facebook Page</p>
                    <p className="text-blue-100">
                      Municipality Information System
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SupportFooter title="ติดต่อเรา" />
    </main>
  );
}
