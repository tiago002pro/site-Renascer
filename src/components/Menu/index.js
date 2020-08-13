import React from 'react';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuOptions, MenuOptionsItems, MenuWrapper } from './style';
import Button from '../Button';

// const items = ['Schedule', 'Music', 'Chords', 'Video', 'About'];

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Vandinho Soares Logo" />
            </a>

            <MenuOptions>
                {/* <MenuOptionsItems>{items}</MenuOptionsItems> */}
                <MenuOptionsItems as="a" href="/">Schedule</MenuOptionsItems>
                <MenuOptionsItems as="a" href="/">Music</MenuOptionsItems>
                <MenuOptionsItems as="a" href="/">Chords</MenuOptionsItems>
                <MenuOptionsItems as="a" href="/">Video</MenuOptionsItems>
                <MenuOptionsItems as="a" href="/">About</MenuOptionsItems>
            </MenuOptions>

            <Button as="a" className="ButtonLink" href="/">
                Partner
            </Button>
        </MenuWrapper>
    );
}

export default Menu;