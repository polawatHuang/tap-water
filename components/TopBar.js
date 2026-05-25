import { Phone, Mail, Clock, User } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#003f82] text-white text-xs md:text-sm">
      <div className="container-main h-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4 overflow-hidden">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Phone size={15} /> 0-2141-6000
          </span>
          <span className="hidden sm:flex items-center gap-1 whitespace-nowrap">
            <Mail size={15} /> saraban@municipality.go.th
          </span>
          <span className="hidden md:flex items-center gap-1 whitespace-nowrap">
            <Clock size={15} /> จันทร์ - ศุกร์ 08.30 - 16.30 น.
          </span>
        </div>

        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="hidden md:block">ขนาดตัวอักษร</span>
          <button className="px-2 py-1 h-[28px] w-[28px] bg-white text-[#003f82] rounded-md font-medium text-xs">ก</button>
          <button className="relative px-2 h-[28px] w-[28px] bg-white text-[#003f82] rounded-md font-medium text-xl"><span className="absolute top-[-2px] left-[8px]">ก</span></button>
          <button className="relative h-[28px] w-[28px] bg-white text-[#003f82] rounded-md font-medium text-2xl"><span className="absolute top-[-4px] left-[7px]">ก</span></button>
          <span className="flex items-center gap-1">
            <User size={15} /> เข้าสู่ระบบเจ้าหน้าที่
          </span>
        </div>
      </div>
    </div>
  );
}