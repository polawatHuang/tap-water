import "./globals.css";

export const metadata = {
  title: "ระบบสารสนเทศการจัดเก็บค่าธรรมเนียม",
  description: "ระบบประปาและขยะมูลฝอยเทศบาลตำบลของเรา",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}