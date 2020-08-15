import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuOptions, MenuOptionsItems, MenuWrapper } from './style';
import './menu.css';
import Button from '../Button';

const items = [
    {
        name: "Schedule",
        href: "/"
    },
    {
        name: "Music",
        href: "/musicas"
    },
    {
        name: "Chords",
        href: "/"
    },
    {
        name: "Video",
        href: "/videos"
    },
    {
        name: "About",
        href: "/"
    }
]

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="Vandinho Soares Logo" />
            </Link>

            <MenuOptions>
                {items.map((item, index) => {
                    return(
                        <MenuOptionsItems key={item.index} as="a" href={item.href} >{item.name}</MenuOptionsItems>
                    );
                })}
            </MenuOptions>

            <Button as={Link} className="ButtonLink" to="/">
                Partner
            </Button>
        </MenuWrapper>
    );
}

export default Menu;