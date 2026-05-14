import {
  Home,
  Droplet,
  Trash2,
  MapPin,
  ClipboardList,
  Phone,
} from "lucide-react";

const menus = [
  { label: "หน้าแรก", icon: Home },
  { label: "ระบบประปา", icon: Droplet },
  { label: "ระบบขยะ", icon: Trash2 },
  { label: "GIS แผนที่", icon: MapPin },
  { label: "รายงาน", icon: ClipboardList },
  { label: "ติดต่อเรา", icon: Phone },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container-main py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-30 h-30 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src="/images/logo.webp"
              alt="โลโก้เทศบาลตำบลของเรา"
              className="w-30 h-30 object-contain"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl font-semibold text-[#063b75]">
              ระบบสารสนเทศการจัดเก็บค่าธรรมเนียม
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-[#003f82] leading-tight">
              ประปาและขยะมูลฝอย
            </h1>
            <p className="text-lg md:text-xl text-[#063b75]">
              เทศบาลตำบลของเรา
            </p>
          </div>
        </div>

        <nav className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-5">
          {menus.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-1 text-[#003f82] font-medium pb-2 ${
                  index === 0 ? "border-b-4 border-[#003f82]" : ""
                }`}
              >
                <Icon size={28} strokeWidth={2.5} />
                <span className="text-xs md:text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}