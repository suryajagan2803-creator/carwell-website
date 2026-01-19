import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cardwell | Premier Textile Machinery Manufacturer in Coimbatore, India",
  description: "Leading manufacturer of Acid Treatment Plants, Yarn Conditioning Systems, Apron Doffing Devices, and Spinning Accessories in Coimbatore. Delivering global textile automation excellence since 1984.",
  keywords: "Textile Machinery, Spinning Accessories, Acid Treatment Plant, Yarn Conditioning, Apron Doffing Device, Coimbatore Textile Manufacturer, Cardwell",
  openGraph: {
    title: "Cardwell | Advanced Textile Engineering Solutions",
    description: "Innovating the future of spinning and fabric processing from Coimbatore to the world.",
    type: "website",
    locale: "en_US",
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
        className={`antialiased font-sans bg-slate-50 text-slate-600`}
      >
        {children}
      </body>
    </html>
  );
}
