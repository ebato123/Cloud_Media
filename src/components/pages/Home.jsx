import React from "react";

// COMPONENTS IMPORTS
import Media from "../Media";
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

/*Logo Imports*/
import mainVideo from "../../img/Cloud Media MAIN-VIDEO (no tv).mp4";
import netflixLogo from "../../img/netflix.png";
import maxLogo from "../../img/max.png";
import primeLogo from "../../img/amazon-prime.png";
import appleLogo from "../../img/apple-tv.png";
import disneyLogo from "../../img/disney-plus.png";
import starLogo from "../../img/star-plus.jpg";
import paramountLogo from "../../img/paramount-plus.png";
import youtubeLogo from "../../img/youtube.png";
import twitchLogo from "../../img/twitch.jpg";
import crunchyLogo from "../../img/Crunchyroll.webp";
import flowLogo from "../../img/flow.jpg";
import plutoLogo from "../../img/pluto-tv.jpg";


export default function Home (props){

    //changing variables
    let mainTittle = "";
    switch (props.lang) {
        case "en":  
        mainTittle = "A cloud of multimedia at your fingertips.";
        break;
        default:
        mainTittle = "Una nube de multimedia al alcance de tu mano.";
    }

    return(
        <>
            <Header lang={props.lang} path={props.path}/>
            <main className="row" id="HOME">
                <section id="M-SECTION-1" className="row SECTION p-4">
                    <h2>{mainTittle}</h2>
                </section>
                <section id="M-SECTION-2" className="row SECTION p-2 p-sm-5">
                    <video autoplay muted playsinline loop controls>
                        <source src={mainVideo} type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                </section>
                <section id="M-SECTION-3" className="row p-2 p-sm-4">
                    <Media
                        href="https://www.netflix.com/browse"
                        src={netflixLogo}
                        alt="netflix"
                        id="netflix"
                    ></Media>
                    <Media
                        href="https://auth.max.com"
                        src={maxLogo}
                        alt="max"
                        id="max"
                    ></Media>
                    <Media
                        href="https://www.primevideo.com"
                        src={primeLogo}
                        alt="prime"
                        id="prime"
                    ></Media>
                    <Media
                        href="https://www.apple.com/la/apple-tv-plus/"
                        src={appleLogo}
                        alt="apple"
                        id="apple"
                    ></Media>
                    <Media
                        href="https://www.disneyplus.com/es-419/home"
                        src={disneyLogo}
                        alt="disney"
                        id="disney"
                    ></Media>
                    <Media
                        href="https://www.starplus.com/movies"
                        src={starLogo}
                        alt="star"
                        id="star"
                    ></Media>
                    <Media
                        href="https://www.paramountplus.com/home/"
                        src={paramountLogo}
                        alt="paramount"
                        id="paramount"
                    ></Media>
                    <Media
                        href="https://www.youtube.com"
                        src={youtubeLogo}
                        alt="youtube"
                        id="youtube"
                    ></Media>
                    <Media
                        href="https://www.twitch.tv"
                        src={twitchLogo}
                        alt="twitch"
                        id="twitch"
                    ></Media>
                    <Media
                        href="https://www.crunchyroll.com/es/"
                        src={crunchyLogo}
                        alt="crunchy"
                        id="crunchy"
                    ></Media>
                    <Media
                        href="https://www.flow.com.ar"
                        src={flowLogo}
                        alt="flow"
                        id="flow"
                    ></Media>
                    <Media
                        href="https://pluto.tv/es"
                        src={plutoLogo}
                        alt="pluto"
                        id="pluto"
                    ></Media>
                </section>
            </main>
            <Footer lang={props.lang} path={props.path}/>
        </>
    );
}
