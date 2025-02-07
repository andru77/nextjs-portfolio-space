import { Inter } from "next/font/google";
import "./globals.css";
import {clsx} from "clsx";
import StarsBackground from "@components/StarsBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Jose Andres Colmenares",
  description: "NextJs portfolio",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={
          clsx(inter.variable, "bg-background text-foreground font-inter")
      }>
      {children}
      <StarsBackground/>
      </body>
      </html>
  );
}
