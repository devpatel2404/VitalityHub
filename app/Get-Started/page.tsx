"use client"
import Link from "next/link";
import MediaQuery from "react-responsive";
import Image from "next/image";
import Picture1 from  "../../public/HomeBannerPicture.jpg"

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
        <main className={""}>
            <h1 className={"text-3xl text-center mt-32 text-black"}>Get Started With</h1>
            <h1 className={"mt-1 text-4xl text-center text-blue-800"}>VitalityHub</h1>
            <div className={"flex justify-center mt-6"}>
                <div className={"text-blue-800 mr-16"} style={{width: '300px'}}>
                    <Image src={Picture1} alt={"a placeholder picture"} style={{height: '300px', width: '300px'}}
                           className={"rounded-3xl"}></Image>
                    <h1 className={"text-center text-xl mt-2"}>Food Affects Your Day to Day Life Can Build Healthy
                        Habits For you</h1>
                </div>
                <div className={"text-blue-800 mr-16"} style={{width: '300px'}}>
                    <Image src={Picture1} alt={"a placeholder picture"} style={{height: '300px', width: '300px'}}
                           className={"rounded-3xl"}></Image>
                    <h1 className={"text-center text-xl mt-2"}>Food Affects Your Day to Day Life Can Build Healthy
                        Habits For you</h1>
                </div>
                <div className={"text-blue-800"} style={{width: '300px'}}>
                    <Image src={Picture1} alt={"a placeholder picture"} style={{height: '300px', width: '300px'}}
                           className={"rounded-3xl"}></Image>
                    <h1 className={"text-center text-xl mt-2"}>Food Affects Your Day to Day Life Can Build Healthy
                        Habits For you</h1>
                </div>
            </div>
            <div className={"flex justify-center"}>
                <Link href={'Quiz'} className={"rounded-3xl"}>
                    <button className={"text-white bg-blue-800 rounded-3xl text-2xl p-3 mt-6"} onMouseLeave={Leave}
                            onMouseEnter={Enter}>
                        Continue
                    </button>
                </Link>
            </div>
        </main>
    );
}