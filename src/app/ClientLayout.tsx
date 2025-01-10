"use client";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}