import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Swarojgar Talim Kendra | Vocational Training Center",
    description:
        "Master Industry-Ready Vocational Skills for Nepal & Overseas Careers. CTEVT Affiliated skill training center in Kathmandu.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
            <body className="font-sans antialiased" suppressHydrationWarning>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
