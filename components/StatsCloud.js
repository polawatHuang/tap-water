import { Building2, Users, ClipboardList, ShieldCheck } from "lucide-react";

const stats = [
  ["400+", "หน่วยงานที่ไว้วางใจ", Building2],
  ["50,000+", "ผู้ใช้งานในระบบ", Users],
  ["2 ล้าน+", "รายการต่อเดือน", ClipboardList],
  ["ปลอดภัย", "สำรองข้อมูลทุกวัน", ShieldCheck],
];

export default function StatsCloud() {
  return (
    <section className="container-main grid lg:grid-cols-[1fr_420px] gap-5 pb-6">
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-5">ประสบการณ์และความน่าเชื่อถือ</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(([number, label, Icon]) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="text-[#0054a6]" size={38} />
              <div>
                <p className="text-2xl font-bold text-[#0054a6]">{number}</p>
                <p className="text-sm">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-[#004b9b] text-white p-6 shadow-xl flex items-center justify-between" style={{ backgroundImage: "url(/images/cloud.webp)", backgroundPosition: "center", backgroundSize: "cover"  }}>
        <div className="w-[60%]">
          <h3 className="text-xl font-bold">ระบบฐานข้อมูลบน Cloud</h3>
          <p className="mt-2 text-blue-100">
            ปลอดภัย เชื่อถือได้ สำรองข้อมูลอัตโนมัติ เรียกคืนได้เมื่อเกิดปัญหา
          </p>
        </div>
      </div>
    </section>
  );
}