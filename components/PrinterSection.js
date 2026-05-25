import Image from "next/image";

const PrinterSection = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-12">
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* LEFT CONTENT */}
                <div className="p-8 lg:p-10">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0b5db3]">
                    ระบบใบเสร็จมาตรฐานราชการ
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight text-[#073b78]">
                    ใบเสร็จรับเงินแบบต่อเนื่อง
                    <br />
                    และเครื่องพิมพ์ Dot Matrix
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                    รองรับใบเสร็จรับเงินแบบกระดาษต่อเนื่องตามมาตรฐานหน่วยงานราชการ
                    สามารถกำหนดเลขเล่ม เลขที่ และควบคุมการใช้งานใบเสร็จได้อย่างถูกต้อง
                    </p>

                    {/* FEATURES */}
                    <div className="mt-8 space-y-4">
                    {[
                        "ใช้กระดาษต่อเนื่องแบบคาร์บอนพร้อมสำเนา 1 สำเนา",
                        "ขนาดกระดาษ 7 นิ้ว × 6 นิ้ว",
                        "มีส่วนของใบแจ้งหนี้ ใบเสร็จรับเงิน และสำเนา",
                        "กำหนดเลขเล่ม / เลขที่จากโรงงานได้",
                        "ปรับข้อความและรูปแบบใบเสร็จตามหน่วยงานได้",
                    ].map((item) => (
                        <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-blue-50 px-5 py-4"
                        >
                        <div className="mt-1 h-3 w-3 rounded-full bg-[#0b5db3]" />
                        <p className="leading-7 text-slate-700">{item}</p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* RIGHT IMAGES */}
                <div className="bg-gradient-to-br from-[#eef7ff] via-white to-[#f4f9ff] p-8 lg:p-10">
                    
                    {/* Receipt Preview */}
                    <div className="rounded-[2rem] border border-blue-100 bg-white p-5 shadow-lg">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                        <p className="text-sm font-semibold text-[#0b5db3]">
                            ตัวอย่างใบเสร็จ
                        </p>
                        <h3 className="text-xl font-extrabold text-[#073b78]">
                            Continuous Receipt
                        </h3>
                        </div>
                    </div>

                    <div className="flex h-[320px] items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-slate-50">
                        <Image
                          src="/images/water/report/Picture23.png"
                          alt="ตัวอย่างใบเสร็จ"
                          width={350}
                          height={280}
                          className="object-contain max-h-full max-w-full"
                        />
                    </div>
                    </div>

                    {/* Printer Preview */}
                    <div className="mt-6 rounded-[2rem] border border-blue-100 bg-white p-5 shadow-lg">
                    <div className="mb-4">
                        <p className="text-sm font-semibold text-[#0b5db3]">
                        เครื่องพิมพ์มาตรฐาน
                        </p>
                        <h3 className="text-xl font-extrabold text-[#073b78]">
                        Dot Matrix Printer
                        </h3>
                    </div>

                    <div className="flex h-[220px] items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-slate-50">
                        <Image
                          src="/images/water/report/Picture24.png"
                          alt="เครื่องพิมพ์ Dot Matrix"
                          width={350}
                          height={280}
                          className="object-contain max-h-full max-w-full"
                        />
                    </div>

                    {/* PRINTER SPECS */}
                    <div className="mt-6 rounded-2xl bg-blue-50 p-5">
                        <h4 className="mb-4 text-lg font-extrabold text-[#073b78]">
                        คุณสมบัติพื้นฐาน
                        </h4>

                        <div className="space-y-3">
                        {[
                            "หัวพิมพ์ไม่น้อยกว่า 24 เข็ม",
                            "รองรับแคร่พิมพ์ไม่น้อยกว่า 10 นิ้ว",
                            "ความเร็วพิมพ์ร่างไม่น้อยกว่า 300 ตัวอักษร/วินาที",
                            "ความเร็วพิมพ์ละเอียดไม่น้อยกว่า 100 ตัวอักษร/วินาที",
                            "ความละเอียด Enhanced Graphics 360 × 360 dpi",
                            "รองรับ USB / Parallel Interface",
                            "Input Buffer ไม่น้อยกว่า 128 KB",
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3">
                            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0b5db3]" />
                            <p className="text-sm leading-7 text-slate-700">{item}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default PrinterSection;