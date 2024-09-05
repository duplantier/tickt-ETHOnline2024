import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { headers } from "next/headers";
//import { cookieToInitialState } from "wagmi";
//import { config } from "@/config";
//import AppKitProvider from "@/context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TICKT",
  description: "Decentralized way of event ticketing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className={` `}>{children}</body>
    </html>
  );
}
