"use client"
import MediaQuery from "react-responsive";
import mediaQuery from "react-responsive/src/mediaQuery";

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
        <main className={"bg-blue-800 w-screen mt-4"}>
            <h1 className={"text-center text-white pt-6 text-5xl"}>Q&A</h1>
            <div className={"mt-6 pb-8"}>
                <MediaQuery minWidth={1000}>
                        <div className={"border-2 border-white mb-6"}
                             style={{width: '900px', margin: 'auto', marginBottom: '1.5rem'}}>
                            <div className={"flex justify-between pt-6 pb-6"}>
                                <h1 className={"text-2xl ml-6 text-white"}>What is included in
                                    VitalityHub?</h1>
                                <button className={"mr-6 rounded-3xl bg-white"}
                                        onClick={button1}
                                        onMouseEnter={Enter}
                                        onMouseLeave={Leave}>
                                    <span id={"Home-Q&A-1DWN"}
                                          className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                    <span id={"Home-Q&A-1UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                          hidden={true}>&#8593;</span>
                                </button>
                            </div>
                            <p id={"Home-Q&A-1"} hidden={true} className={'text-center text-white text-lg'}>Hello this
                                all
                                of
                                the feature that my new app produces</p>
                        </div>
                        <div className={"border-2 border-white mb-6"}
                             style={{width: '900px', margin: 'auto', marginBottom: '1.5rem'}}>
                            <div className={"flex justify-between pt-6 pb-6"}>
                                <h1 className={"text-2xl ml-6 text-white"}>How can VitalityHub help
                                    me?</h1>
                                <button className={"mr-6 rounded-3xl bg-white h-8"}
                                        style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button2}
                                        onMouseEnter={Enter}
                                        onMouseLeave={Leave}>
                                    <span id={"Home-Q&A-2DWN"}
                                          className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                    <span id={"Home-Q&A-2UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                          hidden={true}>&#8593;</span>
                                </button>
                            </div>
                            <p id={"Home-Q&A-2"} hidden={true} className={'text-center text-white text-lg'}>Hello this
                                all
                                of
                                the feature that my new app produces</p>
                        </div>
                        <div className={"border-2 border-white mb-6"}
                             style={{width: '900px', margin: 'auto', marginBottom: '1.5rem'}}>
                            <div className={"flex justify-between pt-6 pb-6"}>
                                <h1 className={"text-2xl ml-6 text-white"}>Is VitalityHub compatible with other health
                                    and
                                    fitness apps or devices?</h1>
                                <button className={"mr-6 rounded-3xl bg-white h-8"}
                                        style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button3}
                                        onMouseEnter={Enter}
                                        onMouseLeave={Leave}>
                                    <span id={"Home-Q&A-3DWN"}
                                          className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                    <span id={"Home-Q&A-3UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                          hidden={true}>&#8593;</span>
                                </button>
                            </div>
                            <p id={"Home-Q&A-3"} hidden={true} className={'text-center text-white text-lg'}>Hello this
                                all
                                of
                                the feature that my new app produces</p>
                        </div>
                        <div className={"border-2 border-white mb-6"}
                             style={{width: '900px', margin: 'auto', marginBottom: '1.5rem'}}>
                            <div className={"flex justify-between pt-6 pb-6"}>
                                <h1 className={"text-2xl ml-6 text-white"}>How do I get started with VitalityHub?</h1>
                                <button className={"mr-6 rounded-3xl bg-white h-8"}
                                        style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button4}
                                        onMouseEnter={Enter}
                                        onMouseLeave={Leave}>
                                    <span id={"Home-Q&A-4DWN"}
                                          className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                    <span id={"Home-Q&A-4UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                          hidden={true}>&#8593;</span>
                                </button>
                            </div>
                            <p id={"Home-Q&A-4"} hidden={true} className={'text-center text-white text-lg'}>Hello this
                                all
                                of
                                the feature that my new app produces</p>
                        </div>
                        <div className={"border-2 border-white"} style={{width: '900px', margin: 'auto'}}>
                            <div className={"flex justify-between"}>
                                <h1 className={"text-2xl ml-6 text-white pt-6 pb-6"}>Can I connect to other users on
                                    VitalityHub?</h1>
                                <button className={"mr-6 rounded-3xl bg-white h-8"}
                                        style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button5}
                                        onMouseEnter={Enter} onMouseLeave={Leave}>
                                    <span id={"Home-Q&A-5DWN"}
                                          className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                    <span id={"Home-Q&A-5UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                          hidden={true}>&#8593;</span>
                                </button>
                            </div>
                            <p id={"Home-Q&A-5"} hidden={true} className={'text-center text-white text-lg'}>Hello this
                                all
                                of
                                the feature that my new app produces</p>
                        </div>
                </MediaQuery>
                <MediaQuery minWidth={550} maxWidth={999}>
                    <div className={"border-2 border-white mb-6"}
                         style={{width: '500px', margin: 'auto', marginBottom: '1.5rem'}}>
                        <div className={"flex justify-between pt-6 pb-6"}>
                            <h1 className={"text-xl ml-6 text-white"}>What is included in
                                VitalityHub?</h1>
                            <button className={"mr-6 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button1}
                                    onMouseEnter={Enter}
                                    onMouseLeave={Leave}>
                                <span id={"Home-Q&A-1DWN"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                <span id={"Home-Q&A-1UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-1"} hidden={true} className={'text-center text-white text-lg'}>Hello this all
                            of
                            the feature that my new app produces</p>
                    </div>
                    <div className={"border-2 border-white mb-6"}
                         style={{width: '500px', margin: 'auto', marginBottom: '1.5rem'}}>
                        <div className={"flex justify-between pt-6 pb-6"}>
                            <h1 className={"text-xl ml-6 text-white"}>How can VitalityHub help
                                me?</h1>
                            <button className={"mr-6 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button2}
                                    onMouseEnter={Enter}
                                    onMouseLeave={Leave}>
                                <span id={"Home-Q&A-2DWN"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                <span id={"Home-Q&A-2UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-2"} hidden={true} className={'text-center text-white text-lg'}>Hello this all
                            of
                            the feature that my new app produces</p>
                    </div>
                    <div className={"border-2 border-white mb-6"}
                         style={{width: '500px', margin: 'auto', marginBottom: '1.5rem'}}>
                        <div className={"flex justify-between pt-6 pb-6"}>
                            <h1 className={"text-xl ml-6 text-white"}>Is VitalityHub compatible with other health and
                                fitness apps or devices?</h1>
                            <button className={"mr-6 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button3}
                                    onMouseEnter={Enter}
                                    onMouseLeave={Leave}>
                                <span id={"Home-Q&A-3DWN"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                <span id={"Home-Q&A-3UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-3"} hidden={true} className={'text-center text-white text-lg'}>Hello this all
                            of
                            the feature that my new app produces</p>
                    </div>
                    <div className={"border-2 border-white mb-6"}
                         style={{width: '500px', margin: 'auto', marginBottom: '1.5rem'}}>
                        <div className={"flex justify-between pt-6 pb-6"}>
                            <h1 className={"text-xl ml-6 text-white"}>How do I get started with VitalityHub?</h1>
                            <button className={"mr-6 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button4}
                                    onMouseEnter={Enter}
                                    onMouseLeave={Leave}>
                                <span id={"Home-Q&A-4DWN"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                <span id={"Home-Q&A-4UP"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-4"} hidden={true} className={'text-center text-white text-lg'}>Hello this all
                            of
                            the feature that my new app produces</p>
                    </div>
                    <div className={"border-2 border-white"} style={{width: '500px', margin: 'auto'}}>
                        <div className={"flex justify-between"}>
                            <h1 className={"text-xl ml-6 text-white pt-6 pb-6"}>Can I connect to other users on
                                VitalityHub?</h1>
                            <button className={"mr-6 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button5}
                                    onMouseEnter={Enter} onMouseLeave={Leave}>
                                <span id={"Home-Q&A-5DWN"} className={"text-black text-2xl pl-2.5 pr-2.5 relative -top-1"}>&#8595;</span>
                                <span id={"Home-Q&A-5UP"} className={"text-white text-2xl pl-2.5 pr-2.5 relative -top-1"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-5"} hidden={true} className={'text-center text-white text-lg'}>Hello this all
                            of the feature that my new app produces</p>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={549}>
                    <div className={"border-2 border-white mb-6"}
                         style={{width: '340px', margin: 'auto', marginBottom: '1.5rem'}}>
                        <div className={"flex justify-between pt-6 pb-6"}>
                            <h1 className={"text-m ml-3 text-white"}>What is included in
                                VitalityHub?</h1>
                            <button className={"mr-3 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button1}
                                    onMouseEnter={Enter}
                                    onMouseLeave={Leave}>
                                <span id={"Home-Q&A-1DWN"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}>&#8595;</span>
                                <span id={"Home-Q&A-1UP"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-1"} hidden={true} className={'text-center text-white text-sm'}>Hello this all
                            of
                            the feature that my new app produces</p>
                    </div>
                    <div className={"border-2 border-white mb-6"}
                         style={{width: '340px', margin: 'auto', marginBottom: '1.5rem'}}>
                        <div className={"flex justify-between pt-6 pb-6"}>
                            <h1 className={"text-m ml-3 text-white"}>How can VitalityHub help
                                me?</h1>
                            <button className={"mr-3 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button2}
                                    onMouseEnter={Enter}
                                    onMouseLeave={Leave}>
                                <span id={"Home-Q&A-2DWN"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}>&#8595;</span>
                                <span id={"Home-Q&A-2UP"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-2"} hidden={true} className={'text-center text-white text-sm'}>Hello this all
                            of
                            the feature that my new app produces</p>
                    </div>
                    <div className={"border-2 border-white mb-6"}
                         style={{width: '340px', margin: 'auto', marginBottom: '1.5rem'}}>
                        <div className={"flex justify-between pt-6 pb-6"}>
                            <h1 className={"text-m ml-3 text-white"}>Is VitalityHub compatible with other health and
                                fitness apps or devices?</h1>
                            <button className={"mr-3 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button3}
                                    onMouseEnter={Enter}
                                    onMouseLeave={Leave}>
                                <span id={"Home-Q&A-3DWN"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}>&#8595;</span>
                                <span id={"Home-Q&A-3UP"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-3"} hidden={true} className={'text-center text-white text-sm'}>Hello this all
                            of
                            the feature that my new app produces</p>
                    </div>
                    <div className={"border-2 border-white mb-6"}
                         style={{width: '340px', margin: 'auto', marginBottom: '1.5rem'}}>
                        <div className={"flex justify-between pt-6 pb-6"}>
                            <h1 className={"text-m ml-3 text-white"}>How do I get started with VitalityHub?</h1>
                            <button className={"mr-3 rounded-3xl bg-white ml-1"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button4}
                                    onMouseEnter={Enter}
                                    onMouseLeave={Leave}>
                                <span id={"Home-Q&A-4DWN"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}>&#8595;</span>
                                <span id={"Home-Q&A-4UP"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-4"} hidden={true} className={'text-center text-white text-sm'}>Hello this all
                            of
                            the feature that my new app produces</p>
                    </div>
                    <div className={"border-2 border-white"} style={{width: '340px', margin: 'auto'}}>
                        <div className={"flex justify-between"}>
                            <h1 className={"text-m ml-3 text-white pt-6 pb-6"}>Can I connect to other users on
                                VitalityHub?</h1>
                            <button className={"mr-3 rounded-3xl bg-white"}
                                    style={{marginTop: 'auto', marginBottom: 'auto'}} onClick={button5}
                                    onMouseEnter={Enter} onMouseLeave={Leave}>
                                <span id={"Home-Q&A-5DWN"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}>&#8595;</span>
                                <span id={"Home-Q&A-5UP"} className={"text-black text-m relative -top-0.5 pl-2 pr-2"}
                                      hidden={true}>&#8593;</span>
                            </button>
                        </div>
                        <p id={"Home-Q&A-5"} hidden={true} className={'text-center text-white text-sm'}>Hello this all
                            of the feature that my new app produces</p>
                    </div>
                </MediaQuery>
            </div>
</main>
)
    ;
}