import FooterSection from "@/components/Footer/FooterSection";
import HeaderSection from "@/components/Header/HeaderSection";
// import { useEffect, useState } from "react";
import Head from "next/head";
import "./globals.css"

export const metadata: { title: string; description: string } = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <Head>
                <title>{metadata?.title}</title>
                <meta name="description" content={metadata?.description} />
            </Head>
            <body>
                <HeaderSection />
                {children}
                <FooterSection />
            </body>
        </html >
    );
}