import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { sg } from "../../public/fonts";

export const metadata: Metadata = {
  title: "X-Code",
  description: "Desarrollo web a medida , creamos landing pages, software de calidad, diseños hermosos y más",
  icons: {
    icon: 'assets/icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sg.className}
      >
        <ClientLayout children={children} />
      </body>
      <link
        precedence="default"
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        precedence="default"
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </html>
  );
}
