/** @format */

import "./globals.css";
import NavBar from "../components/NavBar";
import { inter, montserrat } from "./fonts";

export const metadata = {
  title: {
    default: "Sahal Nurdin",
    template: "%s | Sahal Nurdin",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${montserrat.variable} `}>
      <body className='flex flex-col min-h-screen  mt-3 px-4 lg:px-40 md:px-20 sm:px-10 py-2 bg-[#303030] text-white'>
        <header>
          <NavBar />
        </header>
        <main className='px-5 py-3 grow '>{children}</main>
        <footer className='max-w-screen-md px-5 py-3 mx-auto text-xs text-center '>
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
