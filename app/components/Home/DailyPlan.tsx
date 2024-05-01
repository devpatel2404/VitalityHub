"use client"
import MediaQuery from "react-responsive";
import Image from "next/image";
import Picture from "../../../public/HomeBannerPicture.jpg"
import Link from "next/link";


export default function DailyPlan(){
    function Enter(){
        // @ts-ignore
        document.getElementById('button').style.opacity = "0.8";
    }
    function Leave(){
        // @ts-ignore
        document.getElementById('button').style.opacity = "1.25";
    }
    return(
        <main className={"bg-black text-white flex justify-center pb-10 pt-10"}>
            <MediaQuery maxWidth={899} minWidth={600}>
                <div>
                    <h1 className={"text-center text-2xl"}>Have A Few Minutes?</h1>
                    <p className={"text-lg text-center mt-1"}>Get a specialized daily plan tailor made for you in
                        mind.</p>
                    <div className={"flex justify-center mt-3 mb-4"}>
                        <Link href={"/Get-Started"}>
                            <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                    className={"text-lg text-blue-800 border-white border-2 rounded-3xl p-1 pl-4 pr-4 bg-white font-bold font-sans"}
                            >START TODAY<span
                                className={'font-bold text-lg ml-2'}>→</span></button>
                        </Link>
                    </div>
                    <Image src={Picture} alt={"temporary picture"} height={300}
                           style={{marginLeft: 'auto', marginRight: 'auto'}} className={"mt-1"}></Image>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={599}>
                <div>
                    <h1 className={"text-center text-2xl"}>Have A Few Minutes?</h1>
                    <p className={"text-lg text-center mt-1"}>Get a specialized daily plan tailor made for you in
                        mind.</p>
                    <div className={"flex justify-center mt-3 mb-4"}>
                        <Link href={"/Get-Started"}>
                            <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                    className={"text-lg text-blue-800 border-white border-2 rounded-3xl p-1 pl-4 pr-4 bg-white font-bold font-sans"}
                            >START TODAY<span
                                className={'font-bold text-lg ml-2'}>→</span></button>
                        </Link>
                    </div>
                    <Image src={Picture} alt={"temporary picture"}
                           style={{marginLeft: 'auto', marginRight: 'auto', width: '340px'}} className={"mt-1"}></Image>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={1200}>
                <div className={"flex"}>
                    <div className={"w-96 mr-48"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <h1 className={"text-center text-2xl"}>Have A Few Minutes?</h1>
                        <p className={"text-lg text-center mt-1"}>Get a specialized daily plan tailor made for you in
                            mind.</p>
                        <div className={"flex justify-center"}>
                            <Link href={"/Get-Started"}>
                                <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                        className={"text-lg text-blue-800 border-white border-2 rounded-3xl p-1 pl-4 pr-4 mt-2 bg-white font-bold font-sans"}
                                >START TODAY<span
                                    className={'font-bold text-lg ml-2'}>→</span></button>
                            </Link>
                        </div>
                    </div>
                    <Image src={Picture} alt={"temporary picture"} height={400}
                           style={{margin: 'auto'}} className={""}></Image>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1199} minWidth={900}>
                <div className={"flex"}>
                    <div className={"w-96 mr-10"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <h1 className={"text-center text-2xl"}>Have A Few Minutes?</h1>
                        <p className={"text-lg text-center mt-1"}>Get a specialized daily plan tailor made for you in
                            mind.</p>
                        <div className={"flex justify-center"}>
                            <Link href={"/Get-Started"}>
                                <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                        className={"text-lg text-blue-800 border-white border-2 rounded-3xl p-1 pl-4 pr-4 mt-2 bg-white font-bold font-sans"}
                                >START TODAY<span
                                    className={'font-bold text-lg ml-2'}>→</span></button>
                            </Link>
                        </div>
                    </div>
                    <Image src={Picture} alt={"temporary picture"} height={325}
                           style={{margin: 'auto'}} className={""}></Image>
                </div>
            </MediaQuery>
        </main>
    );
}