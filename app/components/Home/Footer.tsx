"use client"
import MediaQuery from "react-responsive";
import Link from "next/link";

export default function Footer() {

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

    return (
        <main className={"w-screen bg-blue-800 text-white"}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                  integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                  crossOrigin="anonymous"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <MediaQuery minWidth={1200}>
                <div className={"flex justify-center"}>
                    <div className={"flex justify-center"}>
                        <h1 className={"text-3xl mt-16 mr-32"}>VitalityHub</h1>
                        <div className={"flex"}>
                            <div className={"mt-32"} style={{width: '400px'}}>
                                <h2 className={"text-2xl"}>Learn More About Us @</h2>
                                <div className={"mt-2"}>
                                    <a href={"https://www.instagram.com/"} target={"_blank"}
                                       style={{display: 'inline', margin: '10px', color: 'white', fontSize: '30px'}}>
                                        <i className={"fa fa-instagram"}></i></a>
                                    <a href={"https://www.facebook.com/"} target={"_blank"}
                                       style={{display: 'inline', margin: '10px', color: 'white', fontSize: '30px'}}>
                                        <i className={"fa fa-facebook"} style={{color: 'white', fontSize: '30px'}}></i></a>
                                    <a href={"https://twitter.com/?lang=en"} target={"_blank"}
                                       style={{display: 'inline', margin: '10px', color: 'white', fontSize: '30px'}}>
                                        <i className={"fa fa-twitter"}></i></a>
                                    <a href={"https://www.linkedin.com/"} target={"_blank"}
                                       style={{display: 'inline', margin: '10px'}}><i
                                        className={"fa fa-linkedin"} style={{color: 'white', fontSize: '30px'}}></i></a>
                                    <a href={"https://www.twitch.tv/"} target={"_blank"}
                                       style={{display: 'inline', margin: '10px'}}><i
                                        className={"fa fa-youtube-play"} style={{color: 'white', fontSize: '30px'}}></i></a>
                                    <a href={"https://www.twitch.tv/"} target={"_blank"}
                                       style={{display: 'inline', margin: '10px'}}><i
                                        className={"fab fa-tiktok"} style={{color: 'white', fontSize: '30px'}}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <div className={"mr-6 mt-32"}>
                            <h1 className={"text-2xl mr-4"}>Products</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>Apps</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>Foods</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>Exercises</h1>
                        </div>
                        <div className={"mr-6 mt-32"}>
                            <h1 className={"text-2xl mr-4"}>Resources</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>Blog</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>Community</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>Exercises</h1>
                        </div>
                        <div className={"mt-32"}>
                            <h1 className={"text-2xl mr-4"}>Customer Service</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>FAQ</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>Contact Us</h1>
                            <h1 className={"text-xl mt-1 mb-1"}>Live Chat</h1>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={599}>
                <div className={"flex justify-center"}>
                    <div>
                        <h1 className={"text-4xl text-center mt-6"}>VitalityHub</h1>
                        <div className={"flex justify-center mt-8"}>
                            <div className={"mr-4 ml-4"}>
                                <h1 className={"text-2xl mr-4"}>Products</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>Apps</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>Foods</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>Exercises</h1>
                            </div>
                            <div className={"mr-4 ml-4"}>
                                <h1 className={"text-2xl mr-4"}>Resources</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>Blog</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>Community</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>Exercises</h1>
                            </div>
                            <div className={"mr-4 ml-4"}>
                                <h1 className={"text-2xl mr-4"}>Customer Service</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>FAQ</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>Contact Us</h1>
                                <h1 className={"text-xl mt-1 mb-1"}>Live Chat</h1>
                            </div>
                        </div>
                        <Link href={"/Get-Started"}>
                            <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                    className={"text-lg text-blue-800 border-white border-2 rounded-3xl p-2 pl-6 pr-6 bg-white font-bold font-sans mt-6 relative left-1/3"}>
                                START TODAY
                            </button>
                        </Link>
                        <div className={"flex justify-center mt-4"}>
                            <a href={"https://www.instagram.com/"} target={"_blank"}
                               style={{display: 'inline', margin: '10px'}}><i className={"fa fa-instagram"} style={{
                                color: 'white',
                            fontSize: '30px'}}/></a>
                            <a href={"https://www.facebook.com/"} target={"_blank"}
                            style={{display: 'inline', margin: '10px'}}><i
                            className={"fa fa-facebook"} style={{color: 'white', fontSize: '30px'}}></i></a>
                            <a href={"https://twitter.com/?lang=en"} target={"_blank"}
                           style={{display: 'inline', margin: '10px'}}><i className={"fa fa-twitter"} style={{
                            color: 'white',
                            fontSize: '30px'}}/></a>
                            <a href={"https://www.linkedin.com/"} target={"_blank"}
                           style={{display: 'inline', margin: '10px'}}><i
                            className={"fa fa-linkedin"} style={{color: 'white', fontSize: '30px'}} /></a>
                            <a href={"https://www.twitch.tv/"} target={"_blank"}
                           style={{display: 'inline', margin: '10px'}}><i
                            className={"fa fa-youtube-play"} style={{color: 'white', fontSize: '30px'}} /></a>
                            <a href={"https://www.twitch.tv/"} target={"_blank"}
                           style={{display: 'inline', margin: '10px'}}><i
                            className={"fab fa-tiktok"} style={{color: 'white', fontSize: '30px'}} /></a>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={600} maxWidth={1199}>
                <div className={"flex justify-center"}>
                    <div>
                        <h1 className={"text-5xl text-center mt-6"}>VitalityHub</h1>
                        <div className={"flex justify-center mt-8"}>
                            <div className={"mr-4"}>
                                <h1 className={"text-3xl"}>Products</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>Apps</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>Foods</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>Exercises</h1>
                            </div>
                            <div className={"mr-4 ml-4"}>
                                <h1 className={"text-3xl"}>Resources</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>Blog</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>Community</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>Exercises</h1>
                            </div>
                            <div className={"ml-4"}>
                                <h1 className={"text-3xl"}>Customer Service</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>FAQ</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>Contact Us</h1>
                                <h1 className={"text-2xl mt-1 mb-1"}>Live Chat</h1>
                            </div>
                        </div>
                        <Link href={"/Get-Started"}>
                            <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                                    className={"text-lg text-blue-800 border-white border-2 rounded-3xl p-2 pl-6 pr-6 bg-white font-bold font-sans mt-6 relative left-1/3"}>
                                START TODAY
                            </button>
                        </Link>
                        <div className={"flex justify-center mt-4"}>
                            <a href={"https://www.instagram.com/"} target={"_blank"}
                               style={{display: 'inline', margin: '10px'}}><i className={"fa fa-instagram"} style={{
                                color: 'white',
                                fontSize: '30px'
                            }}/></a>
                            <a href={"https://www.facebook.com/"} target={"_blank"}
                               style={{display: 'inline', margin: '10px'}}><i
                                className={"fa fa-facebook"} style={{color: 'white', fontSize: '30px'}}></i></a>
                            <a href={"https://twitter.com/?lang=en"} target={"_blank"}
                               style={{display: 'inline', margin: '10px'}}><i className={"fa fa-twitter"} style={{
                                color: 'white',
                                fontSize: '30px'
                            }}/></a>
                            <a href={"https://www.linkedin.com/"} target={"_blank"}
                               style={{display: 'inline', margin: '10px'}}><i
                                className={"fa fa-linkedin"} style={{color: 'white', fontSize: '30px'}}/></a>
                            <a href={"https://www.twitch.tv/"} target={"_blank"}
                               style={{display: 'inline', margin: '10px'}}><i
                                className={"fa fa-youtube-play"} style={{color: 'white', fontSize: '30px'}}/></a>
                            <a href={"https://www.twitch.tv/"} target={"_blank"}
                               style={{display: 'inline', margin: '10px'}}><i
                                className={"fab fa-tiktok"} style={{color: 'white', fontSize: '30px'}}/></a>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </main>
    );
}
