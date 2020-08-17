import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuOptions, MenuOptionsItems, MenuWrapper } from './style';
import './menu.css';
import Button from '../Button';

const items = [
    {
        name: "Agenda",
        href: "/"
    },
    {
        name: "Musicas",
        href: "/musicas"
    },
    {
        name: "Cifras",
        href: "/"
    },
    {
        name: "Videos",
        href: "/videos"
    },
    {
        name: "Sobre",
        href: "/"
    }
]

function Menu(){
    return (
        <MenuWrapper className="Menu">
            {/* <Link to="/">
                <LogoImage src={Logo} alt="Vandinho Soares Logo" />
            </Link> */}

            <MenuOptions>
                {items.map((item, index) => {
                    return(
                        <MenuOptionsItems key={item.index} as="a" href={item.href} >{item.name}</MenuOptionsItems>
                    );
                })}
            </MenuOptions>


            {/* <Button as={Link} className="ButtonLink" to="/">
                Partner
            </Button> */}
        </MenuWrapper>
    );
}

export default Menu;