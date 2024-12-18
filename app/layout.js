import localFont from "next/font/local";
import "./globals.css";
import "../public/assets/css/app.css"
import "../public/assets/css/app.min.css"
import "../public/assets/css/icons.css"
import "../public/assets/css/icons.min.css"
import "../public/assets/scss/app.scss"
import "../public/assets/scss/icons.scss"

import "../public/assets/scss/custom/_helper.scss"
import Script from "next/script";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SGEPC",
  description: "The Sports Goods Export Promotion Council (SGEPC), a Government of India sponsored organization is working for the promotion of India’s exports of sports goods and toys. Founded in 1958, SGEPC represents all the leading manufacturers and exporters of sports goods and toys in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="/assets/js/pages/charts-apex.js" strategy="lazyOnload" />
        <Script src="/assets/js/pages/dashboard.js" strategy="lazyOnload" />
        <Script src="/assets/js/pages/form-editor.js" strategy="lazyOnload" />
        <Script src="/assets/js/pages/form-inputmask.js" strategy="lazyOnload" />
        <Script src="/assets/js/pages/maps-vector.js" strategy="lazyOnload" />
        <Script src="/assets/js/pages/table-gridjs.js" strategy="lazyOnload" />
        <link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet" />
        <Script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js"/>
        <Script src="https://cdn.jsdelivr.net/npm/apexcharts"/>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossOrigin="anonymous"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />
         <link
          href="https://cdnjs.cloudflare.com/ajax/libs/node-waves/0.7.6/waves.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/node-waves/0.7.6/waves.min.js"
          
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Script src="/app-scripts.js" strategy="afterInteractive" />
    </html>
  );
}
