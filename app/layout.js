import "./globals.css";

export const metadata = {
  title: "ระบบสารสนเทศการจัดเก็บค่าธรรมเนียม | ประปาและขยะมูลฝอย เทศบาลตำบลของเรา",
  description:
    "ระบบสารสนเทศสำหรับการจัดเก็บค่าธรรมเนียมประปาและขยะมูลฝอย รองรับ E-Invoice, E-Receipt, QR Payment, GIS, Mobile POS สำหรับหน่วยงานท้องถิ่นทั่วประเทศ พัฒนาโดยทีมงานมืออาชีพ ใช้งานง่าย ปลอดภัย รองรับ Cloud และ Mobile.",
  keywords:
    "ระบบประปา, ระบบขยะ, ระบบสารสนเทศ, เทศบาล, E-Invoice, E-Receipt, QR Payment, Mobile POS, Cloud, GIS, ระบบราชการ, ระบบท้องถิ่น, โปรแกรมประปา, โปรแกรมขยะ, ระบบจัดเก็บค่าธรรมเนียม, ระบบบัญชี, ระบบรายงาน, ระบบแจ้งเตือน, LINE Notification, ระบบออนไลน์, ระบบเทศบาล, ระบบอบต, ระบบอบจ, ระบบราชการไทย, ระบบ ERP ท้องถิ่น",
  openGraph: {
    title: "ระบบสารสนเทศการจัดเก็บค่าธรรมเนียม | ประปาและขยะมูลฝอย เทศบาลตำบลของเรา",
    description:
      "ระบบสารสนเทศสำหรับการจัดเก็บค่าธรรมเนียมประปาและขยะมูลฝอย รองรับ E-Invoice, E-Receipt, QR Payment, GIS, Mobile POS สำหรับหน่วยงานท้องถิ่นทั่วประเทศ พัฒนาโดยทีมงานมืออาชีพ ใช้งานง่าย ปลอดภัย รองรับ Cloud และ Mobile.",
    url: "https://tap-water-thailand.vercel.app/",
    siteName: "ระบบสารสนเทศการจัดเก็บค่าธรรมเนียม",
    images: [
      {
        url: "/images/water/gis/Picture27.png", // ใส่รูป og image ขนาด 1200x630 px ใน public/images
        width: 1200,
        height: 630,
        alt: "ระบบสารสนเทศการจัดเก็บค่าธรรมเนียม เทศบาลตำบลของเรา",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ระบบสารสนเทศการจัดเก็บค่าธรรมเนียม | ประปาและขยะมูลฝอย เทศบาลตำบลของเรา",
    description:
      "ระบบสารสนเทศสำหรับการจัดเก็บค่าธรรมเนียมประปาและขยะมูลฝอย รองรับ E-Invoice, E-Receipt, QR Payment, GIS, Mobile POS สำหรับหน่วยงานท้องถิ่นทั่วประเทศ พัฒนาโดยทีมงานมืออาชีพ ใช้งานง่าย ปลอดภัย รองรับ Cloud และ Mobile.",
    images: ["/images/water/gis/Picture27.png"],
  },
  alternates: {
    canonical: "https://tap-water-thailand.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}