'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "@/app/components/About";
import Services from "@/app/components/Services";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>
        </>
    );
}