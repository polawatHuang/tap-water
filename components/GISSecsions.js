import Image from "next/image";

const GISSecsions = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">
            
            {/* HEADER */}
            <div className="border-b border-blue-100 bg-gradient-to-r from-[#eef7ff] to-white px-8 py-8">
            <div className="max-w-4xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0b5db3]">
                ระบบสารสนเทศภูมิศาสตร์ GIS
                </div>

                <h2 className="text-3xl font-extrabold leading-tight text-[#073b78]">
                ระบบ GIS และชำระเงินออนไลน์
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                รองรับการแสดงข้อมูลตำแหน่งผู้ใช้งานผ่านแผนที่ GIS
                ตรวจสอบสถานะชำระเงิน เรียกดูใบแจ้งหนี้และใบเสร็จ
                พร้อมชำระเงินผ่าน QR Code ได้ทันที
                </p>
            </div>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2">
            
            {/* LEFT SIDE */}
            <div className="space-y-8">

                {/* LOGIN GIS */}
                <div className="rounded-[2rem] border border-blue-100 bg-[#f8fbff] p-6">
                <div className="mb-5">
                    <p className="text-sm font-semibold text-[#0b5db3]">
                    ขั้นตอนที่ 1
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold text-[#073b78]">
                    เข้าสู่ระบบ GIS
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                    รองรับทั้งผู้ดูแลระบบและผู้ใช้งานทั่วไป
                    สามารถเข้าใช้งานผ่าน Web Browser ได้ทันที
                    </p>
                </div>

                <div className="flex h-[360px] items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-white">
                    <Image
                      src="/images/water/gis/Picture26.png"
                      alt="Login GIS"
                      width={220}
                      height={220}
                      className="object-contain max-h-full max-w-full"
                    />
                </div>
                </div>

                {/* FEATURES */}
                <div className="rounded-[2rem] border border-blue-100 bg-white p-6">
                <h3 className="text-2xl font-extrabold text-[#073b78]">
                    ความสามารถของระบบ
                </h3>

                <div className="mt-6 space-y-4">
                    {[
                    "แสดงตำแหน่งผู้ใช้น้ำ/ขยะผ่านระบบ GIS",
                    "แสดงสถานะชำระแล้วและค้างชำระ",
                    "ค้นหาจากชื่อ บ้านเลขที่ หรือรหัสผู้ใช้งาน",
                    "เรียกดูประวัติการชำระย้อนหลัง",
                    "แสดงรายละเอียดในแต่ละพิกัด",
                    "เชื่อมโยงเส้นทางไปยังตำแหน่งเป้าหมาย",
                    "รองรับทั้ง Windows และมือถือ",
                    ].map((item) => (
                    <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-blue-50 px-5 py-4"
                    >
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0b5db3]" />
                        <p className="leading-7 text-slate-700">{item}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

                {/* GIS MAP */}
                <div className="rounded-[2rem] border border-blue-100 bg-[#f8fbff] p-6">
                <div className="mb-5">
                    <p className="text-sm font-semibold text-[#0b5db3]">
                    ขั้นตอนที่ 2
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold text-[#073b78]">
                    แสดงข้อมูลผ่านแผนที่ GIS
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                    แสดงตำแหน่งผู้ใช้งานพร้อมสถานะการชำระเงิน
                    โดยหมุดสีเขียวคือชำระแล้ว และสีแดงคือค้างชำระ
                    </p>
                </div>

                <div className="flex h-[360px] items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-white">
                    <Image
                      src="/images/water/gis/Picture27.png"
                      alt="GIS Map"
                      width={400}
                      height={220}
                      className="object-contain max-h-full max-w-full"
                    />
                </div>
                </div>

                {/* QR PAYMENT */}
                <div className="rounded-[2rem] border border-blue-100 bg-[#f8fbff] p-6">
                <div className="mb-5">
                    <p className="text-sm font-semibold text-[#0b5db3]">
                    ขั้นตอนที่ 3
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold text-[#073b78]">
                    ชำระเงินผ่าน QR Code
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                    ประชาชนสามารถสแกนชำระเงินผ่านธนาคารได้ทันที
                    โดยไม่ต้องแจ้งหลักฐานการชำระเงิน
                    </p>
                </div>

                <div className="flex h-[360px] items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-white">
                    <Image
                      src="/images/water/gis/Picture28.png"
                      alt="QR Payment"
                      width={260}
                      height={220}
                      className="object-contain max-h-full max-w-full"
                    />
                </div>
                </div>
            </div>
            </div>

            {/* FOOTER FEATURES */}
            <div className="border-t border-blue-100 bg-gradient-to-r from-[#f8fbff] to-white p-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                
                {[
                {
                    title: "E-Invoice & E-Receipt",
                    desc: "แสดงใบแจ้งหนี้และใบเสร็จอิเล็กทรอนิกส์ย้อนหลัง",
                },
                {
                    title: "แจ้งข่าวสาร",
                    desc: "ส่งข่าวสารและข้อความแจ้งเตือนถึงประชาชน",
                },
                {
                    title: "Mobile Friendly",
                    desc: "รองรับทั้งระบบ Windows Tablet และมือถือ",
                },
                {
                    title: "Real-Time Payment",
                    desc: "ตรวจสอบสถานะการชำระเงินได้ทันที",
                },
                ].map((item) => (
                <div
                    key={item.title}
                    className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
                >
                    <h4 className="text-lg font-extrabold text-[#073b78]">
                    {item.title}
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                    {item.desc}
                    </p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    )
}

export default GISSecsions;