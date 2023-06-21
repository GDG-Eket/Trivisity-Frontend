import './globals.css'
import { DM_Sans, Poppins } from 'next/font/google'

const dmSans = DM_Sans({ weight: ["400", "500", "700"], variable: "--font-dmsans" })
const poppins = Poppins({ weight: ["400", "500", "700"], variable: "--font-poppins"  })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
