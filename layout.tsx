import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aamayra | LeadPilot",
  description: "AI real-estate lead management and WhatsApp sales assistant."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
