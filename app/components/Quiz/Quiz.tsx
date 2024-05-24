"use client"
import {useState} from "react";
import MediaQuery from "react-responsive";

export default function QuizSection(){
    const [name, SetName] = useState('');
    let [weightGoal, setWeightGoal] = useState('');

    // @ts-ignore
    const handleButtonClick = (e) => {
        setWeightGoal(prevOption => (prevOption === e.target.value ? null : e.target.value));
    };
    return(
        <main>
            <MediaQuery maxWidth={549}>
                <form>
                    <h1 className={"text-center mt-2 text-2xl"}>Fill Out Your Personal Information</h1>
                    <h1 className={"text-center text-xl m-1"}>First name</h1>
                    <input placeholder={"Hello"} className={"text-black mt-1 w-3/5 border-black border-2"}
                           style={{marginLeft: '20vw', textIndent: '3px'}}></input>
                    <h1 className={"text-center text-xl mt-1 mb-1"}>Last name</h1>
                    <input placeholder={"Hello"} className={"text-black mt-1 w-3/5 border-black border-2"}
                           style={{marginLeft: '20vw', textIndent: '3px'}}></input>
                    <div id={"goals"}>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>My Weight
                            Goal</h1>
                        <p className={"text-center mt-1"} style={{marginLeft: "15vw", width: '70vw'}}>Select one of the
                            following weight goals.</p>
                        <button
                            type={"button"}
                            className={`${weightGoal === 'Maintain Weight' ? 'border-blue-800 bg-gray-300' : ''}  border-2 border-black pt-1 pb-1 mt-2 text-xl`}
                            value={"Maintain Weight"}
                            style={{marginLeft: '15vw', width: '70vw'}}
                            onClick={handleButtonClick}
                        >Maintain Weight
                        </button>
                        <button
                            type={"button"}
                            className={`${weightGoal === 'Lose Weight' ? 'border-blue-800 bg-gray-300' : ''}  border-2 border-black pt-1 pb-1 mt-2 text-xl`}
                            value={"Lose Weight"}
                            style={{marginLeft: '15vw', width: '70vw'}}
                            onClick={handleButtonClick}
                        >Lose Weight
                        </button>
                        <button
                            type={"button"}
                            className={`${weightGoal === 'Gain Weight' ? 'border-blue-800 bg-gray-300' : ''} border-2 border-black pt-1 pb-1 mt-2 text-xl`}
                            value={"Gain Weight"}
                            style={{marginLeft: '15vw', width: '70vw'}}
                            onClick={handleButtonClick}
                        >Gain Weight
                        </button>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>General
                            Goals</h1>
                        <h1 className={"text-center mt-1"} style={{marginLeft: '15vw', width: '70vw'}}>Select Any
                            General Goal You Have</h1>
                        <button type={"button"} value={"Manage Stress"}
                                className={"border-2 border-black pt-1 pb-1 mt-2 text-center"}
                                style={{marginLeft: '15vw', width: '70vw'}}>
                            Manage Stress
                        </button>
                        <button type={"button"} value={"Manage Diet"}
                                className={"border-2 border-black pt-1 pb-1 mt-2 text-center"}
                                style={{marginLeft: '15vw', width: '70vw'}}>
                            Manage Diet
                        </button>
                        <button type={"button"} value={"Be More Active"}
                                className={"border-black border-2 pt-1 pb-1 mt-2 text-center"}
                                style={{marginLeft: '15vw', width: '70vw'}}>
                            Be More Active
                        </button>
                        <button type={"button"} value={"Build Good Habits"}
                                className={"border-black border-2 pt-1 pb-1 mt-2 text-center"}
                                style={{marginLeft: '15vw', width: '70vw'}}>Build Good Habits
                        </button>
                    </div>
                    <div id={"Health Information"}>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>Age</h1>
                        <div className={"flex justify-center"}>
                            <input type={"number"} min={"18"} max={"120"}
                                   className={"text-lg text-black text-center border-black border-2 w-1/5 mt-2"}/>
                            <h1 className={"text-lg mt-2 ml-1"}>years old</h1>
                        </div>
                        <h1 className={"text-center text-2xl w-4/5 mt-4 mb-2"} style={{marginLeft: '10vw'}}>Height</h1>
                        <div className={"flex justify-center"}>
                            <input
                                type="number" className={"w-1/5 border-2 border-black text-center"}
                                min="1"
                                max="8" // Max height of 10 feet
                                style={{marginRight: '5px'}}
                            />
                            ft
                            <input
                                type="number" className={"w-1/5 border-2 border-black text-center"}
                                min="0"
                                max="11" // Max inches of 11 (0-11 is equivalent to 1 foot)
                                style={{marginRight: '5px', marginLeft: '5px'}}
                            />
                            in
                        </div>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>Current Weight</h1>
                        <p className={"text-center mt-1"} style={{marginLeft: "15vw", width: '70vw'}}>Please Fill Your
                            Current Weight In Pounds</p>
                        <input className={"border-2 border-black text-black mt-2 w-2/5"} style={{marginLeft: '30vw', textIndent: '3px'}}
                               type="number" min="0" max="800"/>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>Weight
                            Goal</h1>
                        <p className={"text-center mt-1"} style={{marginLeft: "15vw", width: '70vw'}}>Please Fill Your
                            Weight Goal In Pounds</p>
                        <input className={"border-2 border-black text-black mt-2 w-2/5 mb-16"}
                               style={{marginLeft: '30vw', textIndent: '3px'}}
                               type="number" min={weightGoal === "Gain Weight" ? '200' : '0'} max="800"/>
                    </div>
                    <div className={"flex justify-center fixed bottom-0 w-screen"}>
                        <button
                            className={"bg-blue-800 border-2 pt-2 pb-2 w-screen text-2xl font-bold text-white rounded-xl"}
                        >Submit
                        </button>
                    </div>
                </form>
            </MediaQuery>
            <MediaQuery minWidth={550}>
                <form>
                    <h1 className={"text-center mt-2 text-2xl"}>Fill Out Your Personal Information</h1>
                    <h1 className={"text-center text-xl m-1"}>First name</h1>
                    <input placeholder={"Hello"} className={"text-black mt-1 border-black border-2 flex"}
                           style={{textIndent: '3px', width: '400px', marginLeft: 'auto', marginRight: 'auto'}}></input>
                    <h1 className={"text-center text-xl mt-1 mb-1"}>Last name</h1>
                    <input placeholder={"Hello"} className={"text-black mt-1 w-3/5 border-black border-2 flex"}
                           style={{marginLeft: 'auto', marginRight: 'auto', textIndent: '3px', width: '400px'}}></input>
                    <div id={"goals"}>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>My Weight
                            Goal</h1>
                        <p className={"text-center mt-1"} style={{marginLeft: "15vw", width: '70vw'}}>Select one of the
                            following weight goals.</p>
                        <button
                            type={"button"}
                            className={`${weightGoal === 'Maintain Weight' ? 'border-blue-800 bg-gray-300' : ''} flex border-2 border-black pt-1 pb-1 mt-2 text-xl justify-center`}
                            value={"Maintain Weight"}
                            style={{marginLeft: 'auto', marginRight: 'auto', width: '500px'}}
                            onClick={handleButtonClick}
                        >Maintain Weight
                        </button>
                        <button
                            type={"button"}
                            className={`${weightGoal === 'Lose Weight' ? 'border-blue-800 bg-gray-300' : ''} flex justify-center border-2 border-black pt-1 pb-1 mt-2 text-xl`}
                            value={"Lose Weight"}
                            style={{marginLeft: 'auto', marginRight: 'auto', width: '500px'}}
                            onClick={handleButtonClick}
                        >Lose Weight
                        </button>
                        <button
                            type={"button"}
                            className={`${weightGoal === 'Gain Weight' ? 'border-blue-800 bg-gray-300' : ''} flex justify-center border-2 border-black pt-1 pb-1 mt-2 text-xl`}
                            value={"Gain Weight"}
                            style={{marginLeft: 'auto', marginRight: 'auto', width: '500px'}}
                            onClick={handleButtonClick}
                        >Gain Weight
                        </button>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>General
                            Goals</h1>
                        <h1 className={"text-center mt-1"} style={{marginLeft: '15vw', width: '70vw'}}>Select Any
                            General Goal You Have</h1>
                        <button type={"button"} value={"Manage Stress"}
                                className={"border-2 border-black pt-1 pb-1 mt-2 text-xl text-center flex justify-center"}
                                style={{marginLeft: 'auto', marginRight: 'auto', width: '500px'}}>
                            Manage Stress
                        </button>
                        <button type={"button"} value={"Manage Diet"}
                                className={"border-2 border-black pt-1 pb-1 mt-2 text-xl text-center flex justify-center"}
                                style={{marginLeft: 'auto', marginRight: 'auto', width: '500px'}}>
                            Manage Diet
                        </button>
                        <button type={"button"} value={"Be More Active"}
                                className={"border-2 border-black pt-1 pb-1 mt-2 text-xl text-center flex justify-center"}
                                style={{marginLeft: 'auto', marginRight: 'auto', width: '500px'}}>
                            Be More Active
                        </button>
                        <button type={"button"} value={"Build Good Habits"}
                                className={"border-2 border-black pt-1 pb-1 mt-2 text-xl text-center flex justify-center"}
                                style={{marginLeft: 'auto', marginRight: 'auto', width: '500px'}}>Build Good Habits
                        </button>
                    </div>
                    <div id={"Health Information"}>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>Age</h1>
                        <div className={"flex justify-center"}>
                            <input type={"number"} min={"18"} max={"120"}
                                   className={"text-lg text-black text-center border-black border-2 w-32 mt-2 pt-0.5 pb-0.5 pr-1"}/>
                            <h1 className={"text-lg mt-2.5 ml-1"}>years old</h1>
                        </div>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>Height</h1>
                        <div className={"flex justify-center mt-2"}>
                            <input
                                type="number" className={"w-1/5 border-2 border-black text-center pt-0.5 pb-0.5 w-32"}
                                min="1"
                                max="8" // Max height of 10 feet
                                style={{marginRight: '5px'}}
                            />
                            <h1 className={"mt-0.5 text-lg"}>ft</h1>
                            <input
                                type="number" className={"w-1/5 border-2 border-black text-center w-32 pt-0.5 pb-0.5"}
                                min="0"
                                max="11" // Max inches of 11 (0-11 is equivalent to 1 foot)
                                style={{marginRight: '5px', marginLeft: '5px'}}
                            />
                            <h1 className={"mt-0.5 text-lg"}>in</h1>
                        </div>
                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>Current Weight</h1>
                        <p className={"text-center mt-1"} style={{marginLeft: "15vw", width: '70vw'}}>Please Fill Your
                            Current Weight In Pounds</p>
                        <div className={"flex justify-center"}>
                            <input className={"border-2 border-black text-black mt-2 w-40 flex"}
                                   style={{textIndent: '3px'}}
                                   type="number" min="0" max="800"/>
                            <h1 className={"mt-2.5 ml-1"}>lbs</h1>
                        </div>

                        <h1 className={"text-center text-2xl w-4/5 mt-4"} style={{marginLeft: '10vw'}}>Weight
                            Goal</h1>
                        <p className={"text-center mt-1"} style={{marginLeft: "15vw", width: '70vw'}}>Please Fill Your
                            Weight Goal In Pounds</p>
                        <div className={"flex justify-center"}>
                            <input className={"border-2 border-black text-black mt-2 w-40 mb-20 flex"}
                                   style={{textIndent: '3px'}}
                                   type="number" min="0" max="800"/>
                            <h1 className={"mt-2.5 ml-1"}>lbs</h1>
                        </div>
                    </div>
                    <div className={"flex justify-center fixed bottom-0 w-screen"}>
                        <button
                            className={"bg-blue-800 border-2 pt-2 pb-2 w-screen text-2xl font-bold text-white rounded-xl"}
                        >Submit
                        </button>
                    </div>
                </form>
            </MediaQuery>
        </main>
    );
}
