import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "STATIC — Charged by Craft",
  description:
    "New York's most charged barbershop. Precision cuts, expert shaves, and beard work for the modern individual. Book at 88 Bleecker St.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-[#080812] text-slate-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
