'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "@/app/components/About";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Header/>
            <About/>
        </>
    );
}