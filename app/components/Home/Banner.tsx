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
        <main className={"w-screen bg-blue-800 border-t-white border-t-2 pt-24 Banner"}>
            <div className={"pb-14 Banner"}>
                <Image src={Picture} alt={'someone eating healthy food'}  className={"BannerPicture rounded-3xl"}/>
                <div className={"text-white text-lg text-center BannerText"}>
                    <h1 className={"text-6xl BannerTitle"}>
                        <span className={"font-bold"}>Reach All Your Health Goals</span></h1>
                    <p className={"text-xl mt-2 BannerParagraph"}>Build daily habits, be conscience of what is going
                        into your body, and make life changing porgress with the best fitness app.</p>
                    <Link href={"/Get-Started"} className={"flex justify-center"}>
                        <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                className={"relative text-lg justify-end text-blue-800 border-white border-2 " +
                                    "rounded-3xl p-2 pl-6 pr-6 mt-2 bg-white mr-8 font-bold font-sans"}>START
                            TODAY<span className={'font-bold text-lg ml-2'}>→</span></button>
                    </Link>
                </div>
            </div>
        </main>
    );
}