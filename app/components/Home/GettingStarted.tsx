"use client"
import Image from "next/image";
import Picture1 from '../../../public/workingOut.jpeg'
import MediaQuery from "react-responsive";


//add relevant pictures

export default function GettingStarted(){
    return (
        <main className={'flex justify-center mt-6 w-screen'}>
            <MediaQuery minWidth={800}>
                <div className={"mb-6"}>
                    <h1 className={"text-7xl text-center mb-4"}>It's as simple as 1-2-3</h1>
                    <span className={"w-48 text-center"}>
                        <h1 className={"text-2xl font-bold"}>1. Get Started</h1>
                        <p className={"mt-0.5 text-lg mb-2"}>Get started by adding your profile information, and select a goal.</p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} style={{margin: 'auto'}}
                           height={400}></Image>
                    <span
                        className={"w-48 text-center mt-1"}>
                        <h1 className={"text-2xl font-bold"}>2. Track Everything</h1>
                        <p className={"mt-0.5 mb-2 text-lg"}>Tracking everything you do can help us figure out what is best for you to reach your goals.</p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} style={{margin: 'auto'}}
                           height={400}></Image>
                    <span className={"w-48 text-center"}>
                        <h1 className={"text-2xl font-bold"}>3. Be Consistent</h1>
                        <p className={"mt-0.5 text-lg mb-2"}>Hello</p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} height={400}
                           style={{margin: 'auto'}}></Image>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={799} minWidth={500}>
                <div className={"mb-6"}>
                    <h1 className={"text-5xl text-center mb-4"}>It's as simple as 1-2-3</h1>
                    <span className={"w-48 text-center"}>
                        <h1 className={"text-2xl font-bold"}>1. Get Started</h1>
                        <p className={"mt-0.5 text-lg mb-2"} style={{width: '400px', marginLeft: 'auto', marginRight: 'auto'}}>Get started by adding your profile information, and select a goal.</p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} style={{margin: 'auto'}}
                           width={400}></Image>
                    <span
                        className={"text-center"}>
                        <h1 className={"text-2xl font-bold mt-2"}>2. Track Everything</h1>
                        <p className={"mt-0.5 mb-2 text-lg"} style={{width: '400px', marginLeft: 'auto', marginRight: 'auto'}}>Tracking everything you do can help us figure out what is best for you to reach your goals.</p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} style={{margin: 'auto'}}
                           width={400}></Image>
                    <span className={"w-48 text-center"}>
                        <h1 className={"text-2xl font-bold mt-2"}>3. Be Consistent</h1>
                        <p className={"mt-0.5 text-lg mb-2"} style={{width: '400px', marginLeft: 'auto', marginRight: 'auto'}}>Hello</p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} width={400}
                           style={{margin: 'auto'}}></Image>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={499}>
                <div className={"mb-6"}>
                    <h1 className={"text-3xl text-center mb-4"} style={{width: '320px', marginLeft: 'auto', marginRight: 'auto'}}>It's as simple as 1-2-3</h1>
                    <span className={"w-48 text-center"}>
                        <h1 className={"text-2xl font-bold"}>1. Get Started</h1>
                        <p className={"mt-0.5 text-lg mb-2"}
                           style={{width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>Get started by adding your profile information, and select a goal.</p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} style={{margin: 'auto'}}
                           width={300}></Image>
                    <span
                        className={"text-center"}>
                        <h1 className={"text-2xl font-bold mt-2"}>2. Track Everything</h1>
                        <p className={"mt-0.5 mb-2 text-lg"}
                           style={{width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>Tracking everything you do can help us figure out what is best for you to reach your goals.</p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} style={{margin: 'auto'}}
                           width={300}></Image>
                    <span className={"w-48 text-center"}>
                        <h1 className={"text-2xl font-bold mt-2"}>3. Be Consistent</h1>
                        <p className={"mt-0.5 text-lg mb-2"}
                           style={{width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>Build healthy habits and make sure that you </p>
                    </span>
                    <Image src={Picture1} alt={'random picture'} className={'rounded-3xl'} width={300}
                           style={{margin: 'auto'}}></Image>
                </div>
            </MediaQuery>
        </main>
    );
}