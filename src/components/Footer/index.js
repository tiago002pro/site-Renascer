import React from 'react';
import { FooterBase, FooterCircle, FooterImg, FooterBaseInsideTop, FooterBaseInsideMidlle, FooterBaseInsideDown } from './style';
import ButtonFooter from './components/ButtonFooter/ButtonFooter';
import { Link } from 'react-router-dom';

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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit diam ac per, facilisi fusce maximus mauris euismod auctor fringilla dignissim. 
                    Vitae pulvinar faucibus eleifend eros quam lectus platea hendrerit nisi laoreet, posuere vestibulum habitasse fermentum natoque dolor 
                    sodales feugiat imperdiet, ac consectetur quisque cubilia iaculis interdum pretium dictumst netus.
                </p>
                <ButtonFooter as={Link} className="ButtonLinkN" to="/">
                    Leia Mais
                </ButtonFooter>

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