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
    variable: '--font-ovo' // Add this line
});

export const metadata = {
    title: "MrVirul-Portfolio",
    description: "portfolio of MrVirul",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${fira_Code.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}>
        {children}
        </body>
        </html>
    );
}