// src/app/layout.tsx
"use client";
import AuthProvider from "../components/AuthProvider"; // Corrected import path
import NavBar from "../components/NavBar";
import "./globals.css";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <main style={{ flexGrow: 1 }}>{children}</main>
          </div>
          <NavBar />
        </AuthProvider>
      </body>
    </html>
  );
}
