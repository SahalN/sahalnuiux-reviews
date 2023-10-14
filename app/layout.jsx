/** @format */

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>[Header]</header>
        <main>{children}</main>
        <footer>[Footer]</footer>
      </body>
    </html>
  );
}
