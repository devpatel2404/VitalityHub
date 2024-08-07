"use client"
import Image from "next/image";
import Portrait1 from "../../assets/Home/Testimony1.jpg"
import Portrait2 from "../../assets/Home/Testimony2.jpg"
import Portrait3 from "../../assets/Home/Testimony3.jpeg"
import "../../Styles/Home.css"

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
        <main className={"Testimonies"}>
            <h1 className={"TestimonyTitle"}>Discover Members of The Community </h1>
            <div className={""}>
                <div className={"TestimoniesContainer"}>
                    <div className={"TraversalButtonContainer"}><button onClick={back} className={"TraversalButton"}>&#8592;</button></div>

                    <div id={"Testimony0"} hidden={false} className={"Testimony"}>
                        <h1 className={"TestimoniesTitle"}>From Calorie Counting to Empowerment</h1>
                        <p className={"Testimony"}>
                            VitalityHub keeps me on track with my calories. I&apos;ve seen remarkable progress and
                            regained control of my health!
                        </p>
                        <p className={"Individual"}>- Mark</p>
                    </div>

                    <div id={"Testimony1"} hidden={true} className={"Testimony"}>
                        <h1></h1>
                        <p>
                            Tracking calories with VitalityHub is effortless. I feel more in control and motivated to
                            reach my goals.
                        </p>
                    </div>

                    <div id={"Testimony2"} hidden={true} className={"Testimony"}>
                        <h1></h1>
                        <p>
                            With VitalityHub, managing my calories is simple. I&apos;ve made significant progress and
                            feel empowered in my health journey.T
                        </p>
                    </div>

                    <div id={"Testimony3"} hidden={true} className={"Testimony"}>
                        <h1></h1>
                        <p>Thanks to VitalityHub, I&apos;ve mastered calorie tracking. I&apos;m setting healthy
                            habits and feeling better than ever!</p>
                    </div>

                    <div id={"Testimony4"} hidden={true} className={"Testimony"}>
                        <h1></h1>
                        <p>
                            VitalityHub makes calorie tracking a breeze. I&apos;ve seen positive changes in my health
                            and lifestyle.
                        </p>
                    </div>

                    <div id={"Testimony5"} hidden={true} className={"Testimony"}>
                        <h1></h1>
                        <p>
                            VitalityHub has transformed how I manage my calories. I&apos;m making progress and feeling
                            more confident every day.
                        </p>
                    </div>

                    <div id={"Testimony6"} hidden={true} className={"Testimony"}>
                        <h1></h1>
                        <p>
                            Using VitalityHub&apos;s calorie tracker has been life-changing. It&apos;s helped me stay
                            accountable and improve my health.
                        </p>
                    </div>

                    <div id={"Testimony7"} hidden={true} className={"Testimony"}>
                        <h1></h1>
                        <p>
                            VitalityHub exceeded my expectations for a calorie tracker app. It&apos;s user-friendly and
                            keeps me motivated to reach my goals!
                        </p>
                    </div>

                    <div className={"TraversalButtonContainer"}><button onClick={forward} className={"TraversalButton"}>
                        &#8594;</button></div>
                </div>
            </div>
            <div className={"TestimoniesPicturesContainer"}>
                <h1 className={"TestimonyPictureTitle"}>You are not alone others have and will continue down the same path as you.</h1>
                <div className={"flex TestimonyImages"}>
                    <Image src={Portrait1} alt={"picture 1"} className={"TestimonyImage"}></Image>
                    <Image src={Portrait2} alt={"picture 1"} className={"TestimonyImage"}></Image>
                    <Image src={Portrait3} alt={"picture 1"} className={"TestimonyImage TestimonyImageRight"}></Image>
                </div>
                <div className={"flex TestimonyImages"}>
                    <Image src={Portrait1} alt={"picture 1"} className={"TestimonyImage"}></Image>
                    <Image src={Portrait2} alt={"picture 1"} className={"TestimonyImage"}></Image>
                    <Image src={Portrait3} alt={"picture 1"} className={"TestimonyImage TestimonyImageRight"}></Image>
                </div>
            </div>
        </main>
    );
}
