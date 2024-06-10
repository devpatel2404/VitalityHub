"use client"
import Link from "next/link";
import MediaQuery from "react-responsive";
import Image from "next/image";
import Picture1 from "../assets/GetStarted/GetStarted1.jpeg";
import Picture2 from "../assets/GetStarted/GetStarted2.jpeg";
import Picture3 from "../assets/GetStarted/GetStarted3.jpeg"
import '../Styles/Get-Started.css'

export default function GetStarted(){

    // @ts-ignore
    let Enter = (e) =>{
        // @ts-ignore
        e.target.style.opacity = "0.8";
    }

    // @ts-ignore
    let Leave = (e) => {
        // @ts-ignore
        e.target.style.opacity = "1.25";
    }

    return(
        <main className={"pb-8 GetStarted"}>
            <div className={"GetStartedContainer"}>
                <h1 className={"text-3xl text-center text-black"}>Get Started With</h1>
                <Link href={"/"}><h1 className={"mt-1 text-4xl text-center text-blue-800"}>VitalityHub</h1></Link>
                <div className={"mt-6 GetStartedImagesContainer"}>
                    <div className={"text-blue-800 GetStartedContainer1"}>
                        <Image src={Picture1} alt={"a placeholder picture"} className={"rounded-3xl GetStartedImage"}/>
                        <h1 className={"text-center mt-2 GetStartedText"}>A balanced diet rich in fruits, vegetables, lean proteins,
                            and whole grains supports overall health, boosts immunity, and maintains energy levels throughout the day.</h1>
                    </div>
                    <div className={"text-blue-800 GetStartedContainer2"}>
                        <Image src={Picture2} alt={"a placeholder picture"} className={"rounded-3xl GetStartedImage"}/>
                        <h1 className={"text-center mt-2 GetStartedText"}>Physical activity releases endorphins, the body&apos;s
                            natural mood elevators, promoting mental clarity, reducing stress, and improving overall emotional well-being.</h1>
                    </div>
                    <div className={"text-blue-800 GetStartedContainer3"}>
                        <Image src={Picture3} alt={"a placeholder picture"} className={"rounded-3xl GetStartedImage"}/>
                        <h1 className={"text-center mt-2 GetStartedText"}>Quality sleep is essential for physical and mental
                            well-being, allowing the body to repair tissues, consolidate memories, and regulate hormones.</h1>
                    </div>
                </div>
                <div className={"flex justify-center"}>
                    <Link href={'/SignUp'} className={"rounded-3xl"}>
                        <button className={"text-white bg-blue-800 rounded-3xl text-2xl p-3 mt-6"} onMouseLeave={Leave}
                                onMouseEnter={Enter}>
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}