"use client"
import Image from "next/image";
import Picture1 from '../../assets/Home/FillingOutQuiz.jpeg';
import Picture2 from '../../assets/Home/GettingStarted1.png';
import Picture3 from '../../assets/Home/HealthyHabits.png';


export default function GettingStarted(){
    return (
        <main className={'GettingStarted'}>
            <div className={"GettingStartedContainer"}>
                <h1 className={"GettingStartedTitle"}>It&apos;s as simple as 1-2-3</h1>
                <h1 className={"GettingStartedSection"}>1. Get Started</h1>
                <p className={" GettingStartedDescription"}>
                    Get started by adding your profile information, and select a goal.</p>
                <Image src={Picture1} alt={'random picture'} className={'GettingStartedImage'} />
                <h1 className={"GettingStartedSection"}>2. Track Everything</h1>
                <p className={"GettingStartedDescription"}>
                    Tracking everything you do can help us figure out what is best for you to reach your goals.</p>
                <Image src={Picture2} alt={'random picture'} className={'GettingStartedImage'}/>
                <h1 className={"GettingStartedSection"}>3. Be Consistent</h1>
                <p className={"GettingStartedDescription"}>
                    Building Healthy Habits, Discipline, and Accountability can help build consistency to reach you goals.</p>
                <Image src={Picture3} alt={'random picture'} className={'GettingStartedImage'} />
            </div>
        </main>
    );
}