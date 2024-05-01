'use client'
import {useEffect} from "react";
import Link from "next/link";


export default function Title(){
    useEffect(() => {
        const handleScroll = () => {
            const threshold = 30;
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

    function Enter(){
        // @ts-ignore
        document.getElementById('GetStartedButton').style.opacity = "0.8";
        // @ts-ignore
        if (document.getElementById('GetStartedButton').style.backgroundColor == 'white'){
            // @ts-ignore
            document.getElementById('GetStartedButton').style.opacity = "1,25";
            // @ts-ignore
            document.getElementById('GetStartedButton').style.backgroundColor = 'grey';
        }
    }

    function Leave(){
        // @ts-ignore
        document.getElementById('GetStartedButton').style.opacity = "1.25";
        // @ts-ignore
        if (document.getElementById('GetStartedButton').style.backgroundColor == 'grey'){
            // @ts-ignore
            document.getElementById('GetStartedButton').style.opacity = "0.8";
            // @ts-ignore
            document.getElementById('GetStartedButton').style.backgroundColor = 'white';
        }
    }

    return(
        <main id={'TitleBanner'} className={"bg-blue-800 inline-flex w-screen justify-between fixed z-50 h-16"}>
            <h1 id={"HomeTitle"} className={"text-2xl font-bold text-white ml-8"} style={{marginTop: 'auto', marginBottom: 'auto'}}>VitalityHub</h1>
            <Link href={"/Get-Started"}>
                <button id={"GetStartedButton"}
                        className={"relative text-xl justify-end text-blue-800 font-bold border-white border-2 rounded-2xl pl-2 pr-2 bg-white h-10 mr-8 mt-3"}
                        onMouseLeave={Leave} onMouseEnter={Enter}>Get Started
                </button>
            </Link>
        </main>
    );
}