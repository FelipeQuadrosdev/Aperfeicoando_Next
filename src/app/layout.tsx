import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./header/pages";


export const metadata: Metadata = {
  title: "Meu app",
  description: "aprendendo com sujeito Programador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
