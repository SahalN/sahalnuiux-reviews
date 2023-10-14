/** @format */

import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/reviews'>Reviews</Link>
              </li>
              <li>
                <Link href='/about' prefetch={false}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          &copy; 2023 Sahal Nurdin | Designed by{" "}
          <a href='https://dribbble.com/SahalN' target='_blank'>
            SahalN
          </a>
        </footer>
      </body>
    </html>
  );
}
