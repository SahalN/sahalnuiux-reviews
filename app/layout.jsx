/** @format */

import "./globals.css";
import NavBar from "../components/NavBar";
import { inter, mplusrounded1c } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${mplusrounded1c.variable} `}>
      <body className='flex flex-col min-h-screen mt-3 px-4 py-2 bg-[#303030] text-white'>
        <header>
          <NavBar />
        </header>
        <main className='py-3 grow'>{children}</main>
        <footer className='py-3 text-xs text-center border-t'>
          &copy; 2023 Sahal Nurdin | Designed by{" "}
          <a
            href='https://dribbble.com/SahalN'
            target='_blank'
            className='hover:underline'>
            SahalN
          </a>
        </footer>
      </body>
    </html>
  );
}
