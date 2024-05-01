"use client"
import Image from "next/image";
import Portrait1 from "../../../public/portrait.jpeg"
import MediaQuery from "react-responsive";

export default function Testimonies(){
    let curr: number = 0;

    let back = () => {
        // @ts-ignore
        document.getElementById(`Testimony${curr}`).hidden = true;
        if (curr == 0){
            curr = 7;
        }
        else {
            curr--;
        }
        // @ts-ignore
        document.getElementById(`Testimony${curr}`).hidden = false;
    }

    let forward = () => {
        // @ts-ignore
        document.getElementById(`Testimony${curr}`).hidden = true;
        if (curr == 7){
            curr = 0;
        }
        else {
            curr++;
        }
        // @ts-ignore
        document.getElementById(`Testimony${curr}`).hidden = false;
    }

    return(
        <main className={"w-screen mt-6 mb-6"}>
            <MediaQuery minWidth={1200}>
                <div className={"flex justify-center"}>
                    <div className={""}>
                        <div className={"flex justify-evenly"}>
                            <Image src={Portrait1} alt={"picture 1"} className={"mr-1 mb-1"} width={110}></Image>
                            <Image src={Portrait1} alt={"picture 1"} className={"mr-1 mb-1"} width={110}></Image>
                            <Image src={Portrait1} alt={"picture 1"} width={110} className={"mb-1"}></Image>
                        </div>
                        <div className={"flex justify-evenly"}>
                            <Image src={Portrait1} alt={"picture 1"} width={110} className={"mr-1 mb-1"}></Image>
                            <Image src={Portrait1} alt={"picture 1"} width={110} className={"mr-1 mb-1"}></Image>
                            <Image src={Portrait1} alt={"picture 1"} width={110} className={"mb-1"}></Image>
                        </div>
                    </div>

                    <div className={"flex justify-between text-center ml-20 mr-20"} style={{width: '400px'}}>
                        <div className={"flex mr-4"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                            <button onClick={back}
                                    className={"text-4xl text-white bg-black rounded-3xl pl-1 pr-1 relative font-sans"}>&#x2190;</button>
                        </div>
                        <div id={"Testimony0"} hidden={false}>
                            <h1></h1>
                            <p>VitalityHub keeps me on track with my calories. I&apos;ve seen remarkable progress and regained control of my health!</p>
                        </div>
                        <div id={"Testimony1"} hidden={true}>
                            <h1></h1>
                            <p>Tracking calories with VitalityHub is effortless. I feel more in control and motivated to reach my goals.</p>
                        </div>
                        <div id={"Testimony2"} hidden={true}>
                            <h1></h1>
                            <p>With VitalityHub, managing my calories is simple. I&apos;ve made significant progress and feel empowered in my health journey.</p>
                        </div>
                        <div id={"Testimony3"} hidden={true}>
                            <h1></h1>
                            <p>Thanks to VitalityHub, I've mastered calorie tracking. I&apos;m setting healthy habits and feeling better than ever!</p>
                        </div>
                        <div id={"Testimony4"} hidden={true}>
                            <h1></h1>
                            <p>VitalityHub makes calorie tracking a breeze. I&apos;ve seen positive changes in my health and lifestyle.</p>
                        </div>
                        <div id={"Testimony5"} hidden={true}>
                            <h1></h1>
                            <p>VitalityHub has transformed how I manage my calories. I&apos;m making progress and feeling more confident every day.</p>
                        </div>
                        <div id={"Testimony6"} hidden={true}>
                            <h1></h1>
                            <p>Using VitalityHub&apos;s calorie tracker has been life-changing. It&apos;s helped me stay accountable and improve my health.</p>
                        </div>
                        <div id={"Testimony7"} hidden={true}>
                            <h1></h1>
                            <p>VitalityHub exceeded my expectations for a calorie tracker app. It&apos;s user-friendly and keeps me motivated to reach my goals!</p>
                        </div>
                        <div className={"flex"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                            <button onClick={forward} className={"text-4xl text-white ml-4 bg-black rounded-3xl pl-1 pr-1 relative font-sans"}>&#x2192;</button>
                        </div>
                    </div>
                    <div>
                        <div className={"flex justify-evenly"}>
                            <Image src={Portrait1} alt={"picture 1"} className={"mr-1 mb-1"} width={110} />
                            <Image src={Portrait1} alt={"picture 1"} className={"mr-1 mb-1"} width={110} />
                            <Image src={Portrait1} alt={"picture 1"} width={110} className={"mb-1"} />
                        </div>
                        <div className={"flex justify-evenly"}>
                            <Image src={Portrait1} alt={"picture 1"} width={110} className={"mr-1 mb-1"} />
                            <Image src={Portrait1} alt={"picture 1"} width={110} className={"mr-1 mb-1"} />
                            <Image src={Portrait1} alt={"picture 1"} width={110} className={"mb-1"} />
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </main>
    );
}