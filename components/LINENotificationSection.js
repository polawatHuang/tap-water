import Image from "next/image";

const LINENotificationSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
    <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">

        {/* HEADER */}
        <div className="border-b border-blue-100 bg-gradient-to-r from-[#eef7ff] to-white px-8 py-8">
        <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0b5db3]">
            ระบบอิเล็กทรอนิกส์และ Mobile POS
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#073b78]">
            E-Invoice, Mobile POS
            <br />
            และ LINE Notification
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
            รองรับใบแจ้งหนี้และใบเสร็จอิเล็กทรอนิกส์
            พร้อมเครื่องบันทึกข้อมูล Android แบบพกพา
            และระบบแจ้งเตือนผ่าน LINE Official Account
            </p>
        </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-12 p-8">

        {/* E-INVOICE */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            
            {/* LEFT */}
            <div>
            <div className="mb-5">
                <p className="text-sm font-semibold text-[#0b5db3]">
                ระบบใบเสร็จอิเล็กทรอนิกส์
                </p>

                <h3 className="mt-1 text-2xl font-extrabold text-[#073b78]">
                E-Invoice & E-Receipt
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                รองรับใบแจ้งหนี้และใบเสร็จอิเล็กทรอนิกส์
                สามารถเรียกดูย้อนหลัง พิมพ์ใหม่ และจัดเก็บได้สะดวก
                </p>
            </div>

            <div className="space-y-4">
                {[
                "อยู่ในรูปแบบไฟล์รูปภาพ เรียกดูย้อนหลังได้ตลอดเวลา",
                "ลดค่าใช้จ่ายกระดาษต่อเนื่อง",
                "มีทั้งใบแจ้งหนี้และใบเสร็จรับเงิน",
                "รองรับการใช้งานทั้งเจ้าหน้าที่และประชาชน",
                "ใช้งานผ่าน Website และมือถือได้",
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

            {/* RIGHT */}
            <div className="rounded-[2rem] border border-blue-100 bg-[#f8fbff] p-6">
            <div className="mb-5">
                <h4 className="text-xl font-extrabold text-[#073b78]">
                ตัวอย่าง E-Invoice & E-Receipt
                </h4>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                
                <div className="rounded-3xl border-2 border-dashed border-blue-200 bg-white p-5">
                <div className="flex h-[320px] items-center justify-center">
                    <Image
                      src="/images/water/gis/Picture29.png"
                      alt="E-Invoice"
                      width={120}
                      height={320}
                      className="object-contain max-h-full max-w-full"
                    />
                </div>
                </div>

                <div className="rounded-3xl border-2 border-dashed border-blue-200 bg-white p-5">
                <div className="flex h-[320px] items-center justify-center">
                    <Image
                      src="/images/water/gis/Picture30.png"
                      alt="E-Receipt"
                      width={120}
                      height={320}
                      className="object-contain max-h-full max-w-full"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* MOBILE POS */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* LEFT IMAGE */}
            <div className="rounded-[2rem] border border-blue-100 bg-[#f8fbff] p-6">
            <div className="mb-5">
                <p className="text-sm font-semibold text-[#0b5db3]">
                Android All in One
                </p>

                <h3 className="mt-1 text-2xl font-extrabold text-[#073b78]">
                เครื่องบันทึกข้อมูลแบบพกพา
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                รองรับการทำงานภาคสนาม เชื่อมต่อผ่าน Wi-Fi หรือ SIM
                พร้อมเครื่องพิมพ์ในตัว
                </p>
            </div>

            <div className="flex h-[420px] items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-white">
                <Image
                  src="/images/water/gis/Picture31.png"
                  alt="Mobile POS"
                  width={180}
                  height={220}
                  className="object-contain max-h-full max-w-full"
                />
            </div>
            </div>

            {/* RIGHT SPECS */}
            <div className="space-y-6">

            {/* HARDWARE */}
            <div className="rounded-[2rem] border border-blue-100 bg-white p-6">
                <h4 className="text-2xl font-extrabold text-[#073b78]">
                คุณสมบัติเครื่องบันทึกข้อมูล
                </h4>

                <div className="mt-6 space-y-3">
                {[
                    "ระบบปฏิบัติการ Android",
                    "CPU 8 Core ความเร็ว 1.6 GHz",
                    "RAM 4 GB / FLASH 64 GB",
                    'หน้าจอ Touch Screen 6.0" HD',
                    "รองรับ Bluetooth / NFC / GPS",
                    "รองรับ Wi-Fi และ 3G/4G",
                    "เครื่องพิมพ์ความร้อน 58 mm",
                    "รองรับ SIM Card และ USB",
                ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0b5db3]" />
                    <p className="leading-7 text-slate-700">{item}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* FEATURES */}
            <div className="rounded-[2rem] border border-blue-100 bg-white p-6">
                <h4 className="text-2xl font-extrabold text-[#073b78]">
                คุณสมบัติการทำงาน
                </h4>

                <div className="mt-6 space-y-3">
                {[
                    "เชื่อมต่อฐานข้อมูล Cloud Database",
                    "บันทึกข้อมูลภาคสนามแบบ Real-Time",
                    "คำนวณค่าบริการและพิมพ์ใบแจ้งหนี้ได้ทันที",
                    "รองรับ Mobile Thermal Printer",
                    "ใช้งานบน Android ได้ทุกรุ่น",
                    "รองรับ QR Code Payment",
                ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0b5db3]" />
                    <p className="leading-7 text-slate-700">{item}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>

        {/* LINE NOTIFICATION */}
        <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-[#eef7ff] via-white to-[#f8fbff]">
            
            <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2">

            {/* LEFT */}
            <div>
                <div className="mb-5">
                <p className="text-sm font-semibold text-[#0b5db3]">
                    LINE Official Account
                </p>

                <h3 className="mt-1 text-3xl font-extrabold text-[#073b78]">
                    ระบบแจ้งเตือนผ่าน LINE
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                    แจ้งเตือนใบแจ้งหนี้ ใบเสร็จ และยอดค้างชำระ
                    แบบ Real-Time ผ่าน LINE Official Account
                </p>
                </div>

                {/* CONCEPT */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="text-xl font-extrabold text-[#073b78]">
                    จุดเด่นของระบบ
                </h4>

                <div className="mt-5 space-y-4">
                    {[
                    "ใช้แพลตฟอร์ม LINE ที่ประชาชนคุ้นเคย",
                    "ตรวจสอบข้อมูลและชำระเงินได้สะดวก",
                    "ลดภาระการตอบคำถามของเจ้าหน้าที่",
                    "ส่งข้อความแจ้งเตือนได้แบบ Real-Time",
                    "รองรับทั้งระบบประปาและระบบขยะ",
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

            {/* RIGHT IMAGES */}
            <div>
                <div className="mb-5">
                <h4 className="text-2xl font-extrabold text-[#073b78]">
                    ตัวอย่างการแจ้งเตือนผ่าน LINE
                </h4>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  <div className="rounded-3xl border-2 border-dashed border-blue-200 bg-white p-4">
                    <div className="flex h-[320px] items-center justify-center">
                      <Image
                        src="/images/water/gis/Picture32.jpg"
                        alt="LINE Notify 1"
                        width={120}
                        height={320}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                  </div>
                  <div className="rounded-3xl border-2 border-dashed border-blue-200 bg-white p-4">
                    <div className="flex h-[320px] items-center justify-center">
                      <Image
                        src="/images/water/gis/Picture33.jpg"
                        alt="LINE Notify 2"
                        width={120}
                        height={320}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                  </div>
                  <div className="rounded-3xl border-2 border-dashed border-blue-200 bg-white p-4">
                    <div className="flex h-[320px] items-center justify-center">
                      <Image
                        src="/images/water/gis/Picture34.jpg"
                        alt="LINE Notify 3"
                        width={120}
                        height={320}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* PRICE */}
                <div className="mt-6 rounded-3xl bg-[#0b5db3] p-6 text-white shadow-xl">
                <p className="text-sm font-semibold text-blue-100">
                    ค่าใช้จ่ายโครงการ
                </p>

                <h4 className="mt-2 text-3xl font-extrabold">
                    5,000 บาท / ปี
                </h4>

                <p className="mt-3 leading-7 text-blue-50">
                    รวมค่าตั้งค่า ดูแลระบบ และบริการ LINE Notification
                    ตลอดระยะเวลารายปี
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default LINENotificationSection;