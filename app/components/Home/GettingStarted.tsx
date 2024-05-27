"use client"
import Image from "next/image";
import Picture1 from '../../../public/Home/FillingOutQuiz.jpeg';
import Picture2 from '../../../public/Home/GettingStarted1.png';
import Picture3 from '../../../public/Home/HealthyHabits.png';
import MediaQuery from "react-responsive";


//add relevant pictures

export default function GettingStarted(){
    return (
        <main className={'flex justify-center mt-6 w-screen'}>
            <div className={"mb-6"}>
                <h1 className={"text-7xl text-center mb-4 GettingStartedTitle"}>It&apos;s as simple as 1-2-3</h1>
                <h1 className={"text-2xl font-bold text-center"}>1. Get Started</h1>
                <p className={"mt-0.5 text-lg mb-2 text-center GettingStarted"} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    Get started by adding your profile information, and select a goal.</p>
                <Image src={Picture1} alt={'random picture'} className={'rounded-3xl GettingStartedImage'} style={{margin: 'auto'}}
                       ></Image>
                <h1 className={"text-2xl font-bold mt-2 text-center"}>2. Track Everything</h1>
                <p className={"mt-0.5 mb-2 text-lg text-center GettingStarted"} style={{marginRight: 'auto', marginLeft: 'auto'}}>
                    Tracking everything you do can help us figure out what is best for you to reach your goals.</p>
                <Image src={Picture2} alt={'random picture'} className={'rounded-3xl GettingStartedImage'} style={{margin: 'auto'}}
                       ></Image>
                <h1 className={"text-2xl mt-2 font-bold text-center"}>3. Be Consistent</h1>
                <p className={"mt-0.5 text-lg mb-2 text-center GettingStarted"} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    Building Healthy Habits, Discipline, and Accountability can help build consistency to reach you goals.</p>
                <Image src={Picture3} alt={'random picture'} className={'rounded-3xl GettingStartedImage'}
                       style={{margin: 'auto'}}></Image>
            </div>
        </main>
    );
}