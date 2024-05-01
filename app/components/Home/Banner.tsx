'use client';
import Image from "next/image";
import MediaQuery from "react-responsive";
import Link from "next/link";
import Picture from '../../../public/Home/BannerImage.jpg';

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
            <MediaQuery minWidth={1200}>
                <div className={"flex justify-center pb-14"}>
                    <Image src={Picture} alt={'someone eating healthy food'} style={{height: '500px', width: '400px', marginRight: '15vw'}} className={"Home-Banner-Picture"}></Image>
                    <div className={"text-white text-lg p-8 text-center h-60 relative top-20"} style={{width: '550px'}}>
                        <h1 className={"text-6xl"}>
                            <span className={"font-bold"}>Reach All Your Health Goals</span></h1>
                        <p className={"text-xl mt-3"}>Build daily habits, be conscience of what is going into your body, and make life changing porgress with the best fitness app.</p>
                        <Link href={"/Get-Started"}>
                            <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                    className={"relative text-lg justify-end text-blue-800 border-white border-2 rounded-3xl p-2 pl-6 pr-6 mt-3 bg-white mr-8 font-bold font-sans"}>START
                                TODAY<span className={'font-bold text-lg ml-2'}>→</span></button>
                        </Link>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={599}>
                <Image src={Picture} alt={'someone eating healthy food'}
                       style={{height: '400px', width: '320px', margin: 'auto'}}
                       className={"ml-2"}></Image>
                <div className={"text-white text-center text-lg mt-4"} style={{marginRight: 'auto', marginLeft: 'auto', width: '320px'}}>
                    <h1 className={"text-2xl"}>Reach All Your Health Goals</h1>
                    <p className={"text-lg mt-2 text-center"}>Build daily habits, be conscience of what is going into your body, and make life changing
                        progress with the best fitness app.</p>
                </div>
                <div className={'flex justify-center mt-3 pb-8'}>
                    <Link href={"/Get-Started"}>
                        <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                className={"text-lg text-blue-800 border-white border-2 rounded-3xl p-2 pl-6 pr-6 bg-white font-bold font-sans"}
                        >START TODAY<span
                            className={'font-bold text-lg ml-2'}>→</span></button>
                    </Link>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1199} minWidth={600}>
                <div className={"flex justify-center pb-14"}>
                    <Image src={Picture} alt={'someone eating healthy food'} style={{height: '400px', width: '300px'}}
                           className={"Home-Banner-Picture mr-10"}></Image>
                    <div className={"text-white text-lg pb-8 text-center"} style={{width: '300px', marginTop: 'auto', marginBottom: 'auto'}}>
                        <h1 className={"text-4xl"}>
                            <span className={"font-bold"}>Reach All Your Health Goals</span></h1>
                        <p className={"text-xl mt-3 text-center"}>Build daily habits, be conscience of what is going into your body,
                            and make life changing porgress with the best fitness app.</p>
                        <Link href={"/Get-Started"}>
                            <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                    className={"relative text-lg justify-end text-blue-800 border-white border-2 rounded-3xl p-2 pl-6 pr-6 mt-3 bg-white mr-8 font-bold font-sans"}>START
                                TODAY<span className={'font-bold text-lg ml-2'}>→</span></button>
                        </Link>
                    </div>
                </div>
            </MediaQuery>
        </main>
    );
}