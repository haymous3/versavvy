import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "@/app/_styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s / Versavvy",
    default: "Welcome to Versavvy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased min-h-screen flex flex-col relative`}
      >
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
