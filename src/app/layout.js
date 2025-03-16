"use client"
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/main/Sidebar/Sidebar";
import Topbar from "@/components/main/Topbar/Topbar";
import ThemeProvider from "@/store/Theme.provider";
import { useTheme } from "@/hooks/useTheme";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

console.log("Playfair className:", playfair.className);
console.log("Inter className:", inter.className);


function RootLayoutContent({ children }) {
  const { theme } = useTheme();
  return (
    <body
      className={`${playfair.variable} ${inter.variable} antialiased flex h-screen overflow-hidden ${theme}`}
    >
      <Sidebar />
      <main className="w-full flex flex-col overflow-auto">
        <Topbar />
        {children}
      </main>
    </body>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <RootLayoutContent>{children}</RootLayoutContent>
      </ThemeProvider>
    </html>
  );
}
