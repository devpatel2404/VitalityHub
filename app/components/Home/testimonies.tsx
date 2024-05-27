"use client"
import Image from "next/image";
import Portrait1 from "../../../public/Home/Portrait1.jpg"
import MediaQuery from "react-responsive";
import "./Home.css"

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
        <main className={"w-screen pt-6 pb-6 Testimonies"}>
            <div className={""}>
                <div className={"TestimoniesPicturesL"}>
                    <div className={"flex justify-evenly"}>
                        <Image src={Portrait1} alt={"picture 1"} className={"mr-2 mb-2 TestimonyImages"}></Image>
                        <Image src={Portrait1} alt={"picture 1"} className={"mr-2 mb-2 TestimonyImages"}></Image>
                        <Image src={Portrait1} alt={"picture 1"} className={"mb-2 TestimonyImages"}></Image>
                    </div>
                    <div className={"flex justify-evenly"}>
                        <Image src={Portrait1} alt={"picture 1"} className={"mr-2 TestimonyImages"}></Image>
                        <Image src={Portrait1} alt={"picture 1"} className={"mr-2 TestimonyImages"}></Image>
                        <Image src={Portrait1} alt={"picture 1"} className={"TestimonyImages"}></Image>
                    </div>
                </div>
                <div className={"flex justify-between text-center ml-20 mr-20 TestimoniesContainer"}>
                    <div className={"flex mr-4"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <button onClick={back}
                                className={"font-sans text-2xl text-white bg-gray-900 rounded-3xl pl-1 pr-1 text-center relative font-sans"}>&#8592;</button>
                    </div>
                    <div id={"Testimony0"} hidden={false} style={{marginTop: 'auto', marginBottom: 'auto'}}
                         className={"ml-2 mr-2"}>
                        <h1 className={"TestimoniesTitle"}>From Calorie Counting to Empowerment</h1>
                        <p className={"Testimony"}>VitalityHub keeps me on track with my calories. I&apos;ve seen
                            remarkable progress
                            and regained control of my health!</p>
                        <p className={"Individual"}>- Mark</p>
                    </div>
                    <div id={"Testimony1"} hidden={true} style={{marginTop: 'auto', marginBottom: 'auto'}}
                         className={"ml-2 mr-2"}>
                        <h1></h1>
                        <p>Tracking calories with VitalityHub is effortless. I feel more in control and
                            motivated to reach my goals.</p>
                    </div>
                    <div id={"Testimony2"} hidden={true} style={{marginTop: 'auto', marginBottom: 'auto'}}
                         className={"ml-2 mr-2"}>
                        <h1></h1>
                        <p>With VitalityHub, managing my calories is simple. I&apos;ve made significant progress
                            and feel empowered in my health journey.</p>
                    </div>
                    <div id={"Testimony3"} hidden={true} style={{marginTop: 'auto', marginBottom: 'auto'}}
                         className={"ml-2 mr-2"}>
                        <h1></h1>
                        <p>Thanks to VitalityHub, I&apos;ve mastered calorie tracking. I&apos;m setting healthy
                            habits and feeling better than ever!</p>
                    </div>
                    <div id={"Testimony4"} hidden={true} style={{marginTop: 'auto', marginBottom: 'auto'}}
                         className={"ml-2 mr-2"}>
                        <h1></h1>
                        <p>VitalityHub makes calorie tracking a breeze. I&apos;ve seen positive changes in my
                            health and lifestyle.</p>
                    </div>
                    <div id={"Testimony5"} hidden={true} style={{marginTop: 'auto', marginBottom: 'auto'}}
                         className={"ml-2 mr-2"}>
                        <h1></h1>
                        <p>VitalityHub has transformed how I manage my calories. I&apos;m making progress and
                            feeling more confident every day.</p>
                    </div>
                    <div id={"Testimony6"} hidden={true} style={{marginTop: 'auto', marginBottom: 'auto'}}
                         className={"ml-2 mr-2"}>
                        <h1></h1>
                        <p>Using VitalityHub&apos;s calorie tracker has been life-changing. It&apos;s helped me
                            stay accountable and improve my health.</p>
                    </div>
                    <div id={"Testimony7"} hidden={true} style={{marginTop: 'auto', marginBottom: 'auto'}}
                         className={"ml-2 mr-2"}>
                        <h1></h1>
                        <p>VitalityHub exceeded my expectations for a calorie tracker app. It&apos;s
                            user-friendly and keeps me motivated to reach my goals!</p>
                    </div>
                    <div className={"flex"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <button onClick={forward}
                                className={"text-2xl text-white ml-4 bg-gray-900 rounded-3xl pl-1 pr-1 relative font-sans"}>&#8594;</button>
                    </div>
                </div>
                <div className={"TestimoniesPicturesR"}>
                    <div className={"flex justify-evenly"}>
                        <Image src={Portrait1} alt={"picture 1"} className={"mr-2 mb-2 TestimonyImages"}></Image>
                        <Image src={Portrait1} alt={"picture 1"} className={"mr-2 mb-2 TestimonyImages"}></Image>
                        <Image src={Portrait1} alt={"picture 1"} className={"mb-2 TestimonyImages"}></Image>
                    </div>
                    <div className={"flex justify-evenly"}>
                        <Image src={Portrait1} alt={"picture 1"} className={"mr-2 TestimonyImages"}></Image>
                        <Image src={Portrait1} alt={"picture 1"} className={"mr-2 TestimonyImages"}></Image>
                        <Image src={Portrait1} alt={"picture 1"} className={"TestimonyImages"}></Image>
                    </div>
                </div>
            </div>
        </main>
    );
}