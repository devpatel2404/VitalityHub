"use client"
import MediaQuery from "react-responsive";
import mediaQuery from "react-responsive/src/mediaQuery";
import "../../Styles/Home.css"

export default function QandA(){
    function button1(){
        // @ts-ignore
        document.getElementById("Home-Q&A-1").hidden = !document.getElementById("Home-Q&A-1").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-1DWN").hidden = !document.getElementById("Home-Q&A-1DWN").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-1UP").hidden = !document.getElementById("Home-Q&A-1UP").hidden;
    }
    function button2(){
        // @ts-ignore
        document.getElementById("Home-Q&A-2").hidden = !document.getElementById("Home-Q&A-2").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-2DWN").hidden = !document.getElementById("Home-Q&A-2DWN").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-2UP").hidden = !document.getElementById("Home-Q&A-2UP").hidden;
    }
    function button3(){
        // @ts-ignore
        document.getElementById("Home-Q&A-3").hidden = !document.getElementById("Home-Q&A-3").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-3DWN").hidden = !document.getElementById("Home-Q&A-3DWN").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-3UP").hidden = !document.getElementById("Home-Q&A-3UP").hidden;
    }
    function button4(){
        // @ts-ignore
        document.getElementById("Home-Q&A-4").hidden = !document.getElementById("Home-Q&A-4").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-4DWN").hidden = !document.getElementById("Home-Q&A-4DWN").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-4UP").hidden = !document.getElementById("Home-Q&A-4UP").hidden;
    }
    function button5(){
        // @ts-ignore
        document.getElementById("Home-Q&A-5").hidden = !document.getElementById("Home-Q&A-5").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-5DWN").hidden = !document.getElementById("Home-Q&A-5DWN").hidden;
        // @ts-ignore
        document.getElementById("Home-Q&A-5UP").hidden = !document.getElementById("Home-Q&A-5UP").hidden;
    }

    return(
        <main className={"QandA"}>
            <h1 className={"QandATitle"}>Q&A</h1>
            <div className={"QandAContainer"}>
                <div className={"QuestionContainer"}>
                    <h1 className={"Question"}>What is included in VitalityHub?</h1>
                    <button className={"QandAButton"} onClick={button1}>
                        <span id={"Home-Q&A-1DWN"} className={"DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-1UP"} className={"UpArrow"} hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-1"} hidden={true} className={'Answer'}>Hello this
                    all of the feature that my new app produces
                </p>
            </div>
            <div className={"QandAContainer"}>
                <div className={"QuestionContainer"}>
                <h1 className={"Question"}>How can VitalityHub help me?</h1>
                    <button className={"QandAButton"} onClick={button2}>
                        <span id={"Home-Q&A-2DWN"} className={"DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-2UP"} className={"UpArrow"} hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-2"} hidden={true} className={''}>
                    Hello this all of the feature that my new app produces
                </p>
            </div>
            <div className={"QandAContainer"}>
                <div className={"QuestionContainer"}>
                    <h1 className={"Question"}>Is VitalityHub compatible with other health and fitness apps or devices?</h1>
                    <button className={"QandAButton"} onClick={button3}>
                        <span id={"Home-Q&A-3DWN"} className={"DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-3UP"} className={"UpArrow"} hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-3"} hidden={true} className={'Answer'}>
                    Hello this all of the feature that my new app produces
                </p>
            </div>
            <div className={"QandAContainer"}>
                <div className={"QuestionContainer"}>
                    <h1 className={"Question"}>How do I get started with VitalityHub?</h1>
                    <button className={"QandAButton"} onClick={button4}>
                        <span id={"Home-Q&A-4DWN"} className={"DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-4UP"} className={"UpArrow"} hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-4"} hidden={true} className={'Answer'}>
                    Hello this all of the feature that my new app produces
                </p>
            </div>
            <div className={"QandAContainer"}>
                <div className={"QuestionContainer"}>
                    <h1 className={"Question"}>Can I connect to other users on VitalityHub?</h1>
                    <button className={"QandAButton"} onClick={button5}>
                        <span id={"Home-Q&A-5DWN"} className={"DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-5UP"} className={"UpArrow"} hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-5"} hidden={true} className={'Answer'}>
                    Hello this all of the feature that my new app produces
                </p>
            </div>
        </main>
    );
}