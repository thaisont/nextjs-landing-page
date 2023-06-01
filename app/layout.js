import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Easybank",
  description: "EasyBank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={publicSans.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
