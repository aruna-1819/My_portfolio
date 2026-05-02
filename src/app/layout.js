import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Aruna kumari padala | Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans dark`} suppressHydrationWarning>

      <body className="min-h-screen selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
