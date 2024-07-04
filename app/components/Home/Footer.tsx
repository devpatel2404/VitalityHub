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
        <main className={"Footer"}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                  integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                  crossOrigin="anonymous"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className={"NameContainer"}>
                <h1 className={"AppName"}>VitalityHub</h1>
            </div>
            <div className={"FooterLinks"}>
                <div className={"FooterProducts"}>
                    <h1 className={"FooterLinksTitle"}>Products</h1>
                    <h1 className={"FooterLinksSub"}>Apps</h1>
                    <h1 className={"FooterLinksSub"}>Foods</h1>
                    <h1 className={"FooterLinksSub"}>Exercises</h1>
                </div>
                <div className={"FooterResources"}>
                    <h1 className={"FooterLinksTitle"}>Resources</h1>
                    <h1 className={"FooterLinksSub"}>Blog</h1>
                    <h1 className={"FooterLinksSub"}>Community</h1>
                    <h1 className={"FooterLinksSub"}>Exercises</h1>
                </div>
                <div className={"FooterCustomerService"}>
                    <h1 className={"FooterLinksTitle"}>Customer Service</h1>
                    <h1 className={"FooterLinksSub"}>FAQ</h1>
                    <h1 className={"FooterLinksSub"}>Contact Us</h1>
                    <h1 className={"FooterLinksSub"}>Live Chat</h1>
                </div>
            </div>
            <Link href={"/Get-Started"}>
                <button id={"button"} onMouseEnter={Enter} onMouseLeave={Leave} className={"FooterButton"}>Start Today</button>
            </Link>
            <div className={""}>
                <div className={"FooterSocials"}>
                    <div className={""}>
                        <a href={"https://www.instagram.com/"} target={"_blank"}><i className={"fa fa-instagram Socials"}/></a>
                        <a href={"https://www.facebook.com/"} target={"_blank"}><i className={"fa fa-facebook Socials"} /></a>
                        <a href={"https://twitter.com/?lang=en"} target={"_blank"}><i className={"fa fa-twitter Socials"}/></a>
                        <a href={"https://www.linkedin.com/"} target={"_blank"}><i className={"fa fa-linkedin Socials"}/></a>
                        <a href={"https://www.twitch.tv/"} target={"_blank"}><i className={"fa fa-youtube-play Socials"}/></a>
                        <a href={"https://www.twitch.tv/"} target={"_blank"}><i className={"fab fa-tiktok Socials"}/></a>
                    </div>
                </div>
            </div>
        </main>
    );
}
