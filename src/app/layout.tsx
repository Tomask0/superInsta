// src/app/layout.tsx
"use client";
import { SessionProvider } from "next-auth/react";
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
        <SessionProvider>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <main style={{ flexGrow: 1 }}>{children}</main>
          </div>
          <NavBar />
        </SessionProvider>
      </body>
    </html>
  );
}
