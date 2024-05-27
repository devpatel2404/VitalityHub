"use client"
import MediaQuery from "react-responsive";
import mediaQuery from "react-responsive/src/mediaQuery";
import "./Home.css"

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

    // @ts-ignore
    let Enter = (e) =>{
        // @ts-ignore
        e.target.style.opacity = "0.8";
    }

    // @ts-ignore
    let Leave = (e) => {
        // @ts-ignore
        e.target.style.opacity = "1.25";
    }


    return(
        <main className={"bg-black w-screen mt-4 QandA pb-8"}>
            <h1 className={"text-center text-white pt-6 text-5xl mb-6"}>Q&A</h1>
            <div className={"mt-6 border-2 border-white mb-6 Container"}
                 style={{margin: 'auto', marginBottom: '1.5rem'}}>
                <div className={"flex justify-between pt-6 pb-6"}>
                    <h1 className={"text-2xl ml-4 text-white Question mr-2"}>What is included in
                        VitalityHub?</h1>
                    <button className={"mr-4 rounded-3xl bg-white"}
                            style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button1}
                            onMouseEnter={Enter}
                            onMouseLeave={Leave}>
                        <span id={"Home-Q&A-1DWN"}
                              className={"text-black DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-1UP"} className={"text-black UpArrow"}
                              hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-1"} hidden={true}
                   className={'text-center text-white text-lg Answer mr-2 ml-2'}>Hello this
                    all of the feature that my new app produces</p>
            </div>
            <div className={"border-2 border-white mb-6 Container"}
                 style={{margin: 'auto', marginBottom: '1.5rem'}}>
                <div className={"flex justify-between pt-6 pb-6"}>
                <h1 className={"text-2xl ml-4 text-white Question mr-2"}>How can VitalityHub help
                    me?</h1>
                    <button className={"mr-4 rounded-3xl bg-white"}
                            style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button2}
                            onMouseEnter={Enter}
                            onMouseLeave={Leave}>
                        <span id={"Home-Q&A-2DWN"}
                              className={"text-black DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-2UP"} className={"text-black UpArrow"}
                              hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-2"} hidden={true} className={'text-center text-white text-lg Answer mr-2 ml-2'}>Hello this
                    all of the feature that my new app produces</p>
            </div>
            <div className={"border-2 border-white mb-6 Container"}
                 style={{margin: 'auto', marginBottom: '1.5rem'}}>
                <div className={"flex justify-between pt-6 pb-6"}>
                    <h1 className={"text-2xl ml-4 text-white Question mr-2"}>Is VitalityHub compatible with other health
                        and fitness apps or devices?</h1>
                    <button className={"mr-4 rounded-3xl bg-white"}
                            style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button3}
                            onMouseEnter={Enter}
                            onMouseLeave={Leave}>
                        <span id={"Home-Q&A-3DWN"}
                              className={"text-black DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-3UP"} className={"text-black UpArrow"}
                              hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-3"} hidden={true} className={'text-center text-white text-lg Answer mr-2 ml-2'}>Hello this
                    all of the feature that my new app produces</p>
            </div>
            <div className={"border-2 border-white mb-6 Container"}
                 style={{margin: 'auto', marginBottom: '1.5rem'}}>
                <div className={"flex justify-between pt-6 pb-6"}>
                    <h1 className={"text-2xl ml-4 text-white Question mr-2"}>How do I get started with VitalityHub?</h1>
                    <button className={"mr-4 rounded-3xl bg-white"}
                            style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button4}
                            onMouseEnter={Enter}
                            onMouseLeave={Leave}>
                        <span id={"Home-Q&A-4DWN"}
                              className={"text-black DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-4UP"} className={"text-black UpArrow"}
                              hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-4"} hidden={true} className={'text-center text-white text-lg Answer mr-2 ml-2'}>Hello this
                    all of the feature that my new app produces</p>
            </div>
            <div className={"border-2 border-white Container"} style={{margin: 'auto'}}>
                <div className={"flex justify-between"}>
                    <h1 className={"text-2xl ml-6 text-white pt-6 pb-6 Question mr-2"}>Can I connect to other users on
                        VitalityHub?</h1>
                    <button className={"mr-4 rounded-3xl bg-white"}
                            style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button5}
                            onMouseEnter={Enter} onMouseLeave={Leave}>
                        <span id={"Home-Q&A-5DWN"}
                              className={"text-black DownArrow"}>&#8595;</span>
                        <span id={"Home-Q&A-5UP"} className={"text-black UpArrow"}
                              hidden={true}>&#8593;</span>
                    </button>
                </div>
                <p id={"Home-Q&A-5"} hidden={true} className={'text-center text-white text-lg Answer mr-2 ml-2'}>Hello this
                    all of the feature that my new app produces</p>
            </div>
        </main>
    );
}