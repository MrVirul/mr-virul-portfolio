import { Fira_Code, Ovo } from "next/font/google";
import "./globals.css";

const fira_Code = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
   variable: '--font-fira-code'
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "MrVirul-Portfolio",
  description: "portfolio of MrVirul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fira_Code.className} ${ovo.className} antialiased leading-8 overflow-x-hidden` }>
        {children}
      </body>
    </html>
  );
}
