import {AppProvider} from "@/components/AppContext";
import Header from "@/components/layout/Header";
import { Roboto } from 'next/font/google'
import './globals.css'
import {Toaster} from "react-hot-toast";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Tispatch Food Delivery service',
  description: 'Tispatch is on a mission to make food delivery fast, convenient, and affordable. Whether you’re craving a healthy meal, comfort food, or a quick snack, Tispatch has you covered',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2025 Tispatch Food Delivery All rights reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  )
}
