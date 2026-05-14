import { Megaphone } from "lucide-react";

export default function Announcement() {
  return (
    <div className="bg-[#e8f4ff] border-y border-blue-100">
      <div className="container-main py-3 flex items-center justify-between gap-4 text-sm md:text-base">
        <div className="flex items-center gap-3">
          <Megaphone className="text-[#0054a6]" />
          <b>ประกาศ :</b>
          <span>
            แจ้งปิดปรับปรุงระบบชั่วคราว วันเสาร์ที่ 25 พฤษภาคม 2567 เวลา
            22.00 - 02.00 น.
          </span>
        </div>
        <button className="hidden md:block text-[#0054a6] font-medium">
          ดูประกาศทั้งหมด ›
        </button>
      </div>
    </div>
  );
}