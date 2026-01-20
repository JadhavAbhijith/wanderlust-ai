import React from "react";
import { ReactNode } from "react";

export const metadata = {
  title: "Next.js Introduction",
  description: "App Router vs Pages Router",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ padding: "20px", fontFamily: "Arial" }}>
        <nav style={{ marginBottom: "20px" }}>
          <a href="/ssr-data" style={{ marginRight: "15px" }}>
            App Router (SSR)
          </a>
          <a href="/csr-data">Pages Router (CSR)</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
