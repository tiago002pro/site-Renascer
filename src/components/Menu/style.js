import styled from 'styled-components';

export const LogoImage = styled.img`
    max-width: 168px;

    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuOptions = styled.nav`
    display: flex;
    list-style: none;
    font-size: 30px;

    margin: 0 10px;
    padding: 0px;
`;

export const MenuOptionsItems = styled.li`
    color: var(--white);
    list-style: none;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;
    
    margin: 0 10px;
    padding: 0px;

    &:hover,
    &:focus {
        opacity: .5;
    } 

    @media (max-width: 800px) {
        visibility: hidden;
    }
`;

export const MenuWrapper = styled.div`
    width: 100%;
    height: 94px;
    
    position: fixed;
    top: 0;
    left: 0%;
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--black);
    border-bottom: 5px solid blue;

    @media (max-width: 800px) {
        /* height: 40px;
        justify-content: center; */
    }
`;