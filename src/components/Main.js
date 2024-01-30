
import React from "react";
import Media from "./Media";
// import Form from "./Form";


/*Logo Imports*/
import mainImage from "../family_watching_tv.webp";
import netflixLogo from "../netflix.png";
import hboLogo from "../hbo.png";
import primeLogo from "../amazon-prime.png";
import appleLogo from "../apple-tv.png";
import disneyLogo from "../disney-plus.png";
import starLogo from "../star-plus.jpg";
import paramountLogo from "../paramount-plus.png";
import youtubeLogo from "../youtube.png";
import twitchLogo from "../twitch.jpg";
import crunchyLogo from "../Crunchyroll.webp";
import flowLogo from "../flow.jpg";
import plutoLogo from "../pluto-tv.jpg";


export default class Main extends React.Component {
    render() {
        return(
            <main className="row">
                <section id="M-SECTION-1" className="row SECTION">
                    <h2>Una nube de multimedia al alcance de tu mano.</h2>
                </section>
                <section id="M-SECTION-2" className="row SECTION p-5">
                    <img src={mainImage} alt="family-tv"></img>
                </section>
                <section id="M-SECTION-3" className="row p-3">
                        <Media href="https://www.netflix.com/browse" src={netflixLogo} alt="netflix"></Media>
                        <Media href="https://play.hbomax.com/page/urn:hbo:page:home" src={hboLogo} alt="hbo"></Media>
                        <Media href="https://www.primevideo.com" src={primeLogo} alt="prime"></Media>
                        <Media href="https://www.apple.com/la/apple-tv-plus/" src={appleLogo} alt="apple"></Media>
                        <Media href="https://www.disneyplus.com/es-419/home" src={disneyLogo} alt="disney"></Media>
                        <Media href="https://www.starplus.com/movies" src={starLogo} alt="star"></Media>
                        <Media href="https://www.paramountplus.com/home/" src={paramountLogo} alt="star"></Media>
                        <Media href="https://www.youtube.com" src={youtubeLogo} alt="youtube"></Media>
                        <Media href="https://www.twitch.tv" src={twitchLogo} alt="twitch"></Media>
                        <Media href="https://www.crunchyroll.com/es/" src={crunchyLogo} alt="crunchy"></Media>
                        <Media href="https://www.flow.com.ar" src={flowLogo} alt="flow"></Media>
                        <Media href="https://pluto.tv/es" src={plutoLogo} alt="pluto"></Media>
                </section>
            </main>
        );
    }
}