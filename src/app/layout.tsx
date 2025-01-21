import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { sg } from "../../public/fonts";

export const metadata: Metadata = {
  title: "X-Code",
  description: "Desarrollamos software a medida, integraciones y soluciones tecnológicas innovadoras para hacer crecer tu negocio y optimizar tus procesos.",
  icons: {
    icon: 'assets/icon.png'
  },
  openGraph: {
    title: "X-Code",
    description: "Desarrollamos software a medida, integraciones y soluciones tecnológicas innovadoras...",
    url: "https://xcode-soft.com/",
    siteName: "X-Code",
    images: [
      {
        url: "https://xcode-soft/assets/svg/logoblack.svg",
        width: 800,
        height: 600,
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "X-Code",
    description: "Desarrollamos software a medida...",
    images: ["https://xcode-soft/assets/svg/logoblack.svg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
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
      </head>
      <body
        className={sg.className}
      >
        <ClientLayout children={children} />
      </body>
    </html>
  );
}
