import React from "react";
import "./style.css";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="flex overflow-hidden w-full h-lvh">
            <Sidebar />
            <section className="grow flex items-center justify-center h-full">
              {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
