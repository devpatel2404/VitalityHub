"use client"
import Link from "next/link";
import '../../Styles/Home.css'

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
        <main className={"w-screen bg-blue-800 text-white Footer pb-4 pt-4"}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                  integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                  crossOrigin="anonymous"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className={"text-center"}>
                <h1 className={"text-3xl"}>VitalityHub</h1>
            </div>
            <div className={"flex justify-center mb-4 mt-2 FooterLinks"}>
                <div className={"FooterProducts"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <h1 className={"FooterLinksTitle"}>Products</h1>
                    <h1 className={"mt-1 mb-1 FooterLinksSub"}>Apps</h1>
                    <h1 className={"mt-1 mb-1 FooterLinksSub"}>Foods</h1>
                    <h1 className={"mt-1 FooterLinksSub"}>Exercises</h1>
                </div>
                <div className={"FooterResources"} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <h1 className={"FooterLinksTitle"}>Resources</h1>
                    <h1 className={" mt-1 mb-1 FooterLinksSub"}>Blog</h1>
                    <h1 className={"text-xl mt-1 mb-1 FooterLinksSub"}>Community</h1>
                    <h1 className={"text-xl mt-1 FooterLinksSub"}>Exercises</h1>
                </div>
                <div className={"FooterCustomerService"}>
                    <h1 className={"FooterLinksTitle"}>Customer Service</h1>
                    <h1 className={"mt-1 mb-1 FooterLinksSub"}>FAQ</h1>
                    <h1 className={"mt-1 mb-1 FooterLinksSub"}>Contact Us</h1>
                    <h1 className={"mt-1 FooterLinksSub"}>Live Chat</h1>
                </div>
            </div>
            <Link href={"/Get-Started"}>
                <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave}
                        className={"FooterButton flex text-lg text-blue-800 border-white border-2 rounded-3xl p-2 pl-6 pr-6 bg-white font-bold font-sans"}>
                    START TODAY
                </button>
            </Link>
            <div className={"flex justify-center mt-2"}>
                <div className={"FooterSocials"}>
                    <div className={"flex justify-evenly"}>
                        <a href={"https://www.instagram.com/"} target={"_blank"}
                           style={{display: 'inline', marginTop: 'auto', marginBottom: 'auto'}}>
                            <i className={"fa fa-instagram"} style={{color: 'white', fontSize: '30px'}}></i></a>
                        <a href={"https://www.facebook.com/"} target={"_blank"}
                           style={{display: 'inline', marginTop: 'auto', marginBottom: 'auto'}}>
                            <i className={"fa fa-facebook"} style={{color: 'white', fontSize: '30px'}}></i></a>
                        <a href={"https://twitter.com/?lang=en"} target={"_blank"}
                           style={{display: 'inline', color: 'white', fontSize: '30px'}}>
                            <i className={"fa fa-twitter"} style={{color: 'white', fontSize: '30px'}}></i></a>
                        <a href={"https://www.linkedin.com/"} target={"_blank"}
                           style={{display: 'inline', marginTop: 'auto', marginBottom: 'auto'}}><i
                            className={"fa fa-linkedin"} style={{color: 'white', fontSize: '30px'}}></i></a>
                        <a href={"https://www.twitch.tv/"} target={"_blank"}
                           style={{display: 'inline', marginTop: 'auto', marginBottom: 'auto'}}><i
                            className={"fa fa-youtube-play"} style={{color: 'white', fontSize: '30px'}}></i></a>
                        <a href={"https://www.twitch.tv/"} target={"_blank"}
                           style={{display: 'inline', marginTop: 'auto', marginBottom: 'auto'}}><i
                            className={"fab fa-tiktok"} style={{color: 'white', fontSize: '30px'}}></i></a>
                    </div>
                </div>
            </div>
        </main>
    );
}
