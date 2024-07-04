'use client';
import Image from "next/image";
import Link from "next/link";
import Picture from '../../assets/Home/BannerImage.jpg';

export default function Banner(){
    function Enter(){
        // @ts-ignore
        document.getElementById('button').style.opacity = "0.8";
    }

    function Leave(){
        // @ts-ignore
        document.getElementById('button').style.opacity = "1.25";
    }

    return(
        <main className={"Banner"}>
            <div className={"BannerContainer"}>
                <Image src={Picture} alt={'someone eating healthy food'}  className={"BannerPicture rounded-3xl"}/>
                <div className={"BannerText"}>
                    <h1 className={"BannerTitle"}>
                        <span className={""}>Reach All Your Health Goals</span></h1>
                    <p className={"BannerParagraph"}>Build daily habits, be conscience of what is going
                        into your body, and make life changing porgress with the best fitness app.</p>
                        <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                className={"BannerButton"}>
                            <Link href={"/Get-Started"} className={""}>Start
                            Today<span className={''}>&rarr;</span> </Link></button>
                </div>
            </div>
        </main>
    );
}