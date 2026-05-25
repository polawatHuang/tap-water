import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, phone, email, subject, message } = await req.json();

  // Validate input (basic)
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "กรุณากรอกข้อมูลให้ครบถ้วน" }), { status: 400 });
  }

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Send mail
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `[Contact] ${subject || "ไม่มีหัวข้อ"}`,
      text: `ชื่อ: ${name}\nเบอร์โทร: ${phone}\nอีเมล: ${email}\nหัวข้อ: ${subject}\n\n${message}`,
    });
    return new Response(JSON.stringify({ ok: true }));
  } catch (e) {
    return new Response(JSON.stringify({ error: "ส่งอีเมลไม่สำเร็จ" }), { status: 500 });
  }
}
