// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css"; // Ensure your global styles are correctly imported
import Navbar from "../components/NavBar"; // Make sure this path is correct

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <main style={{ flexGrow: 1 }}>
            {children}  {/* This will render the content of each subpage */}
          </main>
        </div>
        <Navbar />  {/* Navbar should appear on every page */}
      </body>
    </html>
  );
}
