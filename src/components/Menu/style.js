import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
    max-width: 168px;

    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuOptions = styled.ul`
    background-color: yellow;
    color: #000;
    list-style-type: none;
    display: flex;
    

    font-size: 10px;

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 580px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    
    position: fixed;
    top: 0;
    left: 0%;
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: var(--black);
    border-bottom: 10px solid red;

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;

export const ButtonLink = styled(Button)`  
    color: var(--white);
    border: 1px solid var(--white);
    padding: 20px 20px;
    font-size: 16px;
    border-radius: 4px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }

    @media (max-width: 800px) {
        background-color: var(--primary);
        border-radius: 0;
        bottom: 0;
        color: var(--white);
        left: 0;
        outline: 0;
        position: fixed;
        right: 0;
        text-align: center;
    }
`;