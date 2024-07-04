'use client'
import {useEffect} from "react";
import Link from "next/link";


export default function Title(){
    useEffect(() => {
        const handleScroll = () => {
            const threshold = 20;
            const scrollY = window.scrollY;

            if (scrollY > threshold) {
                // @ts-ignore
                document.getElementById('TitleBanner').style.backgroundColor = "white";
                // @ts-ignore
                document.getElementById("HomeTitle").style.color = "rgba(30, 64, 175)";
                // @ts-ignore
                document.getElementById("GetStartedButton").style.borderColor = "black";
            } else {
                // @ts-ignore
                document.getElementById('TitleBanner').style.backgroundColor = "rgba(30, 64, 175)";
                // @ts-ignore
                document.getElementById("HomeTitle").style.color = "white";
                // @ts-ignore
                document.getElementById("GetStartedButton").style.borderColor = "white";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <main id={'TitleBanner'} className={"Title"}>
            <h1 id={"HomeTitle"} className={"AppName"}>VitalityHub</h1>
            <Link href={"/Get-Started"}>
                <button id={"GetStartedButton"} className={"GetStartedButton"}>
                    Get Started
                </button>
            </Link>
        </main>
    );
}