import React from 'react';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuOptions, MenuWrapper, ButtonLink } from './style';

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Vandinho Soares Logo" />
            </a>

            <MenuOptions>
                <li>Home</li>
                <li>Music</li>
                <li>Video</li>
                <li>About</li>
            </MenuOptions>

            <ButtonLink as="a" className="ButtonLink" href="/">
                Partner
            </ButtonLink>
        </MenuWrapper>
    );
}

export default Menu;