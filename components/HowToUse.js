import { UserPlus, Gauge, Calculator, ReceiptText, QrCode } from "lucide-react";

const steps = [
  ["ลงทะเบียน/เพิ่มข้อมูลผู้ใช้งาน", UserPlus],
  ["บันทึกการอ่านมาตรวัดน้ำหรือบันทึกการจัดเก็บขยะ", Gauge],
  ["ระบบคำนวณค่าธรรมเนียมอัตโนมัติ", Calculator],
  ["ออกใบแจ้งหนี้/ใบเสร็จรับเงิน", ReceiptText],
  ["ประชาชนชำระเงินผ่าน QR Code", QrCode],
];

export default function HowToUse() {
  return (
    <section className="container-main pb-6">
      <div className="card p-6">
        <h3 className="text-center text-2xl font-bold mb-6">
          ขั้นตอนการใช้งานระบบ
        </h3>

        <div className="grid md:grid-cols-5 gap-5">
          {steps.map(([label, Icon], index) => (
            <div key={label} className="text-center relative">
              <div className="mx-auto w-10 h-10 rounded-full bg-blue-100 text-[#0054a6] flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <Icon className="mx-auto mt-3 text-[#0054a6]" size={38} />
              <p className="mt-3 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}