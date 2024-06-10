"use client"
import Link from "next/link";
import {useState} from "react";
import "../Styles/Quiz.css"


export default function Quiz(){
    const [name, SetName] = useState('');
    let [weightGoal, setWeightGoal] = useState('');

    // @ts-ignore
    const handleButtonClick = (e) => {
        setWeightGoal(prevOption => (prevOption === e.target.value ? null : e.target.value));
    };
    return(
        <main>
            <form className={"Quiz"}>
                <Link href={"/"} className={"text-blue-800 flex justify-center text-2xl mt-4"}>VitalityHub</Link>
                <h1 className={"text-center mt-4 text-2xl"}>Fill Out Your Personal Information</h1>
                <h1 className={"text-center text-xl m-1"}>First name</h1>
                <input placeholder={"Hello"} className={"text-black mt-1 border-black border-2 QuizInput1 flex"}
                       style={{marginLeft: 'auto', marginRight: 'auto', textIndent: '3px'}}></input>
                <h1 className={"text-center text-xl mt-1 mb-1"}>Last name</h1>
                <input placeholder={"Hello"} className={"text-black mt-1 border-black border-2 QuizInput1 flex"}
                       style={{marginLeft: 'auto', marginRight: 'auto', textIndent: '3px'}}></input>
                <div id={"goals"}>
                    <h1 className={"text-center text-2xl mt-4 flex justify-center"}>My Weight
                        Goal</h1>
                    <p className={"text-center mt-1 flex justify-center"}>Select one of the
                        following weight goals.</p>
                    <button
                        type={"button"}
                        className={`${weightGoal === 'Maintain Weight' ? 'border-blue-800 bg-gray-300' : ''}  border-2 border-black pt-1 pb-1 mt-2 flex justify-center QuizInput2`}
                        value={"Maintain Weight"}
                        style={{marginLeft: 'auto', marginRight: 'auto'}}
                        onClick={handleButtonClick}
                    >Maintain Weight
                    </button>
                    <button
                        type={"button"}
                        className={`${weightGoal === 'Lose Weight' ? 'border-blue-800 bg-gray-300' : ''}  border-2 border-black pt-1 pb-1 mt-2 flex justify-center QuizInput2`}
                        value={"Lose Weight"}
                        style={{marginLeft: 'auto', marginRight: 'auto'}}
                        onClick={handleButtonClick}
                    >Lose Weight
                    </button>
                    <button
                        type={"button"}
                        className={`${weightGoal === 'Gain Weight' ? 'border-blue-800 bg-gray-300' : ''} border-2 border-black pt-1 pb-1 mt-2 flex justify-center QuizInput2`}
                        value={"Gain Weight"}
                        style={{marginLeft: 'auto', marginRight: 'auto'}}
                        onClick={handleButtonClick}
                    >Gain Weight
                    </button>
                    <h1 className={"text-center text-2xl mt-4 flex justify-center"}>General Goals</h1>
                    <h1 className={"text-center mt-1 flex justify-center"}>Select Any
                        General Goal You Have</h1>
                    <button type={"button"} value={"Manage Stress"}
                            className={"border-2 border-black pt-1 pb-1 mt-2 text-center flex justify-center QuizInput2"}
                            style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        Manage Stress
                    </button>
                    <button type={"button"} value={"Manage Diet"}
                            className={"border-2 border-black pt-1 pb-1 mt-2 text-center flex justify-center QuizInput2"}
                            style={{marginLeft: 'auto', marginRight: 'auto'}}>Manage Diet
                    </button>
                    <button type={"button"} value={"Be More Active"}
                            className={"border-black border-2 pt-1 pb-1 mt-2 text-center flex justify-center QuizInput2"}
                            style={{marginLeft: 'auto', marginRight: 'auto'}}>Be More Active
                    </button>
                    <button type={"button"} value={"Build Good Habits"}
                            className={"border-black border-2 pt-1 pb-1 mt-2 text-center flex justify-center QuizInput2"}
                            style={{marginLeft: 'auto', marginRight: 'auto'}}>Build Good Habits
                    </button>
                </div>
                <div id={"Health Information"}>
                    <h1 className={"text-center text-2xl mt-4 "}>Age</h1>
                    <div className={"flex justify-center"}>
                        <input type={"number"} min={"18"} max={"120"}
                               className={"text-lg text-black text-center border-black border-2 mt-2 QuizInput3"}/>
                        <h1 className={"text-lg mt-2 ml-2"}>years old</h1>
                    </div>
                    <h1 className={"text-center text-2xl mt-4 mb-2"}>Height</h1>
                    <div className={"flex justify-center"}>
                        <input
                            type="number" className={"border-2 border-black text-center QuizInput3"}
                            min="1" max="8" style={{marginRight: '5px'}}/> ft
                        <input
                            type="number" className={"border-2 border-black text-center QuizInput3"}
                            min="0" max="11" style={{marginRight: '5px', marginLeft: '5px'}}/>in
                    </div>
                    <h1 className={"text-center text-2xl mt-4"}>Current Weight</h1>
                    <p className={"text-center mt-1"}>Please Fill Your Current Weight In Pounds</p>
                    <input className={"border-2 border-black text-black mt-2 QuizInput4 flex"}
                           style={{marginLeft: 'auto', marginRight: 'auto'}}
                           type="number" min="0" max="800"/>
                    <h1 className={"text-center text-2xl mt-4"}>Weight Goal</h1>
                    <p className={"text-center mt-1"}>Please Fill Your Weight Goal In Pounds</p>
                    <input className={"border-2 border-black text-black mt-2 mb-16 QuizInput4 flex"}
                           style={{marginLeft: 'auto', marginRight: 'auto'}}
                           type="number" min={weightGoal === "Gain Weight" ? '200' : '0'} max="800"/>
                </div>
                <div className={"flex justify-center fixed bottom-0 w-screen"}>
                    <button
                        className={"bg-blue-800 border-2 pt-2 pb-2 w-screen text-2xl font-bold text-white rounded-xl"}
                    >Submit
                    </button>
                </div>
            </form>
        </main>
    );
}
