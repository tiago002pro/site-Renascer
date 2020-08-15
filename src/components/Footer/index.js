import React from 'react';
import { FooterBase, FooterCircle, FooterImg, FooterBaseInsideTop, FooterBaseInsideMidlle, FooterBaseInsideDown } from './style';

const icons = [
    {
        name: "Facebook",
        src: "https://img.icons8.com/material-rounded/2x/facebook.png",
        alt: "Facebook",
        link: "https://www.facebook.com/wandersonsoaresoficial"
    },
    {
        name: "Instagram",
        src: "https://img.icons8.com/material-rounded/2x/instagram-new.png",   
        alt: "Instagram",
        link: "https://www.instagram.com/vandinho_oficial/?hl=pt-br"      
    },
    {
        name: "Spotify",
        src: "https://img.icons8.com/metro/2x/spotify.png",
        alt: "Spotify",
        link: "https://open.spotify.com/artist/4a1qfOJBGQxvJnTMQZc42f"
    },
    {
        name: "Youtube",
        src: "https://img.icons8.com/material-rounded/2x/youtube-play.png",
        alt: "Youtube",
        link: "https://www.youtube.com/channel/UCeSSFuT-E2Uj8uW2ThyiNqg"
    }
];


function Footer(){
    return(
        <FooterBase>
            <FooterBaseInsideTop>
                <h1>Title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit diam ac per, facilisi fusce maximus mauris euismod auctor fringilla dignissim. 
                    Vitae pulvinar faucibus eleifend eros quam lectus platea hendrerit nisi laoreet, posuere vestibulum habitasse fermentum natoque dolor 
                    sodales feugiat imperdiet, ac consectetur quisque cubilia iaculis interdum pretium dictumst netus. Cursus justo est sodales suscipit 
                    vehicula lacinia hendrerit scelerisque diam lacus, urna et in ad odio tortor eros porttitor feugiat, interdum lorem tincidunt ipsum 
                    torquent dolor cubilia porta fringilla. Maecenas iaculis phasellus penatibus sollicitudin magna diam aliquet sapien convallis est 
                    aliquam, mi sit nascetur porttitor amet pulvinar nunc malesuada et. Suspendisse fames aptent aliquam quam elementum amet blandit 
                    lacinia varius, sed vestibulum consequat cursus euismod volutpat nulla mauris arcu, maecenas proin adipiscing donec congue ut leo 
                    feugiat.
                </p>
            </FooterBaseInsideTop>

            <FooterBaseInsideMidlle>
                {icons.map((icon, index) => {
                    return(
                        <FooterCircle as="a" href={icon.link} key={index} target="_blank">
                            <FooterImg src={icon.src} alt={icon.alt} />
                        </FooterCircle>
                    );
                })}
            </FooterBaseInsideMidlle>

            <FooterBaseInsideDown>
                <p>Endereço Endereço Endereço Endereço Endereço</p>
            </FooterBaseInsideDown>
        </FooterBase>
    );
}

export default Footer;