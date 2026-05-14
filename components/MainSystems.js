import {
  Droplet,
  Trash2,
  UserRound,
  CreditCard,
  Calculator,
  ReceiptText,
  QrCode,
  Home,
  FileText,
} from "lucide-react";

const waterItems = [
  ["ข้อมูลผู้ใช้น้ำและมิเตอร์", UserRound],
  ["บันทึกการอ่านมาตรวัดน้ำ", CreditCard],
  ["คำนวณค่าน้ำอัตโนมัติ", Calculator],
  ["ออกใบแจ้งหนี้และใบเสร็จรับเงิน", ReceiptText],
  ["ชำระเงินผ่าน QR Code", QrCode],
];

const trashItems = [
  ["ข้อมูลครัวเรือนและสถานประกอบการ", Home],
  ["ค่าธรรมเนียมและการจัดเก็บ", FileText],
  ["ออกใบเสร็จรับเงิน / E-Receipt", ReceiptText],
  ["ชำระเงินผ่าน QR Code", QrCode],
];

function SystemCard({ type }) {
  const isWater = type === "water";
  const items = isWater ? waterItems : trashItems;
  const Icon = isWater ? Droplet : Trash2;

  return (
    <div className="card overflow-hidden" style={{ backgroundImage: `url(/images/bg-${isWater ? "2" : "3"}.webp)`, backgroundPosition: "center", backgroundSize: "cover" , backgroundRepeat: "no-repeat" }}>
      <div className="grid md:grid-cols-2">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                isWater ? "bg-blue-600" : "bg-green-600"
              }`}
            >
              <Icon size={28} />
            </div>
            <h3
              className={`text-2xl font-bold ${
                isWater ? "text-blue-700" : "text-green-700"
              }`}
            >
              {isWater ? "ระบบประปา" : "ระบบขยะ"}
            </h3>
          </div>

          <p className="mt-4 text-[#174a7c] leading-relaxed">
            {isWater
              ? "บริหารจัดการข้อมูลผู้ใช้น้ำ ประวัติการใช้น้ำ คำนวณค่าน้ำประปา ออกใบแจ้งหนี้ และรายงานต่าง ๆ ได้อย่างครบวงจร"
              : "บริหารจัดการข้อมูลครัวเรือน/กิจการ ค่าธรรมเนียมเก็บขน ขน และกำจัดขยะ บันทึกการจัดเก็บ และออกใบเสร็จรับเงิน"}
          </p>

          <button
            className={`mt-5 px-5 py-2 rounded-lg text-white font-medium ${
              isWater ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            เข้าสู่ระบบ{isWater ? "ประปา" : "ขยะ"} ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4">
        {items.map(([label, ItemIcon]) => (
          <div
            key={label}
            className="bg-white rounded-xl border border-blue-100 p-3 text-center shadow-sm"
          >
            <ItemIcon className="mx-auto text-[#0054a6]" size={27} />
            <p className="mt-2 text-xs md:text-sm font-medium text-[#063b75]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MainSystems() {
  return (
    <section className="container-main py-7">
      <div className="text-center mb-5">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003f82]">
          — ระบบงานหลัก —
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <SystemCard type="water" />
        <SystemCard type="trash" />
      </div>
    </section>
  );
}