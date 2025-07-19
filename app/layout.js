import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: '--font-inter'
});

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: '--font-sora'
});

export const metadata = {
    title: "MrVirul-Portfolio",
    description: "portfolio of MrVirul",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} ${sora.variable} antialiased leading-8 overflow-x-hidden`}>
        {children}
        </body>
        </html>
    );
}