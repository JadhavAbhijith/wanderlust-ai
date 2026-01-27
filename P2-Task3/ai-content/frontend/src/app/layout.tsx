import React from "react";

export const metadata = {
  title: "AI Chat App",
  description: "Next.js AI Chat using Node.js backend"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
